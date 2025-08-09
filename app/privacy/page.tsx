export default function Privacy(){
  return (<div className="container py-10"><h1 className="text-2xl font-semibold mb-2">Privacy Policy</h1>
    <div className="prose text-sm text-gray-700">
      <p>This Privacy Policy explains how FreeAIHub (“we”, “us”) handles information. Most tools run entirely in your browser. We do not upload your files or text to our servers for processing unless explicitly stated.</p>
      <h2>1. Information we process</h2>
      <ul>
        <li><strong>Local‑only content:</strong> Inputs you use in tools are processed on your device using Web APIs.</li>
        <li><strong>Diagnostics & analytics (optional):</strong> We may collect aggregate usage (page views, device type) to improve the site. No file contents are collected.</li>
        <li><strong>Contact data:</strong> If you submit the contact form, we receive your name, email, and message via our form provider.</li>
      </ul>
      <h2>2. Cookies & local storage</h2>
      <p>We store preferences like favorites/recents in local storage. Analytics, if enabled, may use a first‑party cookie. You can clear both at any time.</p>
      <h2>3. Third‑party services</h2>
      <ul>
        <li>Form provider (e.g., Formspree/Web3Forms) receives messages you send through the contact form.</li>
        <li>Payment links (Stripe/Ko‑fi/BMC) are external; their policies apply. We never receive card details.</li>
      </ul>
      <h2>4. Data retention</h2>
      <p>Local storage remains on your device until cleared. Contact messages may be retained to respond and are deleted periodically.</p>
      <h2>5. Your rights (GDPR/CCPA)</h2>
      <ul>
        <li>Right of access: Request a copy of contact messages related to your email.</li>
        <li>Right to rectification & deletion: Ask us to correct or delete contact messages we hold.</li>
        <li>Data portability: We can export your messages in a portable format upon request.</li>
        <li>Withdraw consent: Clear cookies/local storage or email us to disable analytics for your visits.</li>
      </ul>
      <h2>6. Security</h2>
      <p>We use HTTPS/TLS and reputable infrastructure, but no method is 100% secure. Avoid processing highly sensitive data.</p>
      <h2>7. Children</h2>
      <p>Not directed to children under 13. If a child submitted personal data, contact us to remove it.</p>
      <h2>8. Changes</h2>
      <p>We may update this policy and will reflect the “Last updated” date.</p>
      <h2>9. Contact (Data requests/DPO)</h2>
      <p>Email: <a href="mailto:hello@example.com">hello@example.com</a> — for GDPR data access or deletion requests, include the email address you used.</p>
      <p className="text-xs text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
    </div></div>)
}
