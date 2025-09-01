import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/Services'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contato from './pages/Contato';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  return (
    <Router>
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-slate-900 to-slate-800">
      <Header />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/servicos/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  )
}

export default App