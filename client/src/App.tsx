import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import MobileCTABar from "./components/MobileCTABar";
import BookingModal from "./components/BookingModal";
import { BookingProvider, useBooking } from "./contexts/BookingContext";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));
const UsageCosts = lazy(() => import("./pages/UsageCosts"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Playbook = lazy(() => import("./pages/Playbook"));
const Features = lazy(() => import("./pages/Features"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Announcement = lazy(() => import("./pages/Announcement"));

function Router() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#00AEEF] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/pricing"} component={Pricing} />
        <Route path={"/usage-costs"} component={UsageCosts} />
        <Route path={"/how-it-works"} component={HowItWorks} />
        <Route path={"/playbook"} component={Playbook} />
        <Route path={"/features"} component={Features} />
        <Route path={"/404"} component={NotFound} />
        <Route path={"/thank-you"} component={ThankYou} />
        <Route path={"/announcement"} component={Announcement} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function AppInner() {
  const { isOpen, closeBooking } = useBooking();
  return (
    <>
      <Router />
      <MobileCTABar />
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <BookingProvider>
            <AppInner />
          </BookingProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
