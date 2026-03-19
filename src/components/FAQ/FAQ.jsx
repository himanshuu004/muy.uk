import FAQMonochrome from "../ui/faq-monocrhome"

function FAQ() {
  const faqs = [
    {
      question: "Who can apply for MUY scheme?",
      answer:
        "Any entrepreneur, startup founder, or business owner with a viable business idea can apply. The scheme is open to individuals, partnerships, and registered companies.",
    },
    {
      question: "What documents are required for application?",
      answer:
        "You will need identity proof, business plan, address proof, bank details, and any relevant certificates or licenses related to your business.",
    },
    {
      question: "Is there any application fee?",
      answer:
        "No, the application process is completely free. There are no charges for applying to the MUY scheme.",
    },
    {
      question: "How long does the approval process take?",
      answer:
        "The review and approval process typically takes 4-6 weeks after submission of a complete application with all required documents.",
    },
    {
      question: "What kind of support will I receive?",
      answer:
        "Selected participants receive incubation support, mentorship, access to funding opportunities, market linkage, technology support, and regular training workshops.",
    },
    {
      question: "Can I apply if my business is already operational?",
      answer:
        "Yes, both new startups and existing businesses looking to scale up can apply for the scheme.",
    },
  ]

  return (
    <FAQMonochrome
      faqs={faqs}
      eyebrow="Questions"
      title="Frequently Asked Questions"
      description="Quick answers about eligibility, documents, timelines, and support under the MUY scheme."
      defaultOpenIndex={0}
      showThemeToggle
    />
  )
}

export default FAQ


