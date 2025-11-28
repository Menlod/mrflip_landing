import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
