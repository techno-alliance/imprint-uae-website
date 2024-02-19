"use client";
import React from "react";
import DetailsThumb from "./DetailsThumb";
import Link from "next/link";

class App extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: ["images/pack1.png", "images/pack2.png", "images/pack3.png"],
        description:[ "UI/UX designing, html tutorials", "UI/UX designing, css tutorials", "UI/UX designing, tutorials"]
       
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="">
        {products.map((item) => (
          <div className="" key={item._id}>
            {/* <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div> */}
            <section>
              <div class=" max-w-screen-xl px-12 py-20 mx-auto flex flex-col gap-20">
                <div className="flex flex-col justify-between gap-1 lg:gap-20 text-center lg:text-start lg:flex-row">
                  <div class="img_appear md:basis-2/5 md:min-w-2/5 md:m-0 lg:basis-1/2 lg:min-w-1/2 lg:m-0 overflow-hidden h-full md:h-[450px]">
              
                    <img
                      class="object-cover object-center w-full h-full"
                      src={item.src[index]}
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col justify-center gap-5 md:basis-2/5 md:min-w-2/5 md:m-0 lg:basis-1/2 lg:min-w-1/2 lg:m-0">
                    <h1 class="mt-16 text-[50px] lg:text-[120px] lg:mt-0 text-[#0092D1] font-bold leading-none flex flex-col">
                      Food
                      <span className="text-[40px] lg:text-[100px] font-light text-[#000]">
                        Packaging{" "}
                      </span>
                    </h1>
                    <p class="text-[16px] lg:text-[22px] font-normal">
                      Imprint printing press is the foremost provider of varied
                      offset printing solutions to more than a thousand clients
                      today..
                    </p>
                    <Link
                      className="button-58 transition duration-300 p-2 w-max rounded-full text-xs px-4 text-white"
                      href=""
                    >
                      <span className="text-btn">Order Now</span>
                      <span>Order Now</span>
                    </Link>
                  </div>
                </div>
                    <div>
                     
                      <DetailsThumb
                        images={item.src}
                        tab={this.handleTab}
                        myRef={this.myRef}
                      />
                    </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
