import React from 'react';
import HeroSlider, { Slide } from 'hero-slider';

const img1 = "https://5.imimg.com/data5/KJ/LG/YZ/SELLER-13991498/digital-printing-services.jpeg";
const img2 = "https://printfinish.com/wp-content/uploads/2023/06/types-of-printing-business-1024x585.jpg";
const img3 = "https://graphicsuniversal.com/wp-content/uploads/2023/07/commercial-printing.jpeg";
const img4 = "https://www.hurix.com/wp-content/uploads/2023/07/Print-and-Digital-Design-What-Makes-Them-Unique.jpg";

const BasicSlider = () => {
  return (
    <HeroSlider
    slidingAnimation="left_to_right"
    orientation="horizontal"
    initialSlide={1}
    onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
    onChange={nextSlide => console.log("onChange", nextSlide)}
    onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
    style={{
        background: "rgba(0, 0, 0, 0.33)"
    }}
    settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh",


    }}
    >
        <Slide 
        background={{
            backgroundImageSrc: img1,
            backgroundAttachment: "fixed"
        }}
        />
        <Slide 
        background={{
            backgroundImageSrc: img2,
            backgroundAttachment: "fixed"
        }}
        />
        <Slide 
        background={{
            backgroundImageSrc: img3,
            backgroundAttachment: "fixed"
        }}
        />
        <Slide 
        background={{
            backgroundImageSrc: img4,
            backgroundAttachment: "fixed"
        }}
        />
    </HeroSlider>
  )
}

export default BasicSlider