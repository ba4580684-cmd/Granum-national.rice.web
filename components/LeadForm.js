"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");

  function update(e) {
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    setError("");

    if (!form.fullName || !form.phone || !form.email || !form.organization || !form.message) {
      setError("Please complete all required fields.");
      return;
    }

    localStorage.setItem("granumLead", JSON.stringify({
      ...form,
      submittedAt: new Date().toISOString(),
    }));

    router.push("/home");
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
          <p className="eyebrow">Premium Pakistani Rice • Global Supply</p>
          <h1>Tell us what rice you need.</h1>
          <p className="entry-copy">
            Start with your requirement and enter the Granum Global experience.
            Our international-style catalogue, product qualities, recipes and contact
            information will open after you submit.
          </p>

          <div className="entry-image-card">
            <img src="/images/granum-campaign.png" alt="Granum Global premium rice campaign" />
            <div className="image-badge">1121 Kainat Sella • Product of Pakistan</div>
          </div>

          <div className="trust-row">
            <span>✓ Export ready</span>
            <span>✓ Private label</span>
            <span>✓ Bulk supply</span>
          </div>
        </div>

        <div className="entry-form-card">
          <div className="form-heading">
            <span className="mini-label">WELCOME TO GRANUM GLOBAL</span>
            <h2>Send Us Your Requirement</h2>
            <p>Share your buying requirement. Fields marked * are required.</p>
          </div>

          <form onSubmit={submit}>
            <label>Full Name *<input name="fullName" value={form.fullName} onChange={update} placeholder="Your full name" /></label>

            <div className="two-col phone-row">
              <label>Country code
                <select name="countryCode" value={form.countryCode} onChange={update}>
                  <option>+44</option><option>+92</option><option>+91</option><option>+971</option><option>+1</option>
                </select>
              </label>
              <label>Phone Number *<input name="phone" value={form.phone} onChange={update} placeholder="Phone / WhatsApp number" /></label>
            </div>

            <div className="two-col">
              <label>Email Address *<input type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com" /></label>
              <label>Organization Name *<input name="organization" value={form.organization} onChange={update} placeholder="Company / importer / distributor" /></label>
            </div>

            <div className="two-col">
              <label>Quantity<input name="quantity" value={form.quantity} onChange={update} placeholder="e.g. 5 MT / 100 bags" /></label>
              <label>Packaging Type
                <select name="packaging" value={form.packaging} onChange={update}>
                  <option value="">Select packaging</option>
                  <option>5 KG</option><option>10 KG</option><option>25 KG</option><option>30 KG</option><option>50 KG</option><option>Custom</option>
                </select>
              </label>
            </div>

            <label>Brand / Private Label<input name="privateLabel" value={form.privateLabel} onChange={update} placeholder="Granum / your private label / OEM" /></label>
            <label>Custom Message *<textarea name="message" value={form.message} onChange={update} rows="5" placeholder="Tell us rice type, quality, destination, packaging, certification or any other requirement..." /></label>

            {error && <p className="form-error">{error}</p>}

            <button className="primary-btn full" type="submit">
              Submit Requirement <span>→</span>
            </button>
            <p className="form-note">By submitting, you can continue to the Granum Global catalogue.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
