"use client";
import Image from "next/image";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Iwatch from "./components/Iwatch";
import Btn from "./components/Btn";
import Circle from "./components/Circle";
import ImageWithDot from "./components/ImageWithDot";
import Arrows from "./components/Arrows";
import { useState } from "react";

export default function Home() {
  const [selectImage, setSelectImage] = useState("/navy.png");
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="grid_2-1">
          <div>
            <Heading />
          </div>
          <Iwatch src={selectImage} />
          <Circle
            activeCircle={selectImage === "/navy.png" ? 1 : selectImage === "/mint.png" ? 2 : 3}
          />
        </section>
        <div className="btn">
          <Btn btntext="Buy Now" />
        </div>
        <section className="grid_1-1">
          <Arrows />
          <div className="flex">
            <ImageWithDot
              src="/navy.png"
              dotColor="#434558"
              onClick={() => setSelectImage("/navy.png")}
            />
            <ImageWithDot
              src="/mint.png"
              dotColor="#6ADDCC"
              onClick={() => setSelectImage("/mint.png")}
            />
            <ImageWithDot
              src="/ocean.png"
              dotColor="#c9e6e1"
              onClick={() => setSelectImage("/ocean.png")}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
