import { Radio, RadioGroup } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { sortProductsTC } from '../../Slices/getProductsSlice';
import { sortData } from './utils/data';
import { NavLink } from 'react-router-dom';
import navBarIcon from './images/navBarIcon.svg';
import { shopTC } from '../../Slices/getProductsSlice';

const AccordionFilter = () => {
    const dispatch = useDispatch();
    const navBar = sortData.map((item, index) => <div key={index}>
        <NavLink className='flex justify-between'>
            <p className='text-[#807D7E] font-semibold'>{item}</p>
            <img src={navBarIcon} alt="Error!" />
        </NavLink>
    </div>)

    return <div className='flex flex-col gap-y-5'>
        <div className='flex flex-col gap-y-4'>{navBar}</div>

        <Accordion allowMultiple>
            <AccordionItem>
                <h1>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            <h2 className='text-lg'>Gender</h2>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h1>
                <AccordionPanel className='flex flex-col'>
                    <RadioGroup className='flex flex-col gap-y-2'>
                        <Radio value='1' onClick={() => dispatch(sortProductsTC('Men'))}>Men</Radio>
                        <Radio value='2' onClick={() => dispatch(sortProductsTC('Women'))}>Women</Radio>
                        <Radio value='3' onClick={() => dispatch(sortProductsTC('Unisex'))}>Unisex</Radio>
                        <Radio value='4' onClick={() => dispatch(shopTC())}>All</Radio>
                    </RadioGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h1>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            <h2 className='text-lg'>Color</h2>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h1>
                <AccordionPanel className='flex flex-col'>
                    <CheckboxGroup>
                        <Checkbox>Black</Checkbox>
                        <Checkbox>Blue</Checkbox>
                        <Checkbox>Brown</Checkbox>
                        <Checkbox>Green</Checkbox>
                        <Checkbox>Grey</Checkbox>
                        <Checkbox>Orange</Checkbox>
                        <Checkbox>Pink</Checkbox>
                        <Checkbox>Purple</Checkbox>
                        <Checkbox>Red</Checkbox>
                        <Checkbox>White</Checkbox>
                        <Checkbox>Yellow</Checkbox>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h1>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            <h2 className='text-lg'>Kids</h2>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h1>

                <AccordionPanel className='flex flex-col'>
                    <RadioGroup className='flex flex-col gap-y-2'>
                        <Radio value='1'>Boys</Radio>
                        <Radio value='2'>Girls</Radio>
                    </RadioGroup>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </div>
}

export default AccordionFilter;