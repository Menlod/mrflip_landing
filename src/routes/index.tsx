import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import Carousel from "../components/Carousel";
import Main from "../components/Main";
import RealEstate from "../components/RealEstate";
import Mission from "../components/Mission";
import Awards from "../components/Awards";
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
      <div style={{ height: "600px" }}></div>
    </div>
  );
}
