"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;
// console.log(BACKEND_URL);

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!BACKEND_URL) {
      toast.error("Configuration error: API URL not found.");
      return;
    }

    try {
      setLoading(true);
      const targetUrl = `${BACKEND_URL.replace(/\/$/, "")}/api/contact`;

      const res = await fetch(targetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed: " + data.error);
      }
    } catch (err) {
      toast.error("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-15 px-5 bg-gray-50 min-h-[80vh]">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and exciting projects.
        </p>
      </div>
      <div className="grid lg:grid-cols-5 gap-12 p-15">
        {/* contact info */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold  mb-8">Get in Touch</h3>
          <div className="space-y-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 " />
              </div>
              <div>
                <p className="text-gray-800 text-sm font-bold">Email</p>
                <a
                  href="mailto:manishkumar110113@gmail.com"
                  className=" hover:text-blue-400 transition-colors"
                >
                  manishkumar110113@gmail.com
                </a>
              </div>
            </div>

            {/* <div className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 " />
              </div>
              <div>
                <p className="text-gray-800 text-sm font-bold">Phone</p>
                <a
                  href="tel:+91"
                  className=" hover:text-blue-400 transition-colors"
                >
                  +91
                </a>
              </div>
            </div> */}

            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 " />
              </div>
              <div>
                <p className="text-gray-800 text-sm font-bold">Location</p>
                <p className="">Kolkata, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 font-bold ">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs font-bold text-gray-500 uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-gray-500 uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="subject"
                className="text-xs font-bold text-gray-500 uppercase"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                placeholder="Subject"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-xs font-bold text-gray-500 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-bold text-sm transition-all shadow-md active:scale-95"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
