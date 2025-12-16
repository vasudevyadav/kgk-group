

import "@/assets/css/globals.css";
import Layout from "@/components/Layout";
import GoogleTranslateLoader from "@/components/GoogleTranslateLoader";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-body text-paragraph">
        <div id="modal-root"></div>
        <GoogleTranslateLoader />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
