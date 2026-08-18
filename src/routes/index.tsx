import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Wrench, Shield, Star, CheckCircle, Menu, X, Calendar, ArrowRight, Disc, Gauge, Droplets, Thermometer, Settings } from "lucide-react";
import { useState } from "react";
import heroGarage from "../assets/hero-garage.jpg";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moses Auto Service & Repair | Irving, TX" },
      { name: "description", content: "Trusted auto repair and maintenance in Irving, TX. Moses Auto Service & Repair offers diagnostics, brakes, oil changes, AC repair, and more. Book your appointment today." },
      { property: "og:title", content: "Moses Auto Service & Repair | Irving, TX" },
      { property: "og:description", content: "Trusted auto repair and maintenance in Irving, TX. Moses Auto Service & Repair provides diagnostics, brakes, oil changes, AC repair, and more." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1619642751034-765dfdf7c4e9?auto=format&fit=crop&w=1200&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1619642751034-765dfdf7c4e9?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Announcement Bar */}
      <div className="bg-[#0f172a] text-white py-2 px-4 text-center text-sm">
        <span className="font-semibold text-[#ef4444]">FREE</span> multi-point inspection with any service — Call{" "}
        <a href="tel:+12144413544" className="underline font-semibold">(214) 441-3544</a>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#ef4444] rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold leading-tight text-[#0f172a]">MOSES AUTO</div>
                <div className="text-xs text-[#1e293b] tracking-wider">SERVICE & REPAIR</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
            {(
              [
                ["Services", "services"],
                ["Why Us", "features"],
                ["Reviews", "reviews"],
                ["Contact", "contact"],
              ] as const
            ).map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-[#1e293b] hover:text-[#ef4444] transition-colors"
              >
                {label}
              </button>
            ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+12144413544" className="text-sm font-semibold text-[#0f172a]">
                (214) 441-3544
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-[#ef4444]/20"
              >
                Book Appointment
              </button>
            </div>

            <button
              className="md:hidden p-2 text-[#0f172a]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white px-4 py-4 space-y-3">
            {(
              [
                ["Services", "services"],
                ["Why Us", "features"],
                ["Reviews", "reviews"],
                ["Contact", "contact"],
              ] as const
            ).map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left text-base font-medium text-[#1e293b] py-2"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors"
            >
              Book Appointment
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0">
          <img
            src={heroGarage}
            alt="Modern auto repair shop in Irving TX"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-semibold">
                <span className="text-[#f97316]">★★★★★</span>
                <span className="font-bold text-[#f97316]">4.9</span>
                <span className="text-gray-300">on Google</span>
                <span className="text-gray-400">(276+ Reviews)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Moses Auto Service & Repair: Reliable & Honest Auto Repair in <span className="text-[#ef4444]">Irving, TX</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
                From routine oil changes to complex engine diagnostics, we get you back on the road safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="tel:+12144413544"
                  className="inline-flex items-center justify-center gap-2 bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-[#ef4444]/25 hover:shadow-[#ef4444]/40"
                >
                  <Phone className="w-5 h-5" />
                  Call (214) 441-3544
                </a>
                <AppointmentModal>
                  <button className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl text-base font-semibold transition-all cursor-pointer">
                    <Calendar className="w-5 h-5" />
                    Schedule Service
                  </button>
                </AppointmentModal>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get a Free Quote</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ef4444]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ef4444]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Vehicle Year, Make & Model"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ef4444]"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#ef4444]">
                    <option value="" className="text-[#0f172a]">Select service needed</option>
                    <option value="oil" className="text-[#0f172a]">Oil Change</option>
                    <option value="brakes" className="text-[#0f172a]">Brake Repair</option>
                    <option value="diagnostic" className="text-[#0f172a]">Diagnostics</option>
                    <option value="ac" className="text-[#0f172a]">AC & Heating</option>
                    <option value="tires" className="text-[#0f172a]">Tires & Alignment</option>
                    <option value="other" className="text-[#0f172a]">Other</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white py-4 rounded-xl font-bold transition-colors"
                  >
                    Request Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Highlight Cards */}
      <div className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Experienced Technicians",
                desc: "ASE-certified mechanics with years of hands-on experience on all makes and models.",
              },
              {
                icon: Shield,
                title: "Fair & Upfront Pricing",
                desc: "No hidden fees or surprise charges. We explain every repair and cost before any work begins.",
              },
              {
                icon: Clock,
                title: "Fast Turnaround Time",
                desc: "Most maintenance and common repairs are completed the same day you bring your vehicle in.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 bg-[#ef4444]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#ef4444]" />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">Why Irving Drivers Choose Moses Auto Service & Repair</h2>
            <p className="text-muted-foreground text-lg">
              Honest pricing, skilled technicians, and a commitment to getting you back on the road safely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Honest Diagnostics",
                desc: "We explain exactly what your vehicle needs — no upsells, no surprises. Every repair is approved by you first.",
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                desc: "Most maintenance services are completed same-day. We respect your time and keep you informed every step of the way.",
              },
              {
                icon: Star,
                title: "Warranty Protected",
                desc: "Drive with confidence. Our repairs are backed by a 12-month / 12,000-mile warranty on parts and labor.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-[#ef4444]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ef4444] transition-colors">
                  <Icon className="w-7 h-7 text-[#ef4444] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Menu */}
      <section id="services" className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 text-lg">
              Full-service auto care for all makes and models. Quality parts, expert labor, fair prices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Brake Repairs & Inspections",
                desc: "Complete brake inspections, pad and rotor replacement, and fluid service to keep your stopping power safe and reliable.",
                icon: Disc,
                service: "brake-repair",
              },
              {
                title: "Engine Diagnostics & Tune-Ups",
                desc: "Advanced check-engine diagnostics, performance tuning, and preventative maintenance to keep your engine running strong.",
                icon: Gauge,
                service: "engine-diagnostics",
              },
              {
                title: "Oil Changes & Routine Maintenance",
                desc: "Synthetic and conventional oil changes, filter replacements, fluid top-offs, and multi-point inspections.",
                icon: Droplets,
                service: "oil-change",
              },
              {
                title: "Heating & A/C Service",
                desc: "Stay comfortable in every season with refrigerant recharges, leak detection, heater repair, and full climate system service.",
                icon: Thermometer,
                service: "heating-ac",
              },
              {
                title: "Transmission & Suspension Repair",
                desc: "Transmission service and repair, shock and strut replacement, alignments, and suspension work for a smoother ride.",
                icon: Settings,
                service: "transmission-suspension",
              },
            ].map(({ title, desc, icon: Icon, service }) => (
              <div
                key={title}
                className="flex flex-col bg-[#1e293b] border border-white/10 rounded-2xl p-6 hover:border-[#ef4444]/50 hover:bg-[#1e293b]/80 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#ef4444]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#ef4444] transition-colors">
                    <Icon className="w-6 h-6 text-[#ef4444] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
                <AppointmentModal defaultService={service}>
                  <button className="w-full mt-auto inline-flex items-center justify-center gap-2 bg-[#ef4444] hover:bg-[#dc2626] text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer">
                    Get Estimate
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </AppointmentModal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg">
              Real reviews from drivers across Irving and the DFW area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus T.",
                location: "Irving, TX",
                text: "Dropped my truck off for brakes and they had it done in under two hours. Fair, honest pricing and no upsells. Best shop in Irving!",
                rating: 5,
              },
              {
                name: "Sandra L.",
                location: "Las Colinas, TX",
                text: "Finally, a mechanic I can trust. They explained exactly what my car needed, finished the work quickly, and the price was right. Highly recommend.",
                rating: 5,
              },
              {
                name: "David R.",
                location: "Euless, TX",
                text: "Fast, friendly, and honest. My AC was blowing hot and they fixed it same day. Great service at a fair price — I will definitely be back.",
                rating: 5,
              },
            ].map(({ name, location, text, rating }) => (
              <div key={name} className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f97316] text-[#f97316]" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 flex-grow">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {name.split(" ")[0]?.[0] ?? ""}
                    {name.split(" ")[1]?.[0] ?? ""}
                  </div>
                  <div>
                    <div className="font-bold text-[#0f172a]">{name}</div>
                    <div className="text-sm text-muted-foreground">{location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Visit or Call Today</h2>
                <p className="text-gray-300 text-lg">
                  Ready to schedule service? Stop by our Irving shop or give us a call. Walk-ins are welcome.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ef4444]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#ef4444]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Address</h3>
                    <p className="text-gray-300">1716 N Story Rd #101<br />Irving, TX 75061</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ef4444]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#ef4444]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Phone</h3>
                    <a href="tel:+12144413544" className="text-gray-300 hover:text-white transition-colors">
                      (214) 441-3544
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ef4444]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#ef4444]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Hours</h3>
                    <p className="text-gray-300">
                      Mon–Fri: 8:00 AM – 6:00 PM<br />
                      Saturday: 8:00 AM – 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Mock Map Visual */}
              <div className="relative h-72 bg-[#e2e8f0]">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="mapGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cbd5e1" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="#f1f5f9" />
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  {/* Roads */}
                  <path d="M -10 120 Q 150 100 300 140 T 650 130" fill="none" stroke="#ffffff" strokeWidth="18" />
                  <path d="M 180 -10 Q 200 100 170 250 T 190 420" fill="none" stroke="#ffffff" strokeWidth="14" />
                  <path d="M -10 220 Q 120 240 280 210 T 650 230" fill="none" stroke="#ffffff" strokeWidth="10" />
                  {/* Park / land area */}
                  <ellipse cx="420" cy="80" rx="80" ry="45" fill="#dcfce7" />
                  {/* Water */}
                  <path d="M 480 200 Q 520 180 560 210 T 650 190 L 650 300 L 480 300 Z" fill="#dbeafe" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-14 h-14 bg-[#ef4444] rounded-full flex items-center justify-center shadow-xl ring-4 ring-white">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ef4444] rotate-45"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                  <p className="text-xs font-bold text-[#0f172a]">Moses Auto Service & Repair</p>
                  <p className="text-[10px] text-[#1e293b]">1716 N Story Rd #101</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Find Us in Irving</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Conveniently located on N Story Rd. Stop by for walk-in service or schedule ahead.
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1716+N+Story+Rd+%23101%2C+Irving%2C+TX+75061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#ef4444] hover:bg-[#dc2626] text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#ef4444] rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold leading-tight">MOSES AUTO SERVICE</div>
                  <div className="text-xs text-gray-400 tracking-wider">& REPAIR</div>
                </div>
              </div>
              <p className="text-gray-400 max-w-sm">
                Moses Auto Service & Repair is a family-owned auto repair shop serving Irving and the greater DFW area with honest, reliable service since 2009.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollTo("services")} className="hover:text-[#ef4444] transition-colors">Services</button></li>
                <li><button onClick={() => scrollTo("features")} className="hover:text-[#ef4444] transition-colors">Why Us</button></li>
                <li><button onClick={() => scrollTo("reviews")} className="hover:text-[#ef4444] transition-colors">Reviews</button></li>
                <li><button onClick={() => scrollTo("contact")} className="hover:text-[#ef4444] transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(214) 441-3544</li>
                <li>1716 N Story Rd #101</li>
                <li>Irving, TX 75061</li>
                <li>Mon–Fri: 8 AM – 6 PM</li>
                <li>Sat: 8 AM – 3 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Moses Auto Service & Repair. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
