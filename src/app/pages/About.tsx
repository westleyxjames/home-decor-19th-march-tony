import { ContactFormDialog } from "../components/ContactFormDialog";
import { Target, Eye, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Quality",
      description:
        "We never compromise on quality. Every project receives meticulous attention to detail and the finest materials.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Satisfaction",
      description:
        "Your happiness is our success. We go above and beyond to exceed expectations and build lasting relationships.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description:
        "We stay ahead of design trends and continuously explore new techniques to bring fresh ideas to your space.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparency",
      description:
        "Clear communication, honest pricing, and no hidden fees. We believe in building trust through transparency.",
    },
  ];

  const team = [
    {
      name: "Jennifer Martinez",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "David Thompson",
      role: "Senior Designer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      name: "Amanda Chen",
      role: "Interior Stylist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About PrimeNest Decor
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Where craftsmanship meets creativity to deliver elegant and
              functional living spaces
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded in 2011, PrimeNest Decor began with a simple mission:
                  to make professional home decor services accessible to every
                  homeowner in America. What started as a small team of
                  passionate designers has grown into a trusted name in the home
                  decor industry.
                </p>
                <p>
                  Over the past 15 years, we've had the privilege of
                  transforming over 1,000 homes and commercial spaces across the
                  United States. Each project is a testament to our commitment
                  to excellence, creativity, and customer satisfaction.
                </p>
                <p>
                  Today, PrimeNest Decor stands as a leader in the industry,
                  known for our innovative designs, premium materials, and
                  personalized approach to every project. We believe that your
                  home should be a reflection of who you are—a space where
                  comfort meets style.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHN0eWxpbmclMjByb29tfGVufDF8fHx8MTc3MzgyOTYwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interior design work"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center text-amber-700 mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg">
                To deliver elegant and functional living spaces that exceed our
                clients' expectations. We strive to transform houses into homes
                through thoughtful design, quality craftsmanship, and
                personalized service that reflects each client's unique style
                and needs.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center text-amber-700 mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg">
                To become America's most trusted and recognized home decor
                brand, setting the standard for excellence in interior design.
                We envision a future where every homeowner has access to
                professional, affordable, and inspiring decor solutions that
                transform their living spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-700">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              15 Years of Excellence
            </h2>
            <p className="text-xl text-amber-100">
              Proven track record of transforming spaces
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-amber-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-amber-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-amber-100">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-amber-100">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with our team for a free
            consultation
          </p>
          <ContactFormDialog
            trigger={
              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-md hover:shadow-lg text-lg font-medium">
                Get Free Consultation
              </button>
            }
          />
        </div>
      </section>
    </div>
  );
}
