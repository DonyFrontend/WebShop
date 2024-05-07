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

const AccordionFilter = () => {

    return <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h1>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        <h2 className='text-lg'>Gender</h2>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h1>
            <AccordionPanel pb={4} className='flex flex-col'>
                <RadioGroup className='flex flex-col gap-y-2'>
                    <Radio value='1'>Men</Radio>
                    <Radio value='2'>Women</Radio>
                    <Radio value='3'>Unisex</Radio>
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
            <AccordionPanel pb={4} className='flex flex-col'>
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

            <AccordionPanel pb={4} className='flex flex-col'>
                <RadioGroup className='flex flex-col gap-y-2'>
                    <Radio value='1'>Boys</Radio>
                    <Radio value='2'>Girls</Radio>
                </RadioGroup>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
}

export default AccordionFilter;