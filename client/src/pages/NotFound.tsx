import { Home } from "lucide-react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <div className="flex items-center justify-center" style={{ minHeight: "calc(100vh - 80px)" }}>
        <div className="text-center px-4">
          <div className="text-[#00AEEF] text-9xl font-black mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>404</div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Page Not Found
          </h1>
          <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0099D6] text-white font-black uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(0,174,239,0.4)]"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
