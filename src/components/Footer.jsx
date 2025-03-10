import React from "react";
import { useTranslation } from "react-i18next";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#F3F4F6] py-8">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="md:w-1/4 mb-8 md:mb-0">
            <img src="/assets/icons/logo.png" alt="Logo" className="h-8 mb-4" />
            <p className="text-sm">{t("footer.revolutionizing_football")}</p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4">{t("footer.quick_links")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm hover:text-[#C7952C]">
                  {t("navbar.home")}
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm hover:text-[#C7952C]">
                  {t("navbar.features")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm hover:text-[#C7952C]">
                  {t("navbar.gallery")}
                </a>
              </li>
              <li>
                <a href="#core-values" className="text-sm hover:text-[#C7952C]">
                  {t("navbar.core_values")}
                </a>
              </li>
              <li>
                <a href="#why-choose" className="text-sm hover:text-[#C7952C]">
                  {t("navbar.why_choose")}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm hover:text-[#C7952C]"
                >
                  {t("navbar.how_it_works")}
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-sm hover:text-[#C7952C]">
                  {t("navbar.contacts")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm hover:text-[#C7952C]"
                >
                  <img
                    src="/assets/icons/privacy.png"
                    alt="Privacy Policy"
                    className="inline h-4 mr-2"
                  />
                  {t("footer.privacy_policy")}
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-sm hover:text-[#C7952C]"
                >
                  <img
                    src="/assets/icons/terms.png"
                    alt="Terms of Service"
                    className="inline h-4 mr-2"
                  />
                  {t("footer.terms_of_service")}
                </a>
              </li>
              <li>
                <a
                  href="/cookies-policy"
                  className="text-sm hover:text-[#C7952C]"
                >
                  <img
                    src="/assets/icons/cookies.png"
                    alt="Cookies Policy"
                    className="inline h-4 mr-2"
                  />
                  {t("footer.cookies_policy")}
                </a>
              </li>
              <li>
                <a
                  href="/data-deletion"
                  className="text-sm hover:text-[#C7952C]"
                >
                  <img
                    src="/assets/icons/deletion.png"
                    alt="Data and Account Deletion"
                    className="inline h-4 mr-2"
                  />
                  {t("footer.data_deletion")}
                </a>
              </li>
              <li>
                <a
                  href="/investor-relations"
                  className="text-sm hover:text-[#C7952C]"
                >
                  <img
                    src="/assets/icons/investor.png"
                    alt="Investor Relations and Business Terms"
                    className="inline h-4 mr-2"
                  />
                  {t("footer.investor_relations")}
                </a>
              </li>
              <li>
                <a
                  href="/marketing-disclaimer"
                  className="text-sm hover:text-[#C7952C]"
                >
                  <img
                    src="/assets/icons/marketing.png"
                    alt="Marketing and Communication Disclaimer"
                    className="inline h-4 mr-2"
                  />
                  {t("footer.marketing_disclaimer")}
                </a>
              </li>
              <li>
                <a
                  href="/accessibility"
                  className="text-sm hover:text-[#C7952C]"
                >
                  <img
                    src="/assets/icons/accessibility.png"
                    alt="Accessibility Statement"
                    className="inline h-4 mr-2"
                  />
                  {t("footer.accessibility")}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">{t("footer.connect")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-[#C7952C] flex items-center"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-[#C7952C] flex items-center"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-[#C7952C] flex items-center"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-[#C7952C] flex items-center"
                >
                  <Twitter className="h-4 w-4 mr-2" />X
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-[#E5E7EB] my-5" />
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} 11 Hype. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
