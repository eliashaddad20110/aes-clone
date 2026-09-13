"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Users, BookOpen, Lightbulb, DollarSign, FileText } from "lucide-react";
import Link from "next/link";

export default function GetInvolvedPage() {
  const involvementOptions = [
    {
      icon: Heart,
      title: "Donate",
      description: "Make a financial contribution to support our mission and students",
      link: "/donate",
      cta: "Make a Donation",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Give your time and skills to help students and staff",
      link: "/get-involved#volunteer",
      cta: "Learn About Volunteering",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access teaching materials, tools, and educational content",
      link: "/get-involved#resources",
      cta: "View Resources",
    },
    {
      icon: Lightbulb,
      title: "Professional Development",
      description: "Opportunities for teachers and educators to grow",
      link: "/get-involved#professional",
      cta: "Explore Opportunities",
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="pt-20 pb-12 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Ways to Get Involved</h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            Join us in creating inclusive education and transforming lives.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {involvementOptions.map((option, idx) => (
              <Link
                key={idx}
                href={option.link}
                className="group bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <option.icon className="h-10 w-10 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">{option.title}</h3>
                <p className="text-navy-600 text-sm mb-4">{option.description}</p>
                <span className="inline-flex items-center text-primary-600 font-medium text-sm">
                  {option.cta}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-50" id="volunteer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-12 text-center">Volunteer Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Classroom Support</h3>
              <p className="text-navy-600 mb-4">
                Assist teachers in creating inclusive classroom experiences. Help with specialized techniques, curriculum adaptation, and student support.
              </p>
              <button className="text-primary-600 font-medium hover:text-primary-700">Learn More →</button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Braille & Reading Support</h3>
              <p className="text-navy-600 mb-4">
                Support students with specialized reading materials, Braille tutoring, and adaptive technology. Training provided.
              </p>
              <button className="text-primary-600 font-medium hover:text-primary-700">Learn More →</button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Enrichment Programs</h3>
              <p className="text-navy-600 mb-4">
                Lead sports, arts, music, or other enrichment activities that develop student talents and confidence.
              </p>
              <button className="text-primary-600 font-medium hover:text-primary-700">Learn More →</button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Administrative Support</h3>
              <p className="text-navy-600 mb-4">
                Help with event planning, communications, fundraising, and day-to-day operations that keep the school running.
              </p>
              <button className="text-primary-600 font-medium hover:text-primary-700">Learn More →</button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-12 text-center">Educational Resources</h2>

          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Tools & Materials for Educators</h3>
              <p className="text-navy-600 text-lg mb-8">
                We've compiled comprehensive resources for teachers working with visually impaired and blind students, including early childhood tools, sports materials, literacy and numeracy resources, and digital skills teaching guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/resources/tools-materials.pdf"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Download PDF Guide
                </a>
                <button className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-navy-50 transition-colors border border-primary-600">
                  Request Physical Copies
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-navy-50 rounded-xl p-6 text-center">
              <BookOpen className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-bold text-navy-900 mb-2">Early Childhood</h4>
              <p className="text-sm text-navy-600">Preschool and kindergarten tools</p>
            </div>
            <div className="bg-navy-50 rounded-xl p-6 text-center">
              <Users className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-bold text-navy-900 mb-2">Sports</h4>
              <p className="text-sm text-navy-600">Adaptive PE materials</p>
            </div>
            <div className="bg-navy-50 rounded-xl p-6 text-center">
              <Lightbulb className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-bold text-navy-900 mb-2">Literacy & Numeracy</h4>
              <p className="text-sm text-navy-600">Core academic resources</p>
            </div>
            <div className="bg-navy-50 rounded-xl p-6 text-center">
              <DollarSign className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-bold text-navy-900 mb-2">Digital Skills</h4>
              <p className="text-sm text-navy-600">Tech & accessibility guides</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">Partnership Opportunities</h2>
            <p className="text-lg text-navy-600 mb-8 max-w-2xl mx-auto">
              Schools, organizations, and corporations can partner with AES to support inclusive education, sponsor programs, or provide professional development.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Discuss Partnership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
