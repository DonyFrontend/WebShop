import { Radio, RadioGroup } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { sortProductsFromGenderTC, sortProductsTC } from '../../Slices/getProductsSlice';
import navBarIcon from './images/navBarIcon.svg';
import { shopTC } from '../../Slices/getProductsSlice';
import {store} from '../../Store/Store';
import { allGenderTC } from '../../Slices/getProductsSlice';

const AccordionFilter = () => {
    const dispatch = useDispatch();

    const state = store.getState().getProductsSlice.saveProducts;
    console.log(state);

    return <div className='flex flex-col gap-y-5'>
        <div className='flex flex-col gap-y-4'>
            <div>
                <div onClick={() => dispatch(sortProductsTC({category: 'categories', data: 'Shoe'}))} className='flex justify-between cursor-pointer'>
                    <p className='text-[#807D7E] font-semibold'>Shoes</p>
                    <img src={navBarIcon} alt="Error!" />
                </div>
            </div>
            <div>
                <div onClick={() => dispatch(sortProductsTC({category: 'categories', data: 'Shorts'}))} className='flex justify-between cursor-pointer'>
                    <p className='text-[#807D7E] font-semibold'>Shorts</p>
                    <img src={navBarIcon} alt="Error!" />
                </div>
            </div>
            <div>
                <div onClick={() => dispatch(sortProductsTC({category: 'categories', data: 'Pants'}))} className='flex justify-between cursor-pointer'>
                    <p className='text-[#807D7E] font-semibold'>Pants</p>
                    <img src={navBarIcon} alt="Error!" />
                </div>
            </div>
            <div>
                <div onClick={() => dispatch(sortProductsTC({category: 'categories', data: 'Jacket'}))} className='flex justify-between cursor-pointer'>
                    <p className='text-[#807D7E] font-semibold'>Jackets</p>
                    <img src={navBarIcon} alt="Error!" />
                </div>
            </div>
            <div>
                <div onClick={() => dispatch(sortProductsTC({category: 'categories', data: 'Socks'}))} className='flex justify-between cursor-pointer'>
                    <p className='text-[#807D7E] font-semibold'>Socks</p>
                    <img src={navBarIcon} alt="Error!" />
                </div>
            </div>
            <div>
                <div onClick={() => dispatch(shopTC())} className='flex justify-between cursor-pointer'>
                    <p className='text-[#807D7E] font-semibold'>All</p>
                    <img src={navBarIcon} alt="Error!" />
                </div>
            </div>
        </div>

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
                        <Radio value='1' onClick={() => dispatch(sortProductsFromGenderTC({data: 'Men', products: state}))}>Men</Radio>
                        <Radio value='2' onClick={() => dispatch(sortProductsFromGenderTC({data: 'Women', products: state}))}>Women</Radio>
                        <Radio value='3' onClick={() => dispatch(sortProductsFromGenderTC({data: 'Unisex', products: state}))}>Unisex</Radio>
                        <Radio value='4' onClick={() => dispatch(allGenderTC(state))}>All</Radio>
                    </RadioGroup>
                </AccordionPanel>
            </AccordionItem>

            {/* <AccordionItem>
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
                        <Checkbox value={'Black'}>Black</Checkbox>
                        <Checkbox value={'Blue'}>Blue</Checkbox>
                        <Checkbox value={'Brown'}>Brown</Checkbox>
                        <Checkbox value={'Green'}>Green</Checkbox>
                        <Checkbox value={'Gray'}>Gray</Checkbox>
                        <Checkbox value={'Orange'}>Orange</Checkbox>
                        <Checkbox value={'Pink'}>Pink</Checkbox>
                        <Checkbox value={'Purple'}>Purple</Checkbox>
                        <Checkbox value={'Red'}>Red</Checkbox>
                        <Checkbox value={'White'}>White</Checkbox>
                        <Checkbox value={'Yellow'}>Yellow</Checkbox>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem> */}
        </Accordion>
    </div>
}

export default AccordionFilter;