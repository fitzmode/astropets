import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import About from "./sections/About";
import FAQSection from "./sections/FAQ";
import Roadmap from "./sections/Roadmap";
import Team from "./sections/Team";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Roadmap />
      <Team />
      <FAQSection />
    </Layout>
  );
}

export default App;
