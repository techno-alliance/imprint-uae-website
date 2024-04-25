import React from "react"
import { BentoGrid, BentoGridItem } from "../Sparkle/Ui/bento-grid"


export function BentoGridDemo() {
  return (
    <BentoGrid className="group">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          image={item.image}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  )
}

const items = [
  {



    image: "/images/paperfood.png"
  },
  {

    image: "/images/paperfood2.png"
  },
  {
 
    image: "/images/paperfood3.png"
  },
 
 
]
