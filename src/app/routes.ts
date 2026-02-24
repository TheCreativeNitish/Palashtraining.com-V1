import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Gallery } from "./pages/Gallery";
import { Blog } from "./pages/Blog";
import { Forum } from "./pages/Forum";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";
import { ThankYou } from "./pages/ThankYou";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "gallery", Component: Gallery },
      { path: "blog", Component: Blog },
      { path: "forum", Component: Forum },
      { path: "testimonials", Component: Testimonials },
      { path: "contact", Component: Contact },
      { path: "thank-you", Component: ThankYou },
    ],
  },
]);
