export function FAQ() {
  const faqs = [
    {
      question: "Are your prices fixed or estimates?",
      answer:
        "All our prices are transparent starting points. For installations, we provide a free site survey and then give you a fixed written quote that won't change (unless you request additional work). For repairs, we quote the call-out fee upfront, then provide a repair cost before starting work. You're never surprised by the final bill.",
    },
    {
      question: "Do you charge for quotes?",
      answer:
        "No! All quotes for installations and major work are completely free. We visit your site, assess the job, and provide a detailed written quote at no cost. For minor repairs, there's a call-out fee (from £100) which includes the first hour of diagnostic work—and this is waived if you proceed with the repair.",
    },
    {
      question: "Are prices inclusive of VAT?",
      answer:
        "Yes, all prices on our website include VAT at 20%. The price you see is the price you pay (subject to site survey for custom installations). We believe in clear, honest pricing with no hidden extras.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, bank transfer, all major debit/credit cards, and for larger commercial projects, we can arrange payment terms. For maintenance plans, we offer monthly direct debit or annual payment (with a discount for annual payment).",
    },
    {
      question: "Do maintenance plan members really pay £0 call-out fees?",
      answer:
        "Yes! All our maintenance plan members (Home Protection, Pro Care, and Commercial Platinum) pay zero call-out fees, even for emergency 24/7 service. This alone can save you £90–£200 per visit. Members also get 10–20% off repairs and parts, making the plans excellent value.",
    },
    {
      question: "Can I cancel my maintenance plan anytime?",
      answer:
        "Monthly plans require just 30 days' notice to cancel. Annual plans are paid upfront but offer better value (typically 2 months free). We're confident you'll love the service, but there's no long-term lock-in for monthly members.",
    },
    {
      question: "What if the repair costs more than quoted?",
      answer:
        "We always give you a price before starting work. If we discover additional issues during a repair, we'll stop, explain the situation, and provide a new quote. You decide whether to proceed. We never do unexpected work and surprise you with extra charges.",
    },
    {
      question: "Are your prices competitive?",
      answer:
        "We regularly review our pricing against competitors and aim to offer the best value in Greater Manchester. We're not always the cheapest (we don't cut corners), but we're consistently fair, transparent, and deliver exceptional quality. Many customers tell us we saved them money compared to other quotes—especially when you factor in our quality and warranty.",
    },
  ]

  return (
    <section id="faq" className="bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-900 mb-4">Pricing FAQs</h2>
        <p className="text-center text-xl text-gray-600 mb-12">Common questions about our pricing and services</p>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="font-semibold text-blue-900 text-lg mb-4">{faq.question}</div>
              <div className="text-gray-600 leading-relaxed">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
