import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import MobileCTABar from "./components/MobileCTABar";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));
const UsageCosts = lazy(() => import("./pages/UsageCosts"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Playbook = lazy(() => import("./pages/Playbook"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
          <MobileCTABar />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
