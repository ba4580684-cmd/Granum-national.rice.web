
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const initial = {
  fullName: "",
  countryCode: "+44",
  phone: "",
  email: "",
  organization: "",
  quantity: "",
  packaging: "",
  privateLabel: "",
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function update(e) {
    setForm((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  }

async function submit(e) {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (
    !form.fullName ||
    !form.phone ||
    !form.email ||
    !form.organization ||
    !form.message
  ) {
    setError("Please complete all required fields.");
    return;
  }

  try {
    await emailjs.send(
      "service_yqoox9t",
      "template_lky4w0u",
      {
        fullName: form.fullName,
        countryCode: form.countryCode,
        phone: form.phone,
        email: form.email,
        organization: form.organization,
        quantity: form.quantity,
        packaging: form.packaging,
        privateLabel: form.privateLabel,
        message: form.message,
      },
      {
        publicKey: "-Qq5pe-S8mZh9iOd-",
      }
    );

    localStorage.setItem(
      "granumLead",
      JSON.stringify({
        ...form,
        submittedAt: new Date().toISOString(),
      })
    );

    setSuccess(
      "Thank you! Your requirement has been submitted successfully."
    );

    setForm(initial);
  } catch (error) {
    console.error("EmailJS Error:", error);

    setError(
      "Sorry, your requirement could not be sent. Please try again."
    );
  }
}
   
  return (
    <section className="entry-screen">
      <div className="entry-glow glow-one" />
      <div className="entry-glow glow-two" />

      <div className="entry-wrap">
        <div className="entry-brand">
          <div className="brand-lockup">
            <div className="brand-mark">G</div>

            <div>
              <strong>GRANUM</strong>
              <span>GLOBAL</span>
            </div>
          </div>

          <p className="eyebrow">
            Premium Pakistani Rice • Global Supply
          </p>

          <h1>Tell us what rice you need.</h1>

          <p className="entry-copy">
            Share your requirement with Granum Global. Our team
            provides premium Pakistani rice, bulk supply,
            private label and international packaging solutions.
          </p>

          <div className="entry-image-card">
            <img
              src="/images/granum-campaign.png"
              alt="Granum Global premium rice campaign"
            />

            <div className="image-badge">
              1121 Kainat Sella • Product of Pakistan
            </div>
          </div>

          <div className="trust-row">
            <span>✓ Export ready</span>
            <span>✓ Private label</span>
            <span>✓ Bulk supply</span>
          </div>
        </div>

        <div className="entry-form-card">
          <div className="form-heading">
            <span className="mini-label">
              CONTACT GRANUM GLOBAL
            </span>

            <h2>Send Us Your Requirement</h2>

            <p>
              Share your buying requirement. Fields marked *
              are required.
            </p>
          </div>

          <form onSubmit={submit}>
            <label>
              Full Name *
              <input
                name="fullName"
                value={form.fullName}
                onChange={update}
                placeholder="Your full name"
              />
            </label>

            <div className="two-col phone-row">
              <label>
                Country code
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={update}
                >
                  <option value="+44">+44</option>
                  <option value="+92">+92</option>
                  <option value="+91">+91</option>
                  <option value="+971">+971</option>
                  <option value="+1">+1</option>
                </select>
              </label>

              <label>
                Phone Number *
                <input
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="Phone / WhatsApp number"
                />
              </label>
            </div>

            <div className="two-col">
              <label>
                Email Address *
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@company.com"
                />
              </label>

              <label>
                Organization Name *
                <input
                  name="organization"
                  value={form.organization}
                  onChange={update}
                  placeholder="Company / importer / distributor"
                />
              </label>
            </div>

            <div className="two-col">
              <label>
                Quantity
                <input
                  name="quantity"
                  value={form.quantity}
                  onChange={update}
                  placeholder="e.g. 5 MT / 100 bags"
                />
              </label>

              <label>
                Packaging Type
                <select
                  name="packaging"
                  value={form.packaging}
                  onChange={update}
                >
                  <option value="">
                    Select packaging
                  </option>
                  <option value="5 KG">5 KG</option>
                  <option value="10 KG">10 KG</option>
                  <option value="25 KG">25 KG</option>
                  <option value="30 KG">30 KG</option>
                  <option value="50 KG">50 KG</option>
                  <option value="Custom">Custom</option>
                </select>
              </label>
            </div>

            <label>
              Brand / Private Label
              <input
                name="privateLabel"
                value={form.privateLabel}
                onChange={update}
                placeholder="Granum / your private label / OEM"
              />
            </label>

            <label>
              Custom Message *
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                rows="5"
                placeholder="Tell us rice type, quality, destination, packaging, certification or any other requirement..."
              />
            </label>

            {error && (
              <p className="form-error">
                {error}
              </p>
            )}

            {success && (
              <p className="form-success">
                {success}
              </p>
            )}

            <button
              className="primary-btn full"
              type="submit"
            >
              Submit Requirement <span>→</span>
            </button>

            <p className="form-note">
              Your requirement will be saved securely for
              further processing.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}