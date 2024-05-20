import React from "react"
import { BentoGrid, BentoGridItem } from "../Sparkle/Ui/bento-grid"


export function BentoGridDemo() {
  return (
    <BentoGrid className="group">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          image={item.image}
          text={item.text}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  )
}

const items = [
  {
    image: "/images/paperfood.png",
    text:"Packaging"
  },
  {

    image: "/images/printing.png",
    text:"Printing"
  },
  {
 
    image: "/images/paperfood3.png",
    text:"Production"
  },
 
 
]
