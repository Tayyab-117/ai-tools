export default function Terms(){
  return (
    <div className='container py-10 prose'>
      <h1>Terms of Service</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      <h2>Acceptance of Terms</h2>
      <p>By using FreeAIHub you agree to these terms.</p>
      <h2>Use of the Service</h2>
      <ul>
        <li>Do not upload illegal or infringing content.</li>
        <li>The tools are provided “as is”, without warranties.</li>
        <li>We may change or discontinue features at any time.</li>
      </ul>
      <h2>Liability</h2>
      <p>To the maximum extent permitted by law, we are not liable for any damages arising from use of the site.</p>
      <h2>Jurisdiction</h2>
      <p>These terms are governed by your local consumer laws.</p>
    </div>
  )
}
