import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Page/Home";
import Error from "./Components/Page/Error";
import PrivacyPolicy from "./Components/Page/PrivacyPolicy.jsx";
import Contact from "./Components/Page/Contact.jsx";
import Navbar from "./Components/Common/Navbar.jsx"
import Footer from "./Components/Common/Footer.jsx"
import Nosotros from "./Components/Page/Nosotros.jsx";
import Tienda from "./Components/Page/Tienda.jsx";
import ScrollToTopButton from "./Components/Common/ScrollToTopButton.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/IMPERIO/" element={<Home />} />
        <Route path="/Contacto" element={<Contact />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Tienda" element={<Tienda />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
}
export default App;