"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface FormValues {
  title: string;
  name: string;
  email: string;
  department: string;
  designation: string;
  phone: string;
  DateOfBirth: Date;
  aadharNumber: string;
  bio: string;
  collegeName: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  twitter: string;
  linkedin: string;
  website: string;
  profilePicture: File | null;
}

interface planDetails {
  features?: string[];
  benefits?: string[];
  name?: string;
  planId?: string;
  price: number;
  currency: string;
}

interface MembersFormProps {
  pramsId: any;
}

const MembersForm: React.FC<MembersFormProps> = ({ pramsId }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormValues>({
    title: "",
    name: "",
    email: "",
    department: "",
    designation: "",
    phone: "",
    DateOfBirth: new Date(),
    aadharNumber: "",
    bio: "",
    collegeName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    twitter: "",
    linkedin: "",
    website: "",
    profilePicture: null,
  });
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [paymentInitialized, setPaymentInitialized] = useState(false);
  const [planDetails, setPlanDetails] = useState<planDetails>();
  const emailRef = useRef<string>("");

  useEffect(() => {
    getMembershipDetails(pramsId);
    initializeRazorpay();
  }, [pramsId]);

  const getMembershipDetails = async (id: string) => {
    const response = await axios.post(
      "/api/membershipPlan/membershipPlanDetails",
      id
    );

    const planDetails = {
      price: response.data.membershipPlan.price,
      currency: "INR",
      planId: response.data.membershipPlan._id,
      name: response.data.membershipPlan.name,
      features: response.data.membershipPlan.features,
      benefits: response.data.membershipPlan.benefits,
    };

    setPlanDetails(planDetails);
  };

  const makePayment = async () => {
    if (!paymentInitialized) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {
      const payload = {
        amount: planDetails?.price,
        currency: "INR",
        payment_capture: 1,
      };
      const response = await axios.post("/api/payments/rozorpay", payload);
      const data = response.data;
      const email = emailRef.current;

      const options = {
        name: "Operant Biomedical federation",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you",
        handler: async function (response: any) {
          const payment = {
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            amount: data.amount,
            currency: data.currency,
            status: "success",
            plan: planDetails?.planId,
            user: email,
          };

          const resultRes = await axios.post(
            "/api/payments/transaction",
            payment
          );
          console.log("resultRes", resultRes);

          if (resultRes.status !== 201) {
            Swal.fire({
              title: "Error!",
              text: "Payment failed, please contact support.",
              icon: "error",
            });
            return;
          } else {
            Swal.fire({
              title: "Good job!",
              text: "Your Payment is successful!, You are now a member of Operant Biomedical federation.",
              icon: "success",
            });
            router.push("/membership");
          }
          try {
            const json = {
              orderId: resultRes.data.transaction.orderId,
            };
            const invoiceResponse = await axios.post(
              "/api/payments/invoice",
              json,
              { responseType: "arraybuffer" }
            );

            const blob = new Blob([invoiceResponse.data], {
              type: "application/pdf",
            });

            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = `invoice_${data.id}.pdf`;

            document.body.appendChild(link);
            setTimeout(() => {
              link.click();

              document.body.removeChild(link);
            }, 1000);
          } catch (error) {
            console.error("Error downloading invoice:", error);
          }
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error: any) {}
  };

  const initializeRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      setPaymentInitialized(true);
    };
    script.onerror = () => {
      setPaymentInitialized(false);
    };
    document.body.appendChild(script);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/membership/newMembership",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const emailFromResponse = response.data.blogPost.email;
      if (emailFromResponse) {
        emailRef.current = emailFromResponse;
        await makePayment();
      } else {
        Swal.fire(
          "Error",
          "Email not set. Cannot proceed with payment.",
          "error"
        );
      }
    } catch (error: any) {
      console.error(error);
      Swal.fire("Error", error.response.data.error, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Form Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-500/10 rounded-full mb-4">
              <span className="text-primary-600 dark:text-primary-300 text-sm font-medium">
                Complete Your Profile
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Become a Member
            </h2>
            <p className="text-gray-600 dark:text-white/80 text-lg">
              Fill in your details to complete your membership registration
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Title <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Title</option>
                      <option value="MR">Mr.</option>
                      <option value="MRS">Mrs.</option>
                      <option value="MS">Ms.</option>
                      <option value="DR">Dr.</option>
                      <option value="PROF">Prof.</option>
                      <option value="REV">Rev.</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                  Professional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="designation"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="designation"
                      name="designation"
                      placeholder="Enter your designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="department"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Department <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="department"
                      name="department"
                      placeholder="Enter your department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="collegeName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      College/University <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="collegeName"
                      name="collegeName"
                      placeholder="Enter your college/university name"
                      value={formData.collegeName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="DateOfBirth"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="DateOfBirth"
                      name="DateOfBirth"
                      value={formData.DateOfBirth.toString()}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                  Address Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2 space-y-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="address"
                      name="address"
                      placeholder="Enter your full address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="city"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="state"
                      name="state"
                      placeholder="Enter your state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="country"
                      name="country"
                      placeholder="Enter your country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="postalCode"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Enter your postal code"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="aadharNumber"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Aadhar Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="aadharNumber"
                      name="aadharNumber"
                      placeholder="Enter your Aadhar number"
                      value={formData.aadharNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-span-2 space-y-2">
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Bio <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 min-h-[120px]"
                      id="bio"
                      name="bio"
                      placeholder="Tell us about yourself"
                      value={formData.bio}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="twitter"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Twitter Profile
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="twitter"
                      name="twitter"
                      placeholder="Enter your Twitter handle"
                      value={formData.twitter}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      LinkedIn Profile
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="linkedin"
                      name="linkedin"
                      placeholder="Enter your LinkedIn profile URL"
                      value={formData.linkedin}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Personal Website
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      id="website"
                      name="website"
                      placeholder="Enter your website URL"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="profilePicture"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Profile Picture <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg hover:border-primary-500 dark:hover:border-primary-400 transition-colors duration-200">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600 dark:text-gray-400">
                          <label
                            htmlFor="profilePicture"
                            className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="profilePicture"
                              name="profilePicture"
                              type="file"
                              className="sr-only"
                              accept=".jpg, .jpeg, .png"
                              required
                              onChange={(e) => {
                                const file = e.target.files
                                  ? e.target.files[0]
                                  : null;
                                if (file && file.size > 2 * 1024 * 1024) {
                                  Swal.fire({
                                    title: "Error!",
                                    text: "File size exceeds 2MB",
                                    icon: "error",
                                  });
                                  e.target.value = "";
                                } else {
                                  setFormData({
                                    ...formData,
                                    profilePicture: file,
                                  });
                                }
                              }}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PNG, JPG, JPEG up to 2MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="flex items-center justify-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <span>Complete Registration</span>
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersForm;
