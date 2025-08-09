export default function Terms(){
  return (<div className="container py-10"><h1 className="text-2xl font-semibold mb-2">Terms of Service</h1>
    <div className="prose text-sm text-gray-700">
      <h2>1. Overview</h2><p>Using FreeAIHub (“Services”) means you agree to these Terms. If you do not agree, do not use the site.</p>
      <h2>2. Acceptable use</h2><ul><li>No illegal content or rights violations.</li><li>No attempts to disrupt, scrape excessively, or reverse engineer.</li><li>Respect third‑party licenses and applicable laws.</li></ul>
      <h2>3. Accounts</h2><p>Most tools require no account. If accounts are introduced, you are responsible for access and activity.</p>
      <h2>4. Content ownership</h2><p>You own the content you process. We claim no rights in your inputs or outputs.</p>
      <h2>5. Warranties</h2><p>Services are provided “AS IS” without warranties of any kind.</p>
      <h2>6. Liability</h2><p>We are not liable for indirect or consequential damages, including data loss or lost profits.</p>
      <h2>7. Modifications</h2><p>We may change or discontinue features without notice.</p>
      <h2>8. Indemnity</h2><p>You agree to indemnify us against claims arising from your use of the Services.</p>
      <h2>9. Governing law</h2><p>Governed by the laws of your jurisdiction of residence unless mandatory law applies otherwise.</p>
      <h2>10. Contact</h2><p>Questions? <a href="mailto:hello@example.com">hello@example.com</a></p>
      <p className="text-xs text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
    </div></div>)
}
