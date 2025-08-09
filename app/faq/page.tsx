import Accordion from '../../components/Accordion'
export default function FAQ(){
  const items=[
    {title:'Do you upload my files?', content:'No. Tools are designed to run entirely in your browser using Web APIs.'},
    {title:'Is it free?', content:'Yes. Tools are free and unlimited. Donations help keep the site online.'},
    {title:'Do I need an account?', content:'No account is needed to use tools.'},
    {title:'How can I request a feature?', content:'Use the Contact page to suggest tools or improvements.'}
  ]
  return (<div className="container py-10"><h1 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h1><Accordion items={items}/></div>)
}
