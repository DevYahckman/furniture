"use client";
import React, { useState } from "react";
import apple from "@/app/assets/images/productOne.png";
import testImage from "@/app/assets/svg/shopping-bag.svg";
import like from "@/app/assets/svg/Vector Two.svg";
import eye from "@/app/assets/svg/Eye 1.svg";
import Image, { StaticImageData } from "next/image";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { TiEyeOutline } from "react-icons/ti";

interface Props {
  img: StaticImageData;
  productName?: string;
  price?: number;
}
const ProductCard = ({ img, productName, price }: Props) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div>
      {" "}
      <div className="bg-[#f7fafc] rounded-lg min-h-28 shadow  hover:cursor-pointer hover:shadow-xl hover:border mt-5 md:mt-0 hover:border-gray-600 transition duration-700 group">
        <div className="relative">
          <Image
            src={img}
            alt="roduct image"
            className="object-contain object-center w-100% h-[250px]"
          />

          <div className="absolute top-3 right-2 hidden  group-hover:block">
            {
              <div
                className="mb-3 bg-white border border-gray-400 p-2 rounded-full"
                onClick={handleLike}
              >
                {like === false ? <FcLikePlaceholder /> : <FcLike />}
              </div>
            }
            <div className="mb-3 bg-white border border-gray-400 p-2 rounded-full">
              <TiEyeOutline color="gray" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between my-5 mx-3 ">
          <div>
            <p className="text-gray-700 font-medium text-base">{productName}</p>
            <p className="font-semibold text-deepGray">${price}</p>

            {/* Pend for later */}
            {/* <div>
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div> */}
          </div>
          <div className="bg-white  p-3 rounded-full ">
            <Image src={testImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
