import React from "react";

const Accessibility = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-20">
        <div className=" p-6">
          <h1 className="text-3xl font-bold mb-2 text-center">
            ACCESSIBILITY STATEMENT
          </h1>
          <p className="text-sm mb-8 text-center">
            Effective Date: February 25, 2025 | Last Updated: February 25, 2025
          </p>
        </div>
        <div className="bg-white p-6 rounded-b">
          <p>
            At ElevenHype.com ("Website," "we," "our," or "us"), we are
            committed to ensuring digital accessibility for all users, including
            individuals with disabilities. We strive to make our website and
            services inclusive and user-friendly for everyone.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">
            1. Our Commitment to Accessibility
          </h2>
          <p>
            We aim to provide an accessible experience by following best
            practices and applicable accessibility laws, including the Web
            Content Accessibility Guidelines (WCAG) 2.1 at the AA level.
          </p>
          <p>Our efforts include:</p>
          <ul className="list-disc list-inside">
            <li>
              Designing our Website to be compatible with assistive
              technologies.
            </li>
            <li>
              Implementing accessibility features such as text alternatives for
              images, keyboard navigation support, and contrast settings.
            </li>
            <li>
              Regularly reviewing and improving accessibility features to
              enhance usability.
            </li>
          </ul>
          <h2 className="text-xl font-bold mt-6 mb-2">
            2. Features That Improve Accessibility
          </h2>
          <p>To make ElevenHype.com accessible to all, we have incorporated:</p>
          <ul className="list-disc list-inside">
            <li>
              Keyboard Navigation Support – All interactive elements are
              accessible via keyboard input.
            </li>
            <li>
              Screen Reader Compatibility – Content is structured for
              compatibility with screen readers.
            </li>
            <li>
              Alternative Text for Images – Descriptive text is provided for
              images and non-text content.
            </li>
            <li>
              Contrast & Readability Adjustments – Text and background colors
              ensure legibility.
            </li>
            <li>
              Resizable Text – Users can adjust text size through browser
              settings without breaking the layout.
            </li>
          </ul>
          <h2 className="text-xl font-bold mt-6 mb-2">
            3. Ongoing Accessibility Efforts
          </h2>
          <p>We are continuously working to improve accessibility by:</p>
          <ul className="list-disc list-inside">
            <li>Conducting periodic accessibility audits and testing.</li>
            <li>Gathering feedback from users with disabilities.</li>
            <li>Implementing updates to address accessibility barriers.</li>
          </ul>
          <h2 className="text-xl font-bold mt-6 mb-2">
            4. Third-Party Content & Accessibility
          </h2>
          <p>
            While we strive to ensure accessibility on our Website, some
            third-party content or embedded services (such as social media feeds
            and external videos) may not be fully accessible. We encourage
            third-party providers to improve their accessibility standards.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">
            5. Reporting Accessibility Issues
          </h2>
          <p>
            If you encounter any accessibility barriers while using
            ElevenHype.com, please let us know. We appreciate your feedback and
            will make every effort to address issues promptly.
          </p>
          <p>Email: privacy@elevenhype.com</p>
          <p>
            Address: Rua Mohino de Vento, 125. EDF A, RC DTO, Vila Nova de Gaia,
            Porto, Portugal 4405-780
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">
            6. Updates to This Accessibility Statement
          </h2>
          <p>
            We may update this statement periodically to reflect improvements
            and changes in accessibility standards. Any updates will be posted
            on this page with an updated effective date.
          </p>
          <strong>
            <p>
              Thank you for visiting ElevenHype.com. We are dedicated to
              providing an inclusive experience for all users.
            </p>
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

export default Accessibility;
