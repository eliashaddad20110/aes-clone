"use client";

import { Target, Eye, Heart, BookOpen, Users, Award } from "lucide-react";
import Link from "next/link";

export default function MissionVisionValuesPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-20 pb-12 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Mission, Vision, & Values</h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            Our guiding principles and commitment to inclusive education.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Target className="h-12 w-12 text-primary-600 mb-6" />
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Mission</h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p className="font-semibold">Serving northern Jordan as a presence of the Arab Episcopal Church</p>
                <p>Integrating blind and low vision students with sighted students, providing all with the best educational and social opportunities.</p>
                <p>Developing students' academic capabilities and character by providing peace education built on democracy, respect for human rights, emphasis on volunteer work, and environmental stewardship.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Eye className="h-12 w-12 text-navy-600 mb-6" />
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Vision</h2>
              <ul className="space-y-4 text-navy-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <span>Integrate visually impaired students with the sighted until 10th grade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <span>Establish a Braille language-teaching center serving the local community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <span>Establish a modern nursery for infants and pre-school children within the school</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="h-12 w-12 text-green-600 mb-6" />
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Core Values</h2>
              <ul className="space-y-3 text-navy-600">
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="font-semibold">Respect</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="font-semibold">Truth</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="font-semibold">Love</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="font-semibold">Giving</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="font-semibold">Honesty</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="font-semibold">Peace</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-12 text-center">Our Commitment to Inclusion</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <BookOpen className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Academic Excellence</h3>
              <p className="text-navy-600">
                We maintain rigorous academic standards while providing individualized support to ensure every student reaches their full potential.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <Users className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">True Integration</h3>
              <p className="text-navy-600">
                Blind and low-vision students learn alongside their sighted peers in mainstream classrooms, not segregated settings.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <Award className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Character Development</h3>
              <p className="text-navy-600">
                Beyond academics, we nurture critical thinking, leadership, empathy, and social responsibility in all our students.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <Heart className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Cultural Transformation</h3>
              <p className="text-navy-600">
                We challenge stigma surrounding disability and demonstrate that inclusion benefits all learners and strengthens communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Part of Our Community?</h2>
            <p className="text-lg text-navy-100 mb-8 max-w-2xl mx-auto">
              Whether you're a current student, alumni, parent, or supporter, explore how you can be part of our mission.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
