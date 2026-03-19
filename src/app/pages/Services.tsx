import { ContactFormDialog } from "../components/ContactFormDialog";
import { Palette, Home, Sofa, Sparkles, Building } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Interior Styling",
      description:
        "Transform your space with our expert interior styling services. We carefully curate colors, textures, and furnishings to create a cohesive and visually stunning environment that reflects your personal style.",
      image:
        "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHN0eWxpbmclMjByb29tfGVufDF8fHx8MTc3MzgyOTYwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Professional color consultation",
        "Furniture arrangement planning",
        "Lighting design",
        "Accessory selection & placement",
        "Style guide creation",
      ],
      startingPrice: "Starting at $199",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Home Makeover Packages",
      description:
        "Complete home transformation packages designed to revitalize your entire living space. From initial consultation to final installation, we handle every detail to bring your dream home to life.",
      image:
        "https://images.unsplash.com/photo-1760072513442-9872656c1b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwc3BhY2UlMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NzM4Mjk2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Comprehensive home assessment",
        "Custom design plan",
        "Project management",
        "Full installation services",
        "Post-completion support",
      ],
      startingPrice: "Starting at $499",
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Custom Furniture & Decor",
      description:
        "Unique, handcrafted furniture and decor pieces tailored to your specifications. We work with skilled artisans to create one-of-a-kind items that perfectly fit your space and style preferences.",
      image:
        "https://images.unsplash.com/photo-1609280069591-0c767e25e7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBmdXJuaXR1cmUlMjBkZWNvcnxlbnwxfHx8fDE3NzM4Mjk2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Bespoke furniture design",
        "Premium material selection",
        "Expert craftsmanship",
        "Custom sizing & finishes",
        "Lifetime quality guarantee",
      ],
      startingPrice: "Starting at $599",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Seasonal Decoration",
      description:
        "Keep your home fresh and festive year-round with our seasonal decoration services. We create stunning holiday displays and seasonal updates that celebrate each time of year in style.",
      image:
        "https://images.unsplash.com/photo-1766805893490-aa905fbdc05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMGhvbWUlMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc3MzgyOTYwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Holiday decoration packages",
        "Seasonal color schemes",
        "Installation & removal services",
        "Custom wreaths & centerpieces",
        "Storage solutions",
      ],
      startingPrice: "Starting at $149",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Office & Commercial Decor",
      description:
        "Create inspiring work environments with our commercial decor services. We design professional spaces that boost productivity, impress clients, and reflect your brand identity.",
      image:
        "https://images.unsplash.com/photo-1603673319826-2f109cbf42aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb21tZXJjaWFsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczODI5NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Brand-aligned design",
        "Ergonomic workspace planning",
        "Reception area styling",
        "Conference room design",
        "Commercial-grade furnishings",
      ],
      startingPrice: "Starting at $799",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-700">
              Comprehensive home decor solutions tailored to transform your
              space into a stylish sanctuary
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center text-amber-700 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      What's Included:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="text-amber-600 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="text-2xl font-bold text-amber-700">
                      {service.startingPrice}
                    </div>
                    <ContactFormDialog
                      trigger={
                        <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-md hover:shadow-lg">
                          Request Quote
                        </button>
                      }
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Consultation
              </h3>
              <p className="text-gray-600">
                We discuss your vision, needs, and budget in a free initial
                consultation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Design Plan
              </h3>
              <p className="text-gray-600">
                Our team creates a custom design plan with detailed
                specifications and visualizations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Implementation
              </h3>
              <p className="text-gray-600">
                We handle all sourcing, coordination, and installation with
                minimal disruption
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Final Reveal
              </h3>
              <p className="text-gray-600">
                We unveil your transformed space and provide ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Let's discuss which service is right for you. Schedule your free
            consultation today!
          </p>
          <ContactFormDialog
            trigger={
              <button className="px-8 py-4 bg-white text-amber-700 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl text-lg font-medium">
                Get Free Consultation
              </button>
            }
          />
        </div>
      </section>
    </div>
  );
}
