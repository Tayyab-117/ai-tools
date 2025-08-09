export default function Privacy(){
  return (
    <div className='container py-10 prose'>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      <h2>Overview</h2>
      <p>FreeAIHub is designed to be privacy‑first. Most tools run entirely in your browser; files do not leave your device.</p>
      <h2>Data Processing</h2>
      <ul>
        <li><strong>Local tools:</strong> All processing occurs in your browser tab. We never see or store your files.</li>
        <li><strong>Network requests:</strong> The site loads static assets (JS/CSS) from our hosting provider. No tracking pixels.</li>
      </ul>
      <h2>Analytics</h2>
      <p>We may enable privacy‑preserving, cookie‑less analytics to understand usage patterns. No personal data is collected.</p>
      <h2>Contact</h2>
      <p>Questions? Email us at hello@example.com.</p>
    </div>
  )
}
