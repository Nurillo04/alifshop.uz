"use client";

import { Carousel } from "flowbite-react";
export default function Lider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src="https://minio.alifnasiya.uz/shop/catalog/carousel/201/1710248810-1600x491.png"
          alt="..."
        />
        <img src="2.jpg" alt="..." />
        <img src="3.jpg" alt="..." />
        <img src="4.jpg" alt="..." />
        <img src="5.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
