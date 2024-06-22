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

  const initialValues: FormValues = {
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
  };

  const [formData, setFormData] = useState<FormValues>(initialValues);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [paymentInitialized, setPaymentInitialized] = useState(false);
  const [planDetails, setPlanDetails] = useState<planDetails>();
  const emailRef = useRef<string>(""); // Use ref to store email

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
      const email = emailRef.current; // Access email value from the ref

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
    <>
      <div className="cs_height_150 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_contact">
            <div className="cs_contact_text">
              <p className="cs_contact_subtitle anim_text_upanddowns">
                Membership Form
              </p>
              <h1 className="cs_contact_title anim_text_writting">
                Become a Member
              </h1>
            </div>
            <div className="cs_height_80 cs_height_lg_20"></div>
            <div className="cs_from anim_div_ShowDowns">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="title" className="form-label">
                      Title <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="MR">Mr.</option>
                      <option value="MRS">Mrs.</option>
                      <option value="MS">Ms.</option>
                      <option value="DR">Dr.</option>
                      <option value="PROF">Prof.</option>
                      <option value="REV">Rev.</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="designation" className="form-label">
                      Designation <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="department" className="form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="DateOfBirth" className="form-label">
                      Date Of Birth <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="DateOfBirth"
                      name="DateOfBirth"
                      value={formData.DateOfBirth.toString()}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="aadharNumber" className="form-label">
                      Aadhar Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="aadharNumber"
                      name="aadharNumber"
                      value={formData.aadharNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="collegeName" className="form-label">
                      College Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="collegeName"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="address" className="form-label">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label">
                      City <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="state" className="form-label">
                      State <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="country" className="form-label">
                      Country <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="postalCode" className="form-label">
                      Postal Code <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="twitter" className="form-label">
                      Twitter
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="twitter"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="linkedin" className="form-label">
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="website" className="form-label">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">
                    Bio <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="profilePicture" className="form-label">
                    Profile Picture <span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="profilePicture"
                    name="profilePicture"
                    accept=".jpg, .jpeg, .png"
                    required
                    onChange={(e) => {
                      const file = e.target.files ? e.target.files[0] : null;
                      if (file && file.size > 2 * 1024 * 1024) {
                        // If the file size is greater than 2MB, show an error message and reset the input field
                        alert("File size exceeds 2MB");
                        e.target.value = ""; // Reset the input field
                      } else {
                        setFormData({
                          ...formData,
                          profilePicture: file,
                        });
                      }
                    }}
                  />
                </div>

                {loading && <div>Loading...</div>}

                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    <span>Pay Now</span>
                    <svg
                      width="19"
                      height="13"
                      viewBox="0 0 19 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default MembersForm;
