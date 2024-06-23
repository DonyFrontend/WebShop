import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormLabel,
    Input,
    FormControl,
    Box,
} from '@chakra-ui/react';
import CloseImage from './AddProductImages/Add.svg';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addNewProductTC } from '../../../Slices/addNewProductTC';

const AddProduct = () => {
    const dispatch = useDispatch();

    const { isOpen, onClose, onOpen } = useDisclosure();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState('');
    const [colorsCount, setColorsCount] = useState([1]);
    const [imagesCount, setImagesCount] = useState([1]);
    const [sizesCount, setSizesCount] = useState([1]);
    const [categoriesCount, setCategoriesCount] = useState([1]);

    let colorsArray = [];
    let imagesArray = [];
    let sizesArray = [];
    let categoriesArray = [];


    function setLength(array1, array2) {
        array1.length = array2.length;
    }

    setLength(colorsArray, colorsCount);
    setLength(imagesArray, imagesCount);
    setLength(sizesArray, sizesCount);
    setLength(categoriesArray, categoriesCount);

    function onChangeCounts({ item, itemFC, count }) {
        itemFC([...item, item.length + 1]);
        setLength(count, item);
    }

    function onChangeArray(array1, item, data) {
        array1[item] = data;
    }

    function log() {
        console.log(colorsArray);
        console.log(imagesArray);
        console.log(sizesArray);
        console.log(categoriesArray);
    }

    function addProduct() {
        // const colorsFound = colorsArray.find(item => item == false | undefined)
        // const imagesFound = imagesArray.find(item => item == false | undefined)
        // const sizesFound = sizesArray.find(item => item == false | undefined)
        // const categoriesFound = categoriesArray.find(item => item == false | undefined)

        // if (colorsFound & imagesFound & sizesFound & categoriesFound & title & price & desc) {
            
        // }

        dispatch(addNewProductTC({product: {
            categories: categoriesArray,
            colors: colorsArray,
            description: desc,
            images: imagesArray,
            price,
            sizes: sizesArray,
            title
        }}))

        onClose();
    }

    return <div>
        <Button colorScheme='purple' onClick={onOpen}>Add new product</Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add product</ModalHeader>
                <ModalCloseButton />
                <ModalBody className='flex flex-col gap-y-3'>
                    <Box>
                        <FormControl isRequired>
                            <FormLabel>Title</FormLabel>
                            <Input required value={title} onChange={e => setTitle(e.target.value)} focusBorderColor='purple.500' placeholder='Title' />
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl isRequired>
                            <FormLabel>Description</FormLabel>
                            <Input required value={desc} onChange={e => setDesc(e.target.value)} focusBorderColor='purple.500' placeholder='Description' />
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl isRequired>
                            <FormLabel>Price</FormLabel>
                            <Input required value={price} onChange={e => setPrice(e.target.value)} focusBorderColor='purple.500' placeholder='Price' />
                        </FormControl>
                    </Box>

                    <Box className='flex flex-col gap-y-2 items-start'>
                        <FormControl isRequired>
                            <FormLabel>Colors</FormLabel>
                            <div className='flex flex-col gap-y-3'>
                                {colorsCount.map((item, index) => <Input name={index} onChange={e => onChangeArray(colorsArray, e.target.name, e.target.value)} required key={index} focusBorderColor='purple.500' placeholder='Color' />)}
                            </div>
                        </FormControl>
                        <Button variant='ghost' onClick={() => onChangeCounts({ item: colorsCount, itemFC: setColorsCount, count: colorsArray })}>
                            <img src={CloseImage} alt="Error!" className='rotate-45'/>
                        </Button>
                    </Box>
                    
                    <Box className='flex flex-col gap-y-2 items-start'>
                        <FormControl isRequired>
                            <FormLabel>Images (url)</FormLabel>
                            <div className='flex flex-col gap-y-3'>
                                {imagesCount.map((item, index) => <Input onChange={e => onChangeArray(imagesArray, e.target.name, e.target.value)} name={index} required key={index} focusBorderColor='purple.500' placeholder='Image' />)}
                            </div>
                        </FormControl>
                        <Button variant='ghost' onClick={() => onChangeCounts({ item: imagesCount, itemFC: setImagesCount, count: imagesArray })}>
                            <img src={CloseImage} alt="Error!" className='rotate-45' />
                        </Button>
                    </Box>

                    <Box className='flex flex-col gap-y-2 items-start'>
                        <FormControl isRequired>
                            <FormLabel>Sizes</FormLabel>
                            <div className='flex flex-col gap-y-3'>
                                {sizesCount.map((item, index) => <Input onChange={e => onChangeArray(sizesArray, e.target.name, e.target.value)} name={index} required key={index} focusBorderColor='purple.500' placeholder='Size' />)}
                            </div>
                        </FormControl>
                        <Button variant='ghost' onClick={() => onChangeCounts({ item: sizesCount, itemFC: setSizesCount, count: sizesArray})}>
                            <img src={CloseImage} alt="Error!" className='rotate-45' />
                        </Button>
                    </Box>

                    <Box className='flex flex-col gap-y-2 items-start'>
                        <FormControl isRequired>
                            <FormLabel>Categories</FormLabel>
                            <div className='flex flex-col gap-y-3'>
                                {categoriesCount.map((item, index) => <Input onChange={e => onChangeArray(categoriesArray, e.target.name, e.target.value)} name={index} required key={index} focusBorderColor='purple.500' placeholder='Category' />)}
                            </div>
                        </FormControl>
                        <Button variant='ghost' onClick={() => onChangeCounts({ item: categoriesCount, itemFC: setCategoriesCount, count: categoriesArray })}>
                            <img src={CloseImage} alt="Error!" className='rotate-45' />
                        </Button>
                    </Box>

                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='purple' mr={3} onClick={addProduct}>
                        Add
                    </Button>
                    <Button colorScheme='purple' mr={3} onClick={log}>
                        log
                    </Button>
                    <Button variant='ghost'>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
}

export default AddProduct;