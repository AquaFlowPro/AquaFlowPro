export function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: "Transparent pricing from the start—no surprises! They quoted £280 for a booster pump install, and that's exactly what I paid. Professional service and very tidy work.",
      author: "Mrs. H, Bury",
    },
    {
      stars: 5,
      text: "We're on the Pro Care plan and it's saved us thousands. Had two emergency call-outs this year—both free! The quarterly maintenance keeps everything running perfectly.",
      author: "Facilities Manager, Salford",
    },
    {
      stars: 5,
      text: "Best value for money in Greater Manchester. Emergency repair cost me £145 all-in when other companies wanted £300+. Honest, fair pricing.",
      author: "Mr. W, Bolton",
    },
    {
      stars: 5,
      text: "The £12/month home plan is brilliant value. Already used it twice this year and saved over £200 in call-out fees. Highly recommend!",
      author: "Homeowner, Stockport",
    },
    {
      stars: 5,
      text: "Free quote was detailed and accurate. The work was completed on time and on budget—exactly £650 as quoted. No trying to upsell unnecessary extras.",
      author: "Property Manager, Rochdale",
    },
    {
      stars: 5,
      text: "Commercial Platinum plan is worth every penny for our business. The remote monitoring has already prevented two major failures. ROI in year one!",
      author: "Business Owner, Wigan",
    },
  ]

  return (
    <section id="testimonials" className="bg-gradient-to-br from-blue-900 to-blue-500 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto text-white/90">
          Join hundreds of satisfied customers across Greater Manchester
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white/15 backdrop-blur-md p-10 rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all"
            >
              <div className="text-yellow-400 text-2xl mb-4">{"★".repeat(testimonial.stars)}</div>
              <p className="italic mb-6 text-lg leading-relaxed">{testimonial.text}</p>
              <p className="font-bold flex items-center gap-2">
                <span>👤</span> {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
