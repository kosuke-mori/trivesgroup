"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-[#161717] text-center mb-12">
          Let&apos;s do this.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#45494B] mb-2"
            >
              Name <span className="text-[#ACACA7]">(required)</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#DBDAD0] rounded-sm focus:outline-none focus:border-[#161717] transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#45494B] mb-2"
            >
              Email <span className="text-[#ACACA7]">(required)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#DBDAD0] rounded-sm focus:outline-none focus:border-[#161717] transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#45494B] mb-2"
            >
              Message <span className="text-[#ACACA7]">(required)</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#DBDAD0] rounded-sm focus:outline-none focus:border-[#161717] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-[#161717] text-white font-medium hover:bg-[#45494B] transition-colors rounded-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
