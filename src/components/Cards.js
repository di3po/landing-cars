import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this COOL cars!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/publicImages/img-5.jpg"
              text="GO, GO, GO!"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/publicImages/img-4.jpg"
              text="GO, GO, GO!"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/publicImages/img-6.jpg"
              text="GO, GO, GO!"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/publicImages/img-7.jpg"
              text="GO, GO, GO!"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/publicImages/img-9.jpg"
              text="GO, GO, GO!"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="/publicImages/img-8.jpg"
              text="GO, GO, GO!"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
