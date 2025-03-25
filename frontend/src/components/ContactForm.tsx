import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully! (This is a placeholder)");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="mb-4">
        <select
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        >
          <option value="">Select one...</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Project Request">Project Request</option>
        </select>
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Type your message..."
          value={formData.message}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          rows={4}
          required
        />
      </div>
      <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
        Submit
      </button>
    </form>
  );
}