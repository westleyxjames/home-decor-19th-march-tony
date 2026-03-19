import { ContactFormDialog } from "../components/ContactFormDialog";
import { CheckCircle, Star } from "lucide-react";

export function Pricing() {
  const packages = [
    {
      name: "Basic Package",
      price: "$99",
      popular: false,
      features: [
        "Room consultation (up to 1 hour)",
        "Style recommendations",
        "Color palette suggestions",
        "Basic furniture layout",
        "Shopping list of recommended items",
      ],
      notIncluded: [
        "Installation services",
        "Custom furniture",
        "Project management",
      ],
    },
    {
      name: "Standard Package",
      price: "$249",
      popular: true,
      features: [
        "Full room styling consultation (up to 2 hours)",
        "Comprehensive decor planning",
        "Detailed product suggestions with links",
        "3D room visualization",
        "Color & material samples",
        "Furniture arrangement plan",
        "Lighting design",
        "One revision included",
      ],
      notIncluded: ["Installation services", "Custom furniture pieces"],
    },
    {
      name: "Premium Package",
      price: "$499",
      popular: false,
      features: [
        "Complete home transformation",
        "Custom decor solutions",
        "Dedicated designer throughout project",
        "Multiple room styling",
        "3D renderings & mood boards",
        "Personal shopping assistance",
        "Installation coordination",
        "Project management",
        "Two revisions included",
        "30-day post-completion support",
      ],
      notIncluded: [],
    },
  ];

  const addOns = [
    {
      name: "Installation Services",
      price: "Starting at $150",
      description: "Professional installation of furniture and decor items",
    },
    {
      name: "Additional Room",
      price: "$99 - $199",
      description: "Add another room to your package",
    },
    {
      name: "Rush Service",
      price: "+$100",
      description: "Expedited turnaround (3-5 business days)",
    },
    {
      name: "Custom Furniture Design",
      price: "Quote-based",
      description: "Bespoke furniture pieces designed for your space",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700">
              Choose the package that best fits your needs and budget. No hidden
              fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-2xl scale-105 lg:scale-110"
                    : "bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-amber-700 rounded-full font-semibold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      pkg.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold">{pkg.price}</span>
                  </div>
                  <p
                    className={
                      pkg.popular ? "text-amber-100" : "text-gray-600"
                    }
                  >
                    One-time payment
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4
                      className={`font-semibold mb-3 ${
                        pkg.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              pkg.popular ? "text-white" : "text-amber-600"
                            }`}
                          />
                          <span
                            className={
                              pkg.popular ? "text-white" : "text-gray-700"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.notIncluded.length > 0 && (
                    <div className="pt-4 border-t border-white/20">
                      <h4
                        className={`font-semibold mb-3 text-sm ${
                          pkg.popular ? "text-amber-100" : "text-gray-600"
                        }`}
                      >
                        Not Included:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.notIncluded.map((item, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-sm ${
                              pkg.popular ? "text-amber-100" : "text-gray-500"
                            }`}
                          >
                            <span>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <ContactFormDialog
                  trigger={
                    <button
                      className={`w-full py-4 rounded-lg font-medium transition-all ${
                        pkg.popular
                          ? "bg-white text-amber-700 hover:bg-gray-100 shadow-lg"
                          : "bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800 shadow-md hover:shadow-lg"
                      }`}
                    >
                      Choose {pkg.name}
                    </button>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Optional Add-Ons
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your package with these additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {addon.name}
                  </h3>
                  <span className="text-amber-700 font-bold">
                    {addon.price}
                  </span>
                </div>
                <p className="text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-700">
                We accept all major credit cards, debit cards, and bank
                transfers. Payment is typically 50% upfront and 50% upon
                completion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer financing options?
              </h3>
              <p className="text-gray-700">
                Yes, we offer flexible payment plans for projects over $500.
                Contact us to discuss financing options.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I'm not satisfied with the design?
              </h3>
              <p className="text-gray-700">
                We offer revisions based on your package level. Our goal is
                100% satisfaction, and we'll work with you until you love the
                result.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are there any hidden fees?
              </h3>
              <p className="text-gray-700">
                No. All costs are transparent and discussed upfront. Any
                additional services or changes will be clearly communicated and
                approved before proceeding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Package Is Right?
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you choose the perfect
            package for your needs
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
