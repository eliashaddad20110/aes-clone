"use client";

import { useState } from "react";
import { Heart, Check, DollarSign, Shield, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const amounts = [25, 50, 100, 250, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleDonorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDonorInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the donation terms");
      return;
    }

    const finalAmount = selectedAmount || parseFloat(customAmount);
    if (!finalAmount || finalAmount <= 0) {
      alert("Please select or enter a valid donation amount");
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const donationAmount = selectedAmount || (customAmount ? parseFloat(customAmount) : null);

  return (
    <main className="min-h-screen">
      <div className="pt-20 pb-12 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            Your donation helps us provide inclusive education to blind, low-vision, and sighted students.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Select Donation Amount</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`p-4 rounded-lg font-semibold text-lg transition-all ${
                          selectedAmount === amount
                            ? "bg-primary-600 text-white shadow-lg scale-105"
                            : "bg-navy-50 text-navy-700 hover:bg-navy-100"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <label className="block text-sm font-medium text-navy-700 mb-2">Custom Amount</label>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-navy-600">$</span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        placeholder="Enter custom amount"
                        min="1"
                        className="ml-2 flex-1 px-4 py-3 rounded-lg border border-navy-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-navy-200 pt-8">
                  <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Donor Information</h2>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-navy-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={donorInfo.fullName}
                        onChange={handleDonorChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your full name"
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
                        value={donorInfo.email}
                        onChange={handleDonorChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={donorInfo.phone}
                        onChange={handleDonorChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="+962-XX-XXXXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={donorInfo.message}
                        onChange={handleDonorChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-navy-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Leave a message or share your inspiration"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-navy-200 pt-8">
                  <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Donation Details</h2>

                  <div className="space-y-3 bg-navy-50 rounded-lg p-6 mb-6">
                    <div className="flex justify-between">
                      <span className="text-navy-600">Donation Amount:</span>
                      <span className="font-bold text-primary-600 text-lg">
                        {donationAmount ? `$${donationAmount.toFixed(2)}` : "—"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy-600">Processing Fee:</span>
                      <span className="text-navy-600">
                        {donationAmount ? `$${(donationAmount * 0.025).toFixed(2)}` : "—"}
                      </span>
                    </div>
                    <div className="border-t border-navy-200 pt-3 flex justify-between">
                      <span className="font-semibold text-navy-900">Total Charge:</span>
                      <span className="font-bold text-navy-900 text-lg">
                        {donationAmount ? `$${(donationAmount * 1.025).toFixed(2)}` : "—"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-800">
                      <strong>Demo Mode:</strong> This is a demonstration interface. No actual payment will be processed. This showcases the donation flow and information collection.
                    </p>
                  </div>

                  <label className="flex items-start space-x-3 mb-8">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="w-5 h-5 mt-1 text-primary-600 rounded focus:ring-2 focus:ring-primary-500"
                      required
                    />
                    <span className="text-sm text-navy-600">
                      I confirm this donation and agree to the donation terms and privacy policy. I understand this is a demonstration and no payment will be processed.
                    </span>
                  </label>

                  {submitted && (
                    <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <p className="text-green-800 font-medium">
                        Demo donation submitted! Thank you for your support. In production, payment would be processed here.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!donationAmount || !agreedToTerms}
                    className="w-full px-6 py-4 bg-primary-600 text-white font-semibold text-lg rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Complete Demo Donation</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary-50 rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-display font-bold text-navy-900 mb-6">Your Impact</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">$25</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">Supplies for One Student</p>
                      <p className="text-sm text-navy-600">Educational materials and tools</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">$100</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">Monthly Scholarship</p>
                      <p className="text-sm text-navy-600">Support one student's education</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">$500</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">Assistive Technology</p>
                      <p className="text-sm text-navy-600">Screen readers and adaptive tools</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">$1000+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">Program Funding</p>
                      <p className="text-sm text-navy-600">Enrichment and special programs</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-primary-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="h-5 w-5 text-primary-600" />
                    <p className="text-sm font-semibold text-navy-900">100% Secure</p>
                  </div>
                  <p className="text-xs text-navy-600">
                    All donations are secure and encrypted. AES is a registered nonprofit organization.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="mt-6 block text-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn more about our mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
