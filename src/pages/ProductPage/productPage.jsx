import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide_3 from "./productImages/slide_3.png";
import stars from "./productImages/stars.png";
import Icon from "./productImages/Icon.png";
import cart from "./productImages/cart.png";
import credit from "./productImages/credit.png";
import truck from "./productImages/truck.png";
import Size from "./productImages/Size.png";
import Free from "./productImages/Free.png";
function Product() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex gap-40 ">
          <div className="w-[20%]  ">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{ clickable: true }}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              <SwiperSlide className="flex items-center">
                <img style={{ width: "100%" }} src={slide_3} alt="Error!" />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ width: "100%" }} src={slide_3} alt="Error!" />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ width: "100%" }} src={slide_3} alt="Error!" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="w-[80%] flex">
            <div className="">
              <h1 className="text-4xl lg:text-4xl  md:text-6xl  text-center lg:text-left">
                Raven Hoodie With Black colored Design
              </h1>
              <div className="flex gap-y-5 lg:gap-y-0 items-center flex-col lg:flex-row mt-10 lg:items-start gap-x-10">
                <div className="flex flex-col lg:flex-row items-center gap-3">
                    <img className=" w-96 lg:w-40" src={stars} alt="Error!" />
                    <p className="text-2xl lg:text-xl">3.5</p>
                </div>
                
                <div className="flex flex-col mt-5 lg:mt-0 lg:flex-row items-center gap-3">
                    <img className="w-14 lg:w-5" src={Icon} alt="Error!" />
                    <p className="text-2xl lg:text-xl">120 comment</p>
                </div>
              </div>
              <div>
                <div className="text-xl flex flex-col mb-10 lg:mb-0 mt-10 lg:my-10">
                    <div className="flex justify-center lg:justify-start">
                        <h2 className="text-2xl">Select Size</h2>
                    </div>
                    <div className="flex flex-col pt-7 gap-5 lg:gap-10 items-center lg:flex-row">
                        <button className="rounded-2xl border-[1px] border-black w-full lg:w-16 ml-3 lg:ml-0 py-2 px-2 lg:px-4 lg:py-2 active:bg-black active:text-white">
                            XS
                        </button>
                        <button className="rounded-2xl ml-3 border-[1px] border-black w-full lg:w-16 py-2 px-2 lg:px-4 lg:py-2 active:bg-black active:text-white">
                            S
                        </button>
                        <button className="rounded-2xl ml-3 border-[1px] border-black w-full lg:w-16 py-2 px-2 lg:px-4 lg:py-2 active:bg-black active:text-white">
                            M
                        </button>
                        <button className="rounded-2xl ml-3 border-[1px] border-black w-full lg:w-16 py-2 px-2 lg:px-4 lg:py-2 active:bg-black active:text-white">
                            L
                        </button>
                        <button className="rounded-2xl ml-3 border-[1px] border-black w-full lg:w-16 py-2 px-2 lg:px-4 lg:py-2 active:bg-black active:text-white">XL</button>
                    </div>
                  
                </div>
                <div className="my-5 mb-10 lg:mb-0 lg:my-10 flex flex-col lg:flex-row gap-5 lg:gap-10">
                  <button className="bg-[#8A33FD] border-[1px] border-black text-white text-xl flex justify-center rounded-lg gap-x-2 py-3 px-10">
                    <img className="w-7" src={cart} alt="" /> Add to cart
                  </button>
                  <div className="border-[1px] border-black py-3 px-5 font-medium rounded-lg">
                    $63.00
                  </div>
                </div>

                <div className="w-full mt-5 border-y-[1px] border-gray-300"></div>
                
                <div className="flex mt-16 text-2xl lg:text-xl flex-col">
                  <div className="flex flex-col items-center lg:flex-row gap-10">
                    <img className="w-20 h-20 lg:w-5 lg:h-5 mt-1" src={credit} alt="" />
                    <p>Secure payment</p>
                    <img className="w-20 h-20 lg:w-5 lg:h-5 mt-1" src={truck} alt="" />
                    <p>Free shipping</p>
                  </div>
                  <div className="flex flex-col items-center lg:flex-row  mt-5 gap-10">
                    <img className="w-20 h-20 lg:w-5 lg:h-5 mt-1" src={Size} alt="" />
                    <p>Size & Fit</p>
                    <img
                      className="w-20 h-20 lg:w-5 lg:h-5 lg:ml-14 mt-1"
                      src={Free}
                      alt=""
                    />
                    <p>Free Shipping & Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="w-[80%] my-20 gap-y-10 flex flex-col">
        <div className="flex gap-x-2">
        <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
          <h1 className="text-4xl">Product Description</h1>
        </div>

        <div className="flex items-center gap-x-3">
          <h2 className="text-2xl font-400">Description</h2>
          <p className="text-xl pl-5 text-gray-500">User comments</p>
          <div className="bg-[#8A33FD] px-1 text-center rounded-lg text-white">
            24
          </div>
          <p className="text-xl pl-5 text-gray-500">Question & Answer</p>
          <div className="bg-black px-2 text-center rounded-lg text-white">
            4
          </div>
        </div>
        <div className="flex w-[50%]">
          <p>
            100% Bio-washed Cotton – makes the fabric extra soft & silky.
            Flexible ribbed crew neck. Precisely stitched with no pilling & no
            fading. Provide all-time comfort. Anytime, anywhere. Infinite range
            of matte-finish HD prints.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 ml-20">
          <div className="flex w-[70%]  gap-20 flex-wrap">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl text-gray-500">Fabric</h2>
              <p className="text-2xl">Bio-washed Cotton</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl text-gray-500">Pattern</h2>
              <p className="text-2xl">Printed</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl text-gray-500">Fit</h2>
              <p className="text-2xl">Regular-fit</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl text-gray-500">Regular-fit</h2>
              <p className="text-2xl">Round Neck</p>
            </div>
            <div className="flex flex-col gap-3 ">
              <h2 className="text-xl text-gray-500 ">Sleeve</h2>
              <p className="text-2xl">Half-sleeves</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl text-gray-500">Style</h2>
              <p className="text-2xl">Casual Wear</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="w-full flex justify-center">
      <div className="bg-[#8A33FD] w-2 rounded-lg border-[1px]"></div>
        <div className="text-left">
            <h1 className="text-4xl">Similar Products</h1>
        </div>
      </div>
    </>
  );
}
export default Product;