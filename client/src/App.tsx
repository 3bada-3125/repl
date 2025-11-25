import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Marathon from "@/pages/marathon";
import Wrestling1kg from "@/pages/wrestling1kg";
import Wrestling3kg from "@/pages/wrestling3kg";
import Pentathlon from "@/pages/pentathlon";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/marathon" component={Marathon} />
      <Route path="/wrestling1kg" component={Wrestling1kg} />
      <Route path="/wrestling3kg" component={Wrestling3kg} />
      <Route path="/pentathlon" component={Pentathlon} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
