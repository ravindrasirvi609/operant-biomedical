import React from "react";
import Link from "next/link";

const RefundPolicyPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center py-12 px-4">
    <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-primary-100 dark:border-primary-900">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary-700 dark:text-primary-400 text-center drop-shadow-lg">
        Refund & Transfer Policy
      </h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-200 text-center">
        Thank you for choosing to be part of the scientific community at{" "}
        <span className="font-semibold">
          Operant Biomedical Research Federation
        </span>
        .
      </p>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
        We would like to bring to your attention our policy regarding refunds
        and transfer of registrations/payments.
      </p>
      <ul className="list-disc list-inside mb-4 text-base text-gray-700 dark:text-gray-300 space-y-2">
        <li>
          All payments made towards conference registration fees, course
          enrollments, membership fees, or any associated services are{" "}
          <span className="font-semibold text-primary-700 dark:text-primary-400">
            non-refundable
          </span>{" "}
          under any circumstances.
        </li>
        <li>
          Once a payment has been successfully processed, it shall be considered{" "}
          <span className="font-semibold text-primary-700 dark:text-primary-400">
            final and non-transferable
          </span>{" "}
          to another individual, event, or service.
        </li>
      </ul>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
        This policy is in place to maintain fairness, streamline administrative
        processes, and ensure the highest standards of planning and delivery for
        all our academic and scientific initiatives.
      </p>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
        We strongly advise all participants and members to carefully review the
        event or service details before making a payment. For any clarification
        or assistance, you are welcome to reach out to our support team prior to
        registration or payment.
      </p>
      <p className="mb-6 text-base text-gray-700 dark:text-gray-300">
        We appreciate your understanding and cooperation.
      </p>
      <div className="text-center">
        <Link
          href="/contact"
          className="inline-block px-6 py-2 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-300 shadow"
        >
          Contact Support
        </Link>
      </div>
    </div>
  </div>
);

export default RefundPolicyPage;
