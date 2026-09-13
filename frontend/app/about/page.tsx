"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Heart, Award, Zap } from "lucide-react";

export default function AboutPage() {
  const timeline = [
    {
      year: "2003",
      title: "Founded",
      description: "AES was founded by Rev. Samir Esaid and Mrs. Sabah Zurikat to serve blind and visually impaired children of northern Jordan.",
    },
    {
      year: "2005",
      title: "Elementary Expansion",
      description: "Started elementary school program, beginning with 1st grade classes.",
    },
    {
      year: "2010",
      title: "Community Growth",
      description: "Expanded to serve 141 sighted students alongside 17 blind and 17 low-vision students.",
    },
    {
      year: "2023",
      title: "Two Decades Strong",
      description: "Celebrating 20 years of inclusive education and transforming lives through education.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Inclusivity",
      description: "We believe every child deserves quality education regardless of ability.",
    },
    {
      icon: BookOpen,
      title: "Excellence",
      description: "High academic standards combined with holistic personal development.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive environment where all students thrive together.",
    },
    {
      icon: Award,
      title: "Empowerment",
      description: "Equipping students with skills and confidence for their futures.",
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="pt-20 pb-12 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About AES</h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            Learn about our mission to transform education through inclusion, excellence, and compassion.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">Our Story</h2>
              <p className="text-lg text-navy-600 mb-4 leading-relaxed">
                The Arab Episcopal School was founded in September 2003 by Rev. Samir Esaid and Mrs. Sabah Zurikat through the Anglican Church in the Middle East. It started as an integrative kindergarten to reach blind and visually impaired children of northern Jordan who had no educational options except traveling to Amman.
              </p>
              <p className="text-lg text-navy-600 mb-4 leading-relaxed">
                Many of these children had spent their lives hidden due to cultural attitudes toward disability. We saw the difficulty in sending young children away from their homes and families, and decided to create a local, inclusive solution.
              </p>
              <p className="text-lg text-navy-600 leading-relaxed">
                Today, AES is the only school in Jordan that integrates sighted, low-vision, and blind students in the same classrooms, creating a truly inclusive learning environment where all children thrive together.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-history.jpg"
                alt="AES building exterior"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-navy-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-12 text-center">Our Timeline</h2>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center font-display font-bold text-lg">
                    {item.year}
                  </div>
                  {idx < timeline.length - 1 && <div className="w-1 h-24 bg-primary-200 mt-4" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-navy-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <Zap className="h-10 w-10 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-900 mb-2">175+</h3>
              <p className="text-navy-600">Students Served</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <Users className="h-10 w-10 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-900 mb-2">50+</h3>
              <p className="text-navy-600">Dedicated Staff</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <Award className="h-10 w-10 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-900 mb-2">20+</h3>
              <p className="text-navy-600">Years of Impact</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
            Join us in our mission to transform lives through inclusive education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
              Support Our Mission
            </Link>
            <Link href="/get-involved" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
