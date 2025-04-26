import React from "react";
import ImageComponent from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";
import ParagraphsComponent from "./components/ParagraphsComponent";
import ListsComponent from "./components/ListsComponent";

function App() {
  return (
    <div className="App">
      <h1>Моё React-приложение</h1>
      <ImageComponent />
      <ListsComponent />
      <ParagraphsComponent />
      <VideoComponent />
    </div>
  );
}
export default App;