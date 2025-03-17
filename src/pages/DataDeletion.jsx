import React from "react";

const DataDeletion = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-20">
        <div className=" p-6">
          <h1 className="text-3xl font-bold mb-2 text-center">
            DATA AND ACCOUNT DELETION
          </h1>
          <p className="text-sm mb-8 text-center">
            Effective Date: February 25, 2025 | Last Updated: February 25, 2025
          </p>
        </div>
        <div className="bg-white p-6 rounded-b">
          <p>
            At ElevenHype.com ("Website," "we," "our," or "us"), we respect your
            right to control your personal data. This Data & Account Deletion
            Policy explains how you can request the removal of your personal
            data and the deletion of your account (if applicable). By using our
            Website, you acknowledge and agree to the terms outlined in this
            policy.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">
            1. What Data Do We Collect?
          </h2>
          <p>
            ElevenHype.com is a marketing and informational website. While we do
            not offer user account registrations, we may collect and store:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Contact details submitted via forms (e.g., name, email, phone
              number, company details).
            </li>
            <li>
              Data collected through analytics and cookies (refer to our Cookies
              Policy).
            </li>
            <li>Email subscriptions for marketing communications.</li>
          </ul>
          <p>
            If you have interacted with us in any of the ways above, you may
            request to have your data deleted.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">
            2. Requesting Data Deletion
          </h2>
          <p>
            If you wish to have your personal data deleted, you may submit a
            request by contacting us:
          </p>
          <p>Email: privacy@elevenhype.com</p>
          <p>
            Address: Rua Mohino de Vento, 125. EDF A, RC DTO, Vila Nova de Gaia,
            Porto, Portugal 4405-780
          </p>
          <p>Your request should include:</p>
          <ul className="list-disc list-inside">
            <li>
              Your full name and the email address associated with your
              submission.
            </li>
            <li>A description of the data you want deleted.</li>
            <li>Any relevant reference numbers (if applicable).</li>
          </ul>
          <p>
            We will process your request within 30 days of receiving it, subject
            to legal and business retention requirements.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">
            3. Data Retention & Exceptions
          </h2>
          <p>
            While we honor data deletion requests, certain information may be
            retained if required for:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Compliance with legal obligations (e.g., financial records, fraud
              prevention, regulatory requirements).
            </li>
            <li>
              Business operations (e.g., aggregated analytics data that does not
              personally identify users).
            </li>
            <li>Enforcing our Terms of Service.</li>
          </ul>
          <p>
            If we cannot fulfill your request due to legal or regulatory
            reasons, we will notify you accordingly.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">
            4. Email Subscription & Marketing Opt-Out
          </h2>
          <p>
            If you have subscribed to marketing emails, you may opt out at any
            time by:
          </p>
          <ul className="list-disc list-inside">
            <li>Clicking the "Unsubscribe" link in any of our emails.</li>
            <li>
              Sending a request to unsubscribe@elevenhype.com with the subject
              "Unsubscribe."
            </li>
          </ul>
          <p>
            Once unsubscribed, you will no longer receive marketing
            communications, but we may still retain records of your request for
            compliance purposes.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">
            5. Third-Party Data Handling
          </h2>
          <p>
            If you have submitted information to us via third-party platforms
            (e.g., LinkedIn, social media, event registrations), you will need
            to contact those platforms directly for data deletion requests. We
            are not responsible for data stored by third parties.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this Data & Account Deletion Policy from time to time.
            The latest version will always be available on this page, with the
            effective date displayed at the top.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about this policy or need assistance with
            your data deletion request, please contact us:
          </p>
          <p>Email: privacy@elevenhype.com</p>
          <p>
            Address: Rua Mohino de Vento, 125. EDF A, RC DTO, Vila Nova de Gaia,
            Porto, Portugal 4405-780
          </p>
          <strong>
            {" "}
            <p>Thank you for trusting ElevenHype.com with your data.</p>
          </strong>

          <div className="text-left mt-8">
          <a
            href="/"
            className="inline-flex items-center px-6 py-2 border-2 border-[#C7952C] text-[#C7952C] font-medium text-sm leading-tight rounded hover:bg-[#C7952C] hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to ElevenHype.com
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
