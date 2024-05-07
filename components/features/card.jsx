import classNames from "classnames"
import { useFeatureStore } from "./store"
import { motion } from "framer-motion"
import Image from "next/image";
import cover1 from "@/public/images/cover1.jpg";
import cover2 from "@/public/images/cover2.jpg";
import cover3 from "@/public/images/cover3.jpg";
import cover4 from "@/public/images/cover4.jpg"

const FeatureCard = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore(state => state.inViewFeature)
  const setFullscreenFeature = useFeatureStore(
    state => state.setFullscreenFeature
  )

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full overflow-hidden rounded-2xl transition-opacity",
        inViewFeature === id
          ? "active-card z-20"
          : "pointer-events-none z-10"
      )}
    >
      {/* <div
        className={classNames(
          "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br",
          gradient
        )}
      /> */}
      {children}
      {/* <button
        onClick={() => setFullscreenFeature(id)}
        className="show-me-btn absolute bottom-6 right-6 rounded-xl bg-black px-4 py-2 text-white shadow-lg"
      >
        Show me
      </button> */}
    </div>
  )
}

export const Todo = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <Image class="w-full object-cover object-center" src={cover1}/>
    </FeatureCard>
  )
}

export const Colors = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
       <Image class="w-full" src={cover2}/>
    </FeatureCard>
  )
}

export const Availability = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
       <Image class="w-full" src={cover3}/>
    </FeatureCard>
  )
}

export const Music = ({ id }) => {
  const fullscreenFeature = useFeatureStore(store => store.fullscreenFeature)
  const isFullscreen = fullscreenFeature === id

  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
       <Image class="w-full" src={cover4}/>
    </FeatureCard>
  )
}

// export const SchedulingLinks = ({ id }) => {
//   return (
//     <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
//       <span />
//     </FeatureCard>
//   )
// }

// export const Team = ({ id }) => {
//   return (
//     <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
//       <span />
//     </FeatureCard>
//   )
// }
