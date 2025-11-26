import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import Carousel from "../components/Carousel";
import Main from "../components/Main";
import RealEstate from "../components/RealEstate";
import Mission from "../components/Mission";
import Awards from "../components/Awards";
import Team from "../components/Team";
import Career from "../components/Career";
import AiBot from "../components/AiBot";
import Agency from "../components/Agency";
import Offer from "../components/Offer";
import Functionality from "../components/Functionality";
import HowItWorks from "../components/HowItWorks";
import Questions from "../components/Questions";
import Invite from "../components/Invite";
import Footer from "../components/Footer";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="animation-container">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <MainMenu />
      </div>
      <div className="container">
        <Main />
      </div>
      <Carousel />
      <div className="container">
        <RealEstate />
      </div>
      <div className="container">
        <Mission />
      </div>
      <div className="container">
        <Awards />
      </div>
      <div className="container">
        <Team />
      </div>
      <div className="container">
        <Career />
      </div>
      <div className="container">
        <AiBot />
      </div>
      <div className="container">
        <Agency />
      </div>
      <div className="container">
        <Offer />
      </div>
      <div className="container">
        <Functionality />
      </div>
      <div className="container">
        <HowItWorks />
      </div>
      <div className="container">
        <Questions />
      </div>
      <div className="container">
        <Invite />
      </div>
      <div className="container">
        <Footer />
      </div>
      <div style={{ height: "600px" }}></div>
    </div>
  );
}
