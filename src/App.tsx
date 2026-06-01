import Header from './components/Header'
import Footer from './components/Footer'
import JsonLd from './components/JsonLd'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ServicesPage from './pages/Services'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from './pages/About';
import Contato from './pages/Contato';
import CookieBanner from './components/CookieBanner';
import NotFound from './pages/NotFound';
import Privacidade from './pages/Privacidade';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  return (
    <Router>
    <ScrollToTop />
    <JsonLd />
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-slate-900 to-slate-800">
      <Header />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/servicos/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/quem-somos" element={<About />} />
          <Route path="/about" element={<Navigate to="/quem-somos" replace />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  </Router>
  )
}

export default App