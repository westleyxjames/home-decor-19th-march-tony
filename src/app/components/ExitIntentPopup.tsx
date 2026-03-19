import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ContactFormDialog } from "./ContactFormDialog";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🎁</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Wait! Don't Miss Out
          </h2>
          <p className="text-gray-600">
            Get a FREE consultation worth $99 for your home decor project. Our
            design experts are ready to help!
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-amber-600">✓</span>
                Free room consultation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-600">✓</span>
                Professional style recommendations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-600">✓</span>
                No obligation quote
              </li>
            </ul>
          </div>

          <ContactFormDialog
            trigger={
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-md hover:shadow-lg">
                Claim Free Consultation
              </button>
            }
          />

          <button
            onClick={() => setIsVisible(false)}
            className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            No thanks, I'll pass on this offer
          </button>
        </div>
      </div>
    </div>
  );
}
