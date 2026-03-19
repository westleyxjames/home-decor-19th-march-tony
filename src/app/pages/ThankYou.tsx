import { Link } from "react-router";
import { CheckCircle, Home, Phone, Mail } from "lucide-react";

export function ThankYou() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            We've received your message and will get back to you within 24
            hours.
          </p>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    We Review Your Request
                  </h3>
                  <p className="text-gray-700">
                    Our team will carefully review your project details and
                    requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Personal Consultation
                  </h3>
                  <p className="text-gray-700">
                    We'll contact you to schedule a free consultation and
                    discuss your vision.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Custom Proposal
                  </h3>
                  <p className="text-gray-700">
                    You'll receive a detailed proposal tailored to your needs
                    and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">
              Need Immediate Assistance?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18053569285"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href="mailto:help@primenestdecor.site"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-amber-600 text-amber-700 rounded-lg hover:bg-amber-50 transition-all"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
