import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import stars from "./productImages/stars.png";
import Icon from "./productImages/Icon.png";
import cart from "./productImages/cart.png";
import credit from "./productImages/credit.png";
import truck from "./productImages/truck.png";
import Size from "./productImages/Size.png";
import Free from "./productImages/Free.png";
import { useDispatch, useSelector } from "react-redux";
import { scrollToZero } from "../utils/CustomFC";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  RadioGroup,
  Radio
} from "@chakra-ui/react";
import { addBasketProduct } from "../../Slices/addBasketProductTC";

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    scrollToZero()
  }, [])
  
  const { product } = useSelector(state => state.productPageTC);
  console.log(product);

  const [size, setSize] = useState(undefined);
  const [color, setColor] = useState('');
  console.log(size, color);

  //selects and categories
  const categories = product?.categories?.map((item, index) => <p key={index} className="text-xl">{item}/  </p>)
  const colors = product?.colors?.map((item, index) => <p key={index} className="text-xl">{item}/  </p>)
  const selectSize = product?.sizes?.map((item, index) => <Radio onClick={() => setSize(item)} key={index} value={String(index)}>{item}</Radio>)
  const selectColor = product?.colors?.map((item, index) => <Radio onClick={() => setColor(item)} key={index} value={String(index)}>{item}</Radio>)
  const images = product.images.map((item, index) => <SwiperSlide key={index} className="flex items-center">
    <img style={{ width: "100%" }} src={item} alt="Error!" />
  </SwiperSlide>)

  const postProduct = () => {    
    if (size == false | color == false) alert('Please select size and color!');
    else {
      dispatch(addBasketProduct({product, newSize: size, newColor: color}))
    }
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[90%] flex flex-col justify-center mt-10">
          <div className="flex gap-40">
            <div className="w-[35%]">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{ clickable: true }}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {images}
              </Swiper>
            </div>

            <div className="w-[65%] mt-5 flex">
              <div className="">
                <h1 className="text-4xl">
                  {product.title}
                </h1>

                <div className="flex mt-10 items-start gap-x-4">
                  <img src={stars} alt="Error!" />
                  <p>3.5</p>
                  <img className="gap-x-2" src={Icon} alt="Error!" />
                  <p>120 comment</p>
                </div>

                <div>
                  <div className="text-xl my-10">
                    <Accordion allowMultiple>
                      <AccordionItem>
                        <h1>
                          <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                              <h2 className="text-2xl">Select Size</h2>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h1>
                        <AccordionPanel className='flex flex-col'>
                          <RadioGroup className='grid grid-cols-3 auto-rows-auto gap-y-2'>
                            {selectSize}
                          </RadioGroup>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <h1>
                          <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                              <h2 className="text-2xl">Select Color</h2>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h1>
                        <AccordionPanel className='flex flex-col'>
                          <RadioGroup className='grid grid-cols-3 auto-rows-auto gap-y-2'>
                            {selectColor}
                          </RadioGroup>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="my-10 flex gap-10">
                    <button onClick={postProduct} className="bg-[#8A33FD] border-[1px] hover:bg-[#6620C1] transition-colors border-black text-white flex rounded-lg gap-x-2 py-3 px-10">
                      <img src={cart} alt='Error' />
                      <p>Add to cart</p>
                    </button>
                    <button className="bg-[#8A33FD] border-[1px] hover:bg-[#6620C1] transition-colors border-black text-white flex rounded-lg gap-x-2 py-3 px-10">
                      <p>Add to wishlist</p>
                    </button>
                    {postProduct}
                    <div className="border-[1px] border-black py-3 px-5 font-medium rounded-lg">
                      <p>${product.price}</p>
                    </div>
                  </div>
                  <div className="w-full mt-5 border-y-[1px] border-gray-300"></div>
                  <div className="flex mt-16 text-xl flex-col">
                    <div className="flex gap-10">
                      <img className="w-5 h-5 mt-1" src={credit} alt="" />{" "}
                      <p>Secure payment</p>
                      <img className="w-5 h-5 mt-1" src={truck} alt="" />{" "}
                      <p>Free shipping</p>
                    </div>
                    <div className="flex mt-5 gap-10">
                      <img className="w-5 h-5 mt-1" src={Size} alt="" />{" "}
                      <p>Size & Fit</p>
                      <img
                        className="h-5 ml-14 w-5 mt-1"
                        src={Free}
                        alt=""
                      />{" "}
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

            <div className="flex w-[50%]">
              <p>
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 mt-10 gap-0.5 gap-y-4">
              <div className="flex flex-col gap-y-1">
                <div>
                  <h2 className="text-xl text-gray-500">Categories</h2>
                </div>
                <div className="flex gap-x-1">{categories}</div>
              </div>
              <div className="flex flex-col">
                <div>
                  <h2 className="text-xl text-gray-500">Colors</h2>
                </div>
                <div className="flex">
                  {colors}
                </div>
              </div>
           
              <div className="flex flex-col gap-y-1">
                <h2 className="text-xl text-gray-500">Price</h2>
                <p className="text-xl">${product.price}</p>
              </div>
            </div>
          </div>


          <div className="flex gap-x-2">
            <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>

            <h1 className="text-4xl">Similar Products</h1>
          </div>

        </div>
      </div>
    </>
  );
}
export default Product;
