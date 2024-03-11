"use client";
import products from "@/store/tovarlar";
import React from "react";
import { useEffect } from "react";
import { types } from "./types";
import Lider from "@/components/slick/Sliccer";
const page = () => {
  const { loading, productss, error, getproducts } = products();

  useEffect(() => {
    getproducts();
    console.log(productss);
  }, []);
  return (
    <div className=" mt-6 flex-wrap grid grid-cols-4 gap-3 p-10">
      {productss.map((p: types) => (
        <ul
          className="mt-7 w-[300px] h-[300px] bg-gray-200 p-3 rounded-md"
          key={p.id}
        >
          <img
            className="w-[100%] h-[150px] rounded-md"
            src={p.thumbnail}
            alt=""
          />
          <li>{p.title}</li>
          <li>{p.category}</li>
          <li>Narxi {p.price} sum</li>
          <button className=" bg-green-400 p-3 rounded-md mt-2">savatga</button>
        </ul>
      ))}
    </div>
  );
};

export default page;
