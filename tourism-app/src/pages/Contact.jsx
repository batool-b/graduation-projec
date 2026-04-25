import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا مستقبلاً يتم الربط مع الباك إند: POST /api/contact
    setSubmitted(true);
    
    // إخفاء رسالة النجاح بعد 5 ثوانٍ
    setTimeout(() => setSubmitted(false), 5000);
    
    // إعادة تعيين الحقول
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-linear-to-r from-green-700 to-green-600 py-16 px-4 text-white text-center">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-green-100">We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Details */}
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Get in Touch</h2>
            </div>
            {[
              {
                icon: Phone,
                title: "Phone Number",
                lines: ["+96271232747", "+962791695373"],
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["faraway@gmail.com", "supportfaraway@gmail.com"],
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: MapPin,
                title: "Address",
                lines: ["123 Travel Street", "Irbid, Jordan"],
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: Clock,
                title: "Working Hours",
                lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 4:00 PM"],
                color: "bg-amber-100 text-amber-600",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{item.title}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-gray-700">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>

              {submitted && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <p className="text-green-700 text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Subject *</label>
                  <input
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Message *</label>
                  <textarea
                    required
                    rows="6"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all w-full justify-center"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Our Location</h2>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 h-72">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=35.80%2C32.50%2C35.90%2C32.60&layer=mapnik&marker=32.5556%2C35.85"
              className="w-full h-full border-0"
              title="Office Location"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}