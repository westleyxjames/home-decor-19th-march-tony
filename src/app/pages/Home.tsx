import { ContactFormDialog } from "../components/ContactFormDialog";
import { Star, Users, Award, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function Home() {
  const services = [
    {
      title: "Interior Styling",
      description:
        "Professional styling solutions that bring elegance and functionality to your living spaces.",
      image:
        "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHN0eWxpbmclMjByb29tfGVufDF8fHx8MTc3MzgyOTYwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Custom Decor",
      description:
        "Unique, handcrafted decor pieces tailored to match your personal style and preferences.",
      image:
        "https://images.unsplash.com/photo-1609280069591-0c767e25e7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBmdXJuaXR1cmUlMjBkZWNvcnxlbnwxfHx8fDE3NzM4Mjk2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Space Makeovers",
      description:
        "Complete transformations that breathe new life into your home or office environment.",
      image:
        "https://images.unsplash.com/photo-1760072513442-9872656c1b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwc3BhY2UlMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NzM4Mjk2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "15+ Years Experience",
      description: "Proven expertise in home decor and interior design",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Premium Materials",
      description: "Only the highest quality materials and furnishings",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "USA-Based Team",
      description: "Local experts who understand American style",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Affordable Pricing",
      description: "Luxury decor solutions that fit your budget",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Austin, TX",
      rating: 5,
      text: "PrimeNest Decor completely transformed our living room. Their attention to detail and creative vision exceeded our expectations!",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Michael Johnson",
      location: "Houston, TX",
      rating: 5,
      text: "Professional, responsive, and talented. They made our home feel like a luxury retreat. Highly recommend their services!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      location: "Dallas, TX",
      rating: 5,
      text: "From consultation to completion, the entire process was seamless. Our office space now inspires creativity every day.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  const pricingPreview = [
    {
      name: "Basic",
      price: "$99",
      features: ["Room consultation", "Style recommendations"],
    },
    {
      name: "Standard",
      price: "$249",
      features: ["Full room styling", "Decor planning", "Product suggestions"],
      featured: true,
    },
    {
      name: "Premium",
      price: "$499",
      features: [
        "Complete home transformation",
        "Custom decor solutions",
        "Dedicated designer",
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1703867110051-a0eb1e77b967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkZWNvcnxlbnwxfHx8fDE3NzM4Mjk2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Space Into a Stylish Sanctuary
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Premium home decor solutions tailored to your lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactFormDialog
                trigger={
                  <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-xl hover:shadow-2xl text-lg font-medium">
                    Get Free Consultation
                  </button>
                }
              />
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-all text-lg font-medium text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-amber-100/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-700 mb-2">500+</div>
              <div className="text-gray-700">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-700 mb-2">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-700 mb-2">1000+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-700 mb-2">100%</div>
              <div className="text-gray-700">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional home decor services designed to bring your vision to
              life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ContactFormDialog
                    trigger={
                      <button className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </button>
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-md hover:shadow-lg"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PrimeNest Decor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, quality, and affordability to deliver
              exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center text-amber-700 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped homeowners create their dream spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769836074212-7b449620ddf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMGRlY29yJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzM4Mjk2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern living room transformation"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-semibold">Modern Living Room</p>
                  <p className="text-sm text-gray-300">Complete makeover</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766805893490-aa905fbdc05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMGhvbWUlMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc3MzgyOTYwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Seasonal decoration"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-semibold">Seasonal Styling</p>
                  <p className="text-sm text-gray-300">Holiday decor</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603673319826-2f109cbf42aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb21tZXJjaWFsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczODI5NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Office interior"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-semibold">Office Transformation</p>
                  <p className="text-sm text-gray-300">Commercial design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that best fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPreview.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.featured
                    ? "bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-2xl scale-105"
                    : "bg-white border-2 border-gray-200 shadow-lg"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-amber-700 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.featured ? "text-white" : "text-amber-600"
                        }`}
                      />
                      <span
                        className={
                          plan.featured ? "text-white" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <ContactFormDialog
                  trigger={
                    <button
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        plan.featured
                          ? "bg-white text-amber-700 hover:bg-gray-100"
                          : "bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800"
                      }`}
                    >
                      Get Started
                    </button>
                  }
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/pricing"
              className="text-amber-700 hover:text-amber-800 font-medium inline-flex items-center gap-2"
            >
              View Complete Pricing Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Let's create a home that reflects your style and personality. Get
            your free consultation today!
          </p>
          <ContactFormDialog
            trigger={
              <button className="px-8 py-4 bg-white text-amber-700 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl text-lg font-medium">
                Schedule Free Consultation
              </button>
            }
          />
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/18053569285"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
