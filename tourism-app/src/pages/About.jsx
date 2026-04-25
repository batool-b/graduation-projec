import React from 'react';
import { Link } from "react-router-dom"; 
import { Target, Eye, Globe, Users, Award, Heart } from "lucide-react";
import { teamMembers } from "../data/mockData";

export default function About() {
  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <div className="bg-linear-to-r from-green-700 to-green-600 py-16 px-4 text-white text-center">
        <h1 className="text-4xl font-bold mb-3">About FarAway</h1>
        <p className="text-green-100 max-w-xl mx-auto">
          We're passionate travelers turned travel experts, dedicated to creating extraordinary journeys.
        </p>
      </div>

      {/* --- Company Story --- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-600 text-sm font-medium mb-2">Our Story</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">From Dream to Reality Since 2016</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FarAway was born from a simple belief: everyone deserves an extraordinary travel experience. 
              Founded in 2016 by a group of passionate explorers, we started as a small boutique agency 
              with big dreams and an unwavering commitment to quality.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Today, we've grown into a trusted travel partner for over 50,000 travelers worldwide. 
              Our team of 350+ expert guides and travel specialists work tirelessly to craft 
              personalized journeys that leave lasting memories.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "50K+", label: "Happy Travelers" },
                { value: "120+", label: "Destinations" },
                { value: "10+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-green-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-700">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/about1.jpg"
              alt="Travel Adventure"
              className="rounded-2xl h-48 w-full object-cover"
            />
            <img
              src="/images/about2.jpg"
              alt="Destination"
              className="rounded-2xl h-48 w-full object-cover mt-8"
            />
            <img
              src="/images/about3.jpg"
              alt="Local Culture"
              className="rounded-2xl h-48 w-full object-cover"
            />
            <img
              src="/images/about4.jpg"
              alt="Travel Memories"
              className="rounded-2xl h-48 w-full object-cover mt-8"
            />
          </div>
        </div>
      </section>

      {/* --- Mission & Vision --- */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-600 text-sm font-medium mb-2">What Drives Us</p>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                color: "bg-green-100 text-green-600",
                desc: "To create meaningful travel experiences that connect people with the world's most beautiful places, cultures, and communities.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                color: "bg-blue-100 text-blue-600",
                desc: "To become the world's most trusted travel company, pioneering sustainable tourism that enriches lives and preserves nature.",
              },
              {
                icon: Heart,
                title: "Our Values",
                color: "bg-rose-100 text-rose-600",
                desc: "Integrity, passion, and excellence guide us. We believe in transparent pricing and building genuine relationships.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}