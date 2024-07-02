import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/accordion"
import { Box } from "@chakra-ui/react";
import LinkedIn from './footerImages/LinkedIn.svg';
import Twitter from './footerImages/Twitter.svg';
import Instagram from './footerImages/Instagram.svg';
import Facebook from './footerImages/FaceBook.svg';

const sections = [
    {
        title: 'Need Help',
        items: ['Contact Us', 'Track Order', 'Returns & Refunds', 'Chat with us', 'Career']
    },
    {
        title: 'Company',
        items: ['About Us', 'euphoria Blog', 'euphorlastan', 'Collaboration', 'Media']
    },
    {
        title: 'More Info',
        items: ['Term and Conditions', 'Privacy Policy', 'Shipping policy', 'Sitemap']
    },
    {
        title: 'Location',
        items: ['support @ euphoria.in', 'Eklingpura Cbouraha', 'Ahmedabad Main Road', '(NH8-Near Mahadev Hotel) Udalpur,India-313002']
    },

]

const Footer = () => {
    return (
        <>
            <div className="w-full bg-[rgba(60,66,66,1)] text-white py-y px-2">
                <div className=" md:grid-cols-2 text-center lg:text-left max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-4 py-16 ">
                    {
                        sections.map((section, index) => (
                            <div key={index}>
                                <h6 className="font-bold text-xl lg:text-base md:text-xl lg:pt-0 uppercase pt-5 pb-3 lg:pb-6">
                                    {section.title}
                                </h6>
                                <ul className=" text-lg lg:text-base md:text-lg">
                                    {section.items.map((item, i) => (
                                        <li key={i}
                                            className="py-1  text-white cursor-pointer">
                                            {item}

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }

                    <div className="flex justify-center lg:justify-start left-28 pt-20">
                        <div className="text-center grid grid-cols-2 gap-3 md:grid-cols-4 gap-y-2.5 lg:gap-y-0 lg:grid-cols-4 text-xl text-white md-2">
                            <img src={Facebook} alt="Error!" />
                            <img src={Instagram} alt="Error!" />
                            <img src={Twitter} alt="Error!" />
                            <img src={LinkedIn} alt="Error!" />
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
                    <p className="py-4 lg:text-base text-xl md:text-2xl">
                        Copyright © 2024 Euphoria Folks Pvt Ltd. All rights reserved.
                    </p>

                </div>
            </div>
        </>
    )
}
export default Footer


