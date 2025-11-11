import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import Carousel from "../components/Carousel";
import Main from "../components/Main";
import RealEstate from "../components/RealEstate";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
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
    </>
  );
}
