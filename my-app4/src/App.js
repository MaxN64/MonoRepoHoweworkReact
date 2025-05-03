import React, { useState } from "react";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";
import "./App.css";

import imgKyoto from "./assets/1.png";
import imgOsaka from "./assets/2.png";
import imgHokkaido from "./assets/3.png";
import imgNagoya from "./assets/4.png";

const citiesData = [
  {
    name: "Токио",
    description:
      "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
    facts: [
      "Токио - самый населенный мегаполис в мире.",
      "Здесь расположена самая высокая башня в Японии - Токийская башня.",
      "В Токио проходят множество культурных событий и фестивалей.",
    ],
  },
  {
    name: "Киото",
    description:
      "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами и традиционной архитектурой.",
    imageUrl: imgKyoto,
    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",
      "Этот город был столицей Японии более тысячи лет.",
    ],
  },
  {
    name: "Осака",
    description:
      "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
    imageUrl: imgOsaka,
    facts: [
      "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
      "Город является кулинарной столицей Японии.",
    ],
  },
  {
    name: "Хоккайдо",
    description:
      "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
    imageUrl: imgHokkaido,
    facts: [
      "Хоккайдо предлагает отличные условия для зимних видов спорта.",
      "Летом остров привлекает туристов своими лавандовыми полями.",
    ],
  },
  {
    name: "Нагоя",
    description:
      "Город в центре Хонсю, известен своим промышленным наследием и историческими достопримечательностями.",
    imageUrl: imgNagoya,
    facts: [
      "Нагоя - один из важнейших промышленных центров Японии.",
      "Здесь находится знаменитый Нагойский замок.",
    ],
  },
];

function App() {
  const [selectedCity, setSelectedCity] = useState(citiesData[0]);

  return (
    <div className="app-container">
      <header>
        <h1>City Cards</h1>
      </header>

      <CitySelector
        cities={citiesData}
        selectedCity={selectedCity}
        onSelect={setSelectedCity}
        className="city-selector"
      />

      <CityCard city={selectedCity} className="city-card" />
    </div>
  );
}

export default App;