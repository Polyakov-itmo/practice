import React from "react"
import { ICard } from "../../Interfaces/ICard";
import { IProp } from "../../Interfaces/IProp";
import './Card.css'



export default function Card({ source }: IProp<ICard>) {
  return (
    <div className="content__point">
      <div className="column column__word">{source.word}</div>
      <div className="column column__desc">
        {source.description}
      </div>
    </div>)
}

