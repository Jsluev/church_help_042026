import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout/Layout";
import 'leaflet/dist/leaflet.css';

// Pages
import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import ProjectSingle from "@/pages/ProjectSingle";
import NewsList from "@/pages/NewsList";
import NewsSingle from "@/pages/NewsSingle";
import SubmitProject from "@/pages/SubmitProject";
import DonatePlatform from "@/pages/DonatePlatform";
import DonateProject from "@/pages/DonateProject";
import About from "@/pages/About";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Layout><Home /></Layout>
      </Route>
      <Route path="/about">
        <Layout><About /></Layout>
      </Route>
      <Route path="/projects">
        <Layout><Catalog /></Layout>
      </Route>
      <Route path="/projects/:id">
        <Layout><ProjectSingle /></Layout>
      </Route>
      <Route path="/news">
        <Layout><NewsList /></Layout>
      </Route>
      <Route path="/news/:id">
        <Layout><NewsSingle /></Layout>
      </Route>
      <Route path="/submit">
        <Layout><SubmitProject /></Layout>
      </Route>
      <Route path="/donate">
        <Layout><DonatePlatform /></Layout>
      </Route>
      <Route path="/donate/:projectId">
        <Layout><DonateProject /></Layout>
      </Route>
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
