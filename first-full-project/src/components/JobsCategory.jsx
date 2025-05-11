import React from "react";
import CategoryCard from "./CategoryCard";
import styles from '../styles/JobsCategory.module.css'

import Circle from "../assets/svg/Circle.svg";
import Car from "../assets/svg/Car.svg";
import Window from "../assets/svg/Window.svg";
import Bandage from "../assets/svg/Bandage.svg";
import ForkKnife from "../assets/svg/ForkKnife.svg";
import Movie from "../assets/svg/Movie.svg";
import Message from "../assets/svg/Message.svg";
import Box from "../assets/svg/Box.svg";
import Card from "../assets/svg/Card.svg";

const cardInfo = [
  { text: 'Финансы',           url: Circle },
  { text: 'Грузоперевозки',    url: Car },
  { text: 'Дизайн',            url: Window },
  { text: 'Ресторанный бизнес',url: ForkKnife },
  { text: 'Медицина',          url: Bandage },
  { text: 'Мультимедиа',       url: Movie },
  { text: 'Служба поддержки',  url: Message },
  { text: 'Менеджмент',        url: Box },
  { text: 'Продажи',           url: Card },
]

export default function JobsCategory() {
  return (
    <div className={styles.grid}>
      {cardInfo.map((item, i) => (
        <CategoryCard
          key={i}
          text={item.text}
          url={item.url}
        />
      ))}
    </div>
  )
}
