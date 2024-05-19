import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import stars from "./productImages/stars.png";
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
import { addWishlistProduct } from "../../Slices/addWishlistProductTC";
import { useParams } from 'react-router-dom';
import { productTC } from "../../Slices/productPageTC";
import { useToast, Button } from "@chakra-ui/react";

function Product() {
  const dispatch = useDispatch();
  const toast = useToast();
  const id = useParams();
  console.log(id.id);

  useEffect(() => {
    scrollToZero(),
      dispatch(productTC({ id: id.id }));
  }, [id, dispatch])

  const { product, isProductFetch } = useSelector(state => state.productPageTC);
  console.log(product);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState('');

  if (isProductFetch) {
    return <h1 className="text-4xl p-10">Loading...</h1>
  }

  const postBasketProduct = (e) => {
    e.preventDefault();
    if (!(size == false | color == false)) {
      dispatch(addBasketProduct({ product, newSize: size, newColor: color }));
    }
  }

  const postWishlistProduct = (e) => {
    e.preventDefault();
    if (!(size == false | color == false)) {
      dispatch(addWishlistProduct({ product, newSize: size, newColor: color }));
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
                {product?.images?.map((item, index) => <SwiperSlide key={index} className="flex items-center">
                  <img style={{ width: "100%" }} src={item} alt="Error!" />
                </SwiperSlide>)}
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
                            {product?.sizes?.map((item, index) => <Radio onClick={() => setSize(item)} key={index} value={String(index)}>{item}</Radio>)}
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
                            {product?.colors?.map((item, index) => <Radio onClick={() => setColor(item)} key={index} value={String(index)}>{item}</Radio>)}
                          </RadioGroup>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="my-10 flex gap-10">
                    <div onClick={postBasketProduct}>
                      <Button
                        onClick={() =>
                          toast({
                            position: 'bottom-left',
                            render: () => (
                              <Box color='white' p={3} bg={'darkviolet'}>
                                {size == false | color == false ? 'Please select size and color !' : 'Add product to basket'}
                              </Box>
                            ),
                          })
                        }
                        colorScheme="purple"
                      >
                        Add to basket
                      </Button>
                    </div>

                    <div onClick={postWishlistProduct}>
                      <Button
                        onClick={() =>
                          toast({
                            position: 'bottom-left',
                            render: () => (
                              <Box color='white' p={3} bg='darkviolet'>
                                {size == false | color == false ? 'Please select size and color !' : 'Add product to wishlist'}
                              </Box>
                            ),
                          })
                        }
                        colorScheme="purple"
                      >
                        Add to wishlist
                      </Button>
                    </div>

                    <div className="border-[1px] border-black py-1.5 px-5 font-medium rounded-lg">
                      <p>${product.price}</p>
                    </div>
                  </div>
                  <div className="w-full mt-5 border-y-[1px] border-gray-300"></div>
                  <div className="flex mt-16 text-xl flex-col">
                    <div className="flex gap-10">
                      <img className="w-5 h-5 mt-1" src={credit} alt="" />
                      <p>Secure payment</p>
                      <img className="w-5 h-5 mt-1" src={truck} alt="" />
                      <p>Free shipping</p>
                    </div>
                    <div className="flex mt-5 gap-10">
                      <img className="w-5 h-5 mt-1" src={Size} alt="" />
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
                <div className="flex gap-x-1">{product?.categories?.map((item, index) => <p key={index} className="text-xl">{item}/  </p>)}</div>
              </div>
              <div className="flex flex-col">
                <div>
                  <h2 className="text-xl text-gray-500">Colors</h2>
                </div>
                <div className="flex">
                  {product?.colors?.map((item, index) => <p key={index} className="text-xl">{item}/  </p>)}
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
  )
}
export default Product;