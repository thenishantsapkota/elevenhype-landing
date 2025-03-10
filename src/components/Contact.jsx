import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "Player",
    purpose: "Book a demo",
    message: "",
    acknowledgement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="container mx-auto px-4 py-8 md:px-20">
      <div className="text-center mb-8">
        <h2 className="text-[#C7952C] text-2xl md:text-3xl font-bold text-center">
          {t("contact.title")}
        </h2>
        <p className="text-sm md:text-base mt-2 whitespace-pre-line">{t("contact.subtitle")}</p>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="name">
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="email">
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="organization">
                {t("contact.organization")}
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="role">
                {t("contact.role")}
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              >
                <option value="Player">{t("contact.roles.player")}</option>
                <option value="Parent">{t("contact.roles.parent")}</option>
                <option value="Coach">{t("contact.roles.coach")}</option>
                <option value="Agent">{t("contact.roles.agent")}</option>
                <option value="Team">{t("contact.roles.team")}</option>
                <option value="Investor">{t("contact.roles.investor")}</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">{t("contact.purpose")}</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="purpose"
                    value="Book a demo"
                    checked={formData.purpose === "Book a demo"}
                    onChange={handleChange}
                    className="mr-2 accent-[#C99400] text-white"
                  />
                  {t("contact.purposes.book_demo")}
                </label>
                <label>
                  <input
                    type="radio"
                    name="purpose"
                    value="Partner with us"
                    checked={formData.purpose === "Partner with us"}
                    onChange={handleChange}
                    className="mr-2 accent-[#C99400] text-white"
                  />
                  {t("contact.purposes.partner")}
                </label>
                <label>
                  <input
                    type="radio"
                    name="purpose"
                    value="Investor Information"
                    checked={formData.purpose === "Investor Information"}
                    onChange={handleChange}
                    className="mr-2 accent-[#C99400] text-white"
                  />
                  {t("contact.purposes.investor_info")}
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="message">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="acknowledgement"
                  checked={formData.acknowledgement}
                  onChange={handleChange}
                  className="mr-2 accent-[#C99400] text-white"
                  required
                />
                <span className="text-sm">{t("contact.acknowledgement")}</span>
              </label>
            </div>
            <div className="flex items-center justify-center mt-10">
            <button
              type="submit"
              className="bg-[#C7952C] text-white px-8 py-3 rounded-md cursor-pointer"
            >
              {t("contact.submit")}
            </button>
            </div>
          </form>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <img
            src="/assets/images/contact.png"
            alt="Contact"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
};
