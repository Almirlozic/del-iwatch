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
    <div class="grid gap-8 [grid-template-columns:[full-start]_1fr_[content-start]_minmax(0,600px)_[img-start]_minmax(0,600px)_[content-end]_1fr_[full-end]] max-w-[1400px] mx-auto">
      <Header />
      <main class="col-[content] mt-9 my-12">
        <section class="grid grid-cols-[2fr_1fr_0.1fr] gap-8 items-center">
          <div>
            <Heading />
          </div>
          <Iwatch src={selectImage} />
          <Circle
            activeCircle={selectImage === "/navy.png" ? 1 : selectImage === "/mint.png" ? 2 : 3}
          />
        </section>
        <div className="col-[content] justify-self-start text-white font-semibold text-[1.4rem] border border-white py-5 px-[70px] rounded-full">
          <Btn btntext="Buy Now" />
        </div>
        <section className="grid grid-cols-[2fr_1fr] items-center gap-4 py-16">
          <Arrows />
          <div className="flex gap-9">
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
