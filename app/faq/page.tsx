import Accordion from '../../components/Accordion'
export default function FAQ(){
  const items=[
    {title:'Are my files uploaded?',content:'No. Tools are designed to run in your browser using JavaScript/Canvas/Web APIs.'},
    {title:'Is it free?',content:'Yes. Most tools are free and unlimited. Donations help keep the site online.'},
    {title:'Do I need an account?',content:'No account is required.'},
    {title:'How can I request a tool?',content:'Use the Contact page to suggest features or tools.'}
  ]
  return (<div className="container py-10"><h1 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h1><Accordion items={items}/></div>)
}
