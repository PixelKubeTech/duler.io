import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    title: '',
    phone: '',
    time: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});


      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSent(true);
      setFormData({
        from_name: '',
        from_email: '',
        title: '',
        phone: '',
        time: '',
        message: ''
      });
    } catch (error) {
      alert("❌ Failed to send: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!isSent ? (
        <div className="space-y-5">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black"
          />
          <input
            type="text"
            name="title"
            placeholder="Subject"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Contact Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black"
          />
          <input
            type="text"
            name="time"
            placeholder="Best Time to Contact"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black resize-none"
          />
          <button
            type="button"
            onClick={sendEmail}
            disabled={loading}
            className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div className="text-center py-10">
          <h3 className="text-2xl font-semibold text-black mb-3">
            ✅ Thank You!
          </h3>
          <p className="text-gray-600">We will contact you shortly.</p>
        </div>
      )}
    </div>
  );
}