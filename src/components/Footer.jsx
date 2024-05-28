import React from "react"
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/accordion"
import { Box } from "@chakra-ui/react";
const sections = [
    {
        title:'Need Help',
        items:['Contact Us','Track Order','Returns & Refunds','FAQ.s','Career']
    },
    {
        title:'Company',
        items:['About Us','euphoria Blog','euphorlastan','Collaboration','Media']
    },
    {
        title:'More Info',
        items:['Term and Conditions','Privacy Policy','Shipping policy','Sitemap']
    },
    {
        title:'Location',
        items:['support @ euphoria.in','Eklingpura Cbouraha','Ahmedabad Main Road','(NH8-Near Mahadev Hotel) Udalpur,India-313002']
    },
    
]
//  const items =[
//      {
//          name:'Facebook',
//          icon:FaFacebook,
//          link: ''
//      },
//      {
//          name:'Instagram',
//          icon: FaInstagram,
//          link: ''
//     },
//     {
//         name:'Twitter',
//         icon:FaTwitter,
//         link: ''
//     },
//     {
//          name:'Twitch',
//          icon:FaTwitch,
//          link: ''
//      },
//      {
//         name:'Github',
//         icon:FaGitthub,
//         link: ''
//      },
//  ]
const Footer = () =>{
    return(
        <>
   <div className="w-full mt-24  bg-[rgba(60,66,66,1)] text-white py-y px-2">
    <div className=" md:grid-cols-2 max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-4 py-16 ">
        {
            sections.map((section,index)=>(
                <div key={index}>
                <h6 className="font-bold uppercase pt-2 pb-6">
                    {section.title}
                </h6>
                     <ul>
                        {section.items.map((item,i)=>(
                            <li key={i}
                            className="py-1  text-white cursor-pointer">
                                {item}

                            </li>
                        ))}
                     </ul>
                </div>
            ))
        }
    
   <div className="flex left-28 pt-20">
   <div className="text-center text-xl text-white md-2">
    <Link href="" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-white mx-1 inline-block pt-1"></Link>
    <Link href="" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-white mx-1 inline-block pt-1"></Link>
    <Link href="" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-white mx-1 inline-block pt-1"></Link>
    <Link href="" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-white mx-1 inline-block pt-1"></Link>
</div>
</div>

    </div>

  <div className="pb-6 flex justify-center">
    <Accordion allowToggle className="w-[1248px] border-gray-600">
        <AccordionItem>
            <h2>
                <AccordionButton className="h-[70px]"><p className="pl-8 text-[20px] font-bold">Popular Categories</p>
                <Box as='span' flex='1' textAlign='left'></Box>
                <AccordionIcon></AccordionIcon>
                </AccordionButton>
            </h2>
            <AccordionPanel></AccordionPanel>
        </AccordionItem>
    </Accordion>
  </div>

    <div className="flex flex-col max-w-[1240px] px-2  mx-auto justify-around sm:flex-row text-center text-white">
     <p className="py-4">
     Copyright © 2024 Euphoria Folks Pvt Ltd. All rights reserved.
     </p>

</div>
     </div>
        </>
    )
}
export default Footer
 
 
