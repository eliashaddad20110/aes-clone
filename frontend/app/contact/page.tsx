"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { API_URL, fetcher } from "../lib/utils";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string>("");

  useEffect(() => {
    const fetchCSRF = async () => {
      try {
        const response = await fetch(`${API_URL}/csrf`);
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } catch (err) {
        console.error("Failed to fetch CSRF token:", err);
      }
    };
    fetchCSRF();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <div className="pt-20 pb-12 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-navy-100">Get in touch with the Arab Episcopal School</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-md">
              <Mail className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">Email</h3>
              <a href="mailto:info@aeschool.org" className="text-primary-600 hover:text-primary-700 font-medium">
                info@aeschool.org
              </a>
            </div>

            <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl p-8 shadow-md">
              <Phone className="h-8 w-8 text-navy-600 mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">Phone</h3>
              <a href="tel:+962-2-7240024" className="text-navy-600 hover:text-navy-700 font-medium">
                +962-2-7240024
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-md">
              <MapPin className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">Location</h3>
              <p className="text-navy-600 font-medium">
                P.O. Box 2412<br />
                Irbid, Jordan
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
                {success && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-navy-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-navy-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-navy-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-navy-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us more..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Office Hours</h2>
              <div className="space-y-6">
                <div className="bg-navy-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-900 mb-3 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary-600" />
                    School Hours
                  </h3>
                  <p className="text-navy-600">
                    Monday - Friday: 7:30 AM - 3:30 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>

                <div className="bg-navy-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="mailto:admissions@aeschool.org" className="text-primary-600 hover:text-primary-700">
                        Admissions inquiries
                      </a>
                    </li>
                    <li>
                      <a href="mailto:volunteer@aeschool.org" className="text-primary-600 hover:text-primary-700">
                        Volunteer opportunities
                      </a>
                    </li>
                    <li>
                      <a href="mailto:employment@aeschool.org" className="text-primary-600 hover:text-primary-700">
                        Employment inquiries
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">Emergency</h3>
                  <p className="text-navy-600">
                    For emergencies during school hours, call<br />
                    <span className="font-bold text-primary-600">+962-2-7240024</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
