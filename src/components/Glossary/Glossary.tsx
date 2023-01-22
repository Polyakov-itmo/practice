
import React from "react"
import { IProp } from "../../Interfaces/IProp"
import { ICard } from "../../Interfaces/ICard"
import Card from "../Card/Card"

import '../../styles/overall.css'
import './Glossary.css'

export default function Glossary({ source }: IProp<ICard[]>) {
  return (
    <section className="glossary">
      <div className="container container__glossary">
        <h3 className="glossary__title">Глоссарий</h3>
        <div className="content">
          {
            source.map(item =>
              <Card key={item.id} source={item} />)
          }
        </div>
      </div>
    </section>
  )
}