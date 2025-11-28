import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Header,
  Footer,
  MainMenu,
  Carousel,
  Main,
  RealEstate,
  Mission,
  Agency,
  AiBot,
  Awards,
  Career,
  Functionality,
  HowItWorks,
  Invite,
  Offer,
  Questions,
  Team,
} from "@/components";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const sections = document.querySelectorAll(
        ".animation-container > *:nth-child(n+4):not(:last-child)"
      );

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, 300);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="animation-container">
      <Header />
      <MainMenu />
      <Main />
      <Carousel />
      <RealEstate />
      <Mission />
      <Awards />
      <Team />
      <Career />
      <AiBot />
      <Agency />
      <Offer />
      <Functionality />
      <HowItWorks />
      <Questions />
      <Invite />
      <Footer />
      <div style={{ height: "600px" }}></div>
    </div>
  );
}
