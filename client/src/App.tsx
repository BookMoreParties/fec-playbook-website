import { Toaster } from "@/components/ui/sonner";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import MobileCTABar from "./components/MobileCTABar";
import BookingModal from "./components/BookingModal";
import { BookingProvider, useBooking } from "./contexts/BookingContext";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const UsageCosts = lazy(() => import("./pages/UsageCosts"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Playbook = lazy(() => import("./pages/Playbook"));
const Features = lazy(() => import("./pages/Features"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Announcement = lazy(() => import("./pages/Announcement"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const OnboardingSurvey = lazy(() => import("./pages/OnboardingSurvey"));
const OnboardingThankYou = lazy(() => import("./pages/OnboardingThankYou"));
const BookDemo = lazy(() => import("./pages/BookDemo"));
const GetReady = lazy(() => import("./pages/GetReady"));
const KeithCal = lazy(() => import("./pages/KeithCal"));
const TeamCal = lazy(() => import("./pages/TeamCal"));
const LauraCal = lazy(() => import("./pages/LauraCal"));
const KristineCal = lazy(() => import("./pages/KristineCal"));
const KeithLauraCal = lazy(() => import("./pages/KeithLauraCal"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Eula = lazy(() => import("./pages/Eula"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Terms = lazy(() => import("./pages/Terms"));
const AcceptableUse = lazy(() => import("./pages/AcceptableUse"));
const Widget = lazy(() => import("./pages/Widget"));
const Welcome = lazy(() => import("./pages/Welcome"));

function Router() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#00AEEF] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/usage-costs"} component={UsageCosts} />
        <Route path={"/how-it-works"} component={HowItWorks} />
        <Route path={"/playbook"} component={Playbook} />
        <Route path={"/features"} component={Features} />
        <Route path={"/404"} component={NotFound} />
        <Route path={"/thank-you"} component={ThankYou} />
        <Route path={"/announcement"} component={Announcement} />
        <Route path={"/onboarding"} component={Onboarding} />
        <Route path={"/onboarding/survey"} component={OnboardingSurvey} />
        <Route path={"/onboarding/thank-you"} component={OnboardingThankYou} />
        <Route path={"/book-a-demo"} component={BookDemo} />
        <Route path={"/getready"} component={GetReady} />
        <Route path={"/keithcal"} component={KeithCal} />
        <Route path={"/teamcal"} component={TeamCal} />
        <Route path={"/lauracal"} component={LauraCal} />
        <Route path={"/kristinecal"} component={KristineCal} />
        <Route path={"/keithlauracal"} component={KeithLauraCal} />
        <Route path={"/privacy"} component={PrivacyPolicy} />
        <Route path={"/eula"} component={Eula} />
        <Route path={"/disclaimer"} component={Disclaimer} />
        <Route path={"/terms"} component={Terms} />
        <Route path={"/acceptable-use"} component={AcceptableUse} />
        <Route path={"/widget"} component={Widget} />
        <Route path={"/welcome"} component={Welcome} />
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
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
