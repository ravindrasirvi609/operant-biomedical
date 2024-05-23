import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";

const Refund = () => {
  return (
    <div>
      <Wrapper>
        <HeaderOne />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <div className="container my-5">
                <div className="bg-light p-5 rounded shadow-sm">
                  <h1 className="mb-4 text-center">
                    Refund and Shipping Policy
                  </h1>

                  <section className="mb-5">
                    <h4>Refund Policy</h4>
                    <p>
                      Operant Biomedical Research Federation (OBRF) is dedicated
                      to ensuring your satisfaction with our services and
                      products. If you are not satisfied with your purchase,
                      please review our refund policy below:
                    </p>
                    <h6>Eligibility for Refunds</h6>
                    <p>
                      To be eligible for a refund, the following conditions must
                      be met:
                    </p>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">
                        The request for a refund must be made within 30 days of
                        the purchase date.
                      </li>
                      <li className="list-group-item">
                        The product or service must be unused and in the same
                        condition as when you received it.
                      </li>
                      <li className="list-group-item">
                        Proof of purchase, such as a receipt or order number,
                        must be provided.
                      </li>
                    </ul>
                    <h6>Non-Refundable Items</h6>
                    <p>Certain items are non-refundable, including:</p>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">
                        Downloadable software products
                      </li>
                      <li className="list-group-item">
                        Services that have already been rendered
                      </li>
                      <li className="list-group-item">
                        Products that have been used or damaged by the customer
                      </li>
                    </ul>
                    <h6>How to Request a Refund</h6>
                    <p>
                      To request a refund, please contact our customer service
                      team with your order details and the reason for the refund
                      request. You can reach us at:
                    </p>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">
                        Email:{" "}
                        <a href="mailto:support@obrf.org">support@obrf.org</a>
                      </li>
                      <li className="list-group-item">Phone: (123) 456-7890</li>
                    </ul>
                    <h6>Processing Refunds</h6>
                    <p>
                      Once your refund request is received and inspected, we
                      will notify you of the approval or rejection of your
                      refund. If approved, the refund will be processed and a
                      credit will be applied to your original method of payment
                      within a certain number of days.
                    </p>
                  </section>

                  <section className="mb-5">
                    <h4>Shipping Policy</h4>
                    <p>
                      OBRF aims to provide efficient and reliable shipping
                      services. Please review our shipping policy below:
                    </p>
                    <h6>Shipping Rates and Delivery Estimates</h6>
                    <p>
                      Shipping charges and delivery estimates will vary based on
                      the destination and the shipping method selected at
                      checkout. The estimated delivery time will be provided at
                      checkout.
                    </p>
                    <h6>Order Processing Time</h6>
                    <p>
                      All orders are processed within 1-2 business days. Orders
                      are not shipped or delivered on weekends or holidays. If
                      we experience a high volume of orders, shipments may be
                      delayed by a few days. Please allow additional days in
                      transit for delivery. If there will be a significant delay
                      in the shipment of your order, we will contact you via
                      email or phone.
                    </p>
                    <h6>Shipping Confirmation and Order Tracking</h6>
                    <p>
                      You will receive a shipping confirmation email once your
                      order has shipped containing your tracking number(s). The
                      tracking number will be active within 24 hours.
                    </p>
                    <h6>Customs, Duties, and Taxes</h6>
                    <p>
                      OBRF is not responsible for any customs and taxes applied
                      to your order. All fees imposed during or after shipping
                      are the responsibility of the customer (tariffs, taxes,
                      etc.).
                    </p>
                    <h6>Damages</h6>
                    <p>
                      OBRF is not liable for any products damaged or lost during
                      shipping. If you received your order damaged, please
                      contact the shipment carrier to file a claim. Please save
                      all packaging materials and damaged goods before filing a
                      claim.
                    </p>
                    <h6>International Shipping</h6>
                    <p>
                      We currently do not ship outside the domestic United
                      States. If you have any questions regarding our shipping
                      policy, please contact us at{" "}
                      <a href="mailto:support@obrf.org">support@obrf.org</a>.
                    </p>
                  </section>

                  <section>
                    <h4>Contact Us</h4>
                    <p>
                      If you have any questions about our refund and shipping
                      policy, please contact us:
                    </p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        By email:{" "}
                        <a href="mailto:support@obrf.org">support@obrf.org</a>
                      </li>
                      <li className="list-group-item">
                        By phone: (123) 456-7890
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </main>
            <FooterOne />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Refund;
