import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { Disclaimer } from "./pages/Disclaimer";
import { CookiePolicy } from "./pages/CookiePolicy";
import { ThankYou } from "./pages/ThankYou";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-conditions", Component: TermsConditions },
      { path: "disclaimer", Component: Disclaimer },
      { path: "cookie-policy", Component: CookiePolicy },
      { path: "thank-you", Component: ThankYou },
    ],
  },
]);
