import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormLabel,
    FormControl,
    useDisclosure,
    useToast,
    Box
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import addImage from './AddProductImages/Add.svg'
import removeImage from './AddProductImages/remove.svg';
import { addNewProductTC } from '../../../Slices/addNewProductTC';
import {useDispatch} from 'react-redux';

const ChangeProduct = (product) => {
    const toast = useToast();
    const dispatch = useDispatch();
    const defaultProduct = product.product;
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onSubmit = (data) => {
        const isImagesEmpty = images.find(item => item === '');
        const isCategoriesEmpty = categories.find(item => item === '');
        const isColorsEmpty = colors.find(item => item === '');
        const isSizesEmpty = sizes.find(item => item === '');
        
        if (isImagesEmpty === '' | isCategoriesEmpty === '' | isColorsEmpty === '' | isSizesEmpty === '') {
            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bg='darkviolet'>
                        Please enter data in all inputs!
                    </Box>
                )
            })
        } else {
            dispatch(addNewProductTC({
                title: data.title,
                description: data.description,
                price: data.price,
                categories,
                colors,
                images,
                sizes
            }))

            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bg='darkviolet'>
                        Add product!
                    </Box>
                )
            })

            setCategories(['']);
            setColors(['']);
            setImages(['']);
            setSizes(['']);
            onClose();
        }
    }

    const [title, setTitle] = useState(defaultProduct.title);
    const [desc, setDesc] = useState(defaultProduct.description);
    const [price, setPrice] = useState(defaultProduct.price);

    //inputs functions
    const [images, setImages] = useState(['']);
    const [categories, setCategories] = useState(['']);
    const [colors, setColors] = useState(['']);
    const [sizes, setSizes] = useState(['']);

    useEffect(() => {
        const setDefaultData = () => {
            const imagesData = defaultProduct.images;
            const colorsData = defaultProduct.colors;
            const categoriesData = defaultProduct.categories;
            const sizesData = defaultProduct.sizes;
    
            setImages([...imagesData, '']);
            setCategories([...categoriesData, '']);
            setColors([...colorsData, '']);
            setSizes([...sizesData, '']);
        }
    
        setDefaultData();
    }, [defaultProduct])


    const handleAddInput = ({ data, dataFC }) => {
        const newInputs = [...data, ''];
        dataFC(newInputs);
    };

    const handleRemoveInput = ({ index, data, dataFC }) => {
        const newInputs = [...data];
        newInputs.splice(index, 1)
        dataFC(newInputs);
    };

    const handleChangeInput = ({ index, value, data, dataFC }) => {
        const newInputs = [...data];
        newInputs[index] = value;
        dataFC(newInputs);
    }

    return (
        <>
            <Button colorScheme='purple' onClick={onOpen}>Change</Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior='outside'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form className='flex flex-col gap-y-6' onSubmit={onSubmit}>
                            <FormControl className='flex flex-col gap-y-1'>
                                <FormLabel>Title</FormLabel>
                                <Input  value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' focusBorderColor='purple.500' />
                            </FormControl>

                            <FormControl className='flex flex-col gap-y-1'>
                                <FormLabel>Description</FormLabel>
                                <Input  value={desc} onChange={e => setDesc(e.target.value)} placeholder='Description' focusBorderColor='purple.500' />
                            </FormControl>

                            <FormControl className='flex flex-col gap-y-1'>
                                <FormLabel>Price</FormLabel>
                                <Input type='number' value={price} onChange={e => setPrice(e.target.value)} placeholder='Price' focusBorderColor='purple.500' />
                            </FormControl>

                            <FormControl className='flex flex-col gap-y-3'>
                                <FormLabel>Images (url)</FormLabel>
                                <div className='flex flex-col  gap-y-3'>
                                        {images.map((item, index) => <div key={index} className='flex gap-x-2'>
                                            <Input focusBorderColor='purple.500' placeholder={`Image ${index + 1}`} key={index} value={item} onChange={(e) => handleChangeInput({ index, value: e.target.value, data: images, dataFC: setImages })} />
                                            <Button variant={'ghost'} onClick={() => handleRemoveInput({ data: images, dataFC: setImages, index })}>
                                                <img className='cursor-pointer' src={removeImage}  alt="Error!" />
                                            </Button>
                                        </div>)}
                                </div>

                                <Button className='flex ' onClick={() => handleAddInput({ data: images, dataFC: setImages })}>
                                    <img src={addImage} className='rotate-45' alt="Error!" />
                                </Button>
                            </FormControl>

                            <FormControl className='flex flex-col gap-y-3'>
                                <FormLabel>Categories</FormLabel>
                                <div className='flex flex-col  gap-y-3'>
                                        {categories.map((item, index) => <div key={index} className='flex gap-x-2'>
                                            <Input focusBorderColor='purple.500' placeholder={`Category ${index + 1}`} key={index} value={item} onChange={(e) => handleChangeInput({ index, value: e.target.value, data: categories, dataFC: setCategories })} />
                                            <Button variant={'ghost'} onClick={() => handleRemoveInput({ data: categories, dataFC: setCategories, index })}>
                                                <img className='cursor-pointer' src={removeImage}  alt="Error!" />
                                            </Button>
                                        </div>)}
                                </div>

                                <Button className='flex ' onClick={() => handleAddInput({ data: categories, dataFC: setCategories })}>
                                    <img src={addImage} className='rotate-45' alt="Error!" />
                                </Button>
                            </FormControl>

                            <FormControl className='flex flex-col gap-y-3'>
                                <FormLabel>Colors</FormLabel>
                                <div className='flex flex-col  gap-y-3'>
                                        {colors.map((item, index) => <div key={index} className='flex gap-x-2'>
                                            <Input focusBorderColor='purple.500' placeholder={`Color ${index + 1}`} key={index} value={item} onChange={(e) => handleChangeInput({ index, value: e.target.value, data: colors, dataFC: setColors })} />
                                            <Button variant={'ghost'} onClick={() => handleRemoveInput({ data: colors, dataFC: setColors, index })}>
                                                <img className='cursor-pointer' src={removeImage}  alt="Error!" />
                                            </Button>
                                        </div>)}
                                </div>

                                <Button className='flex ' onClick={() => handleAddInput({ data: colors, dataFC: setColors })}>
                                    <img src={addImage} className='rotate-45' alt="Error!" />
                                </Button>
                            </FormControl>

                            <FormControl className='flex flex-col gap-y-3'>
                                <FormLabel>Sizes</FormLabel>
                                <div className='flex flex-col  gap-y-3'>
                                        {sizes.map((item, index) => <div key={index} className='flex gap-x-2'>
                                            <Input focusBorderColor='purple.500' placeholder={`Size ${index + 1}`} key={index} value={item} onChange={(e) => handleChangeInput({ index, value: e.target.value, data: sizes, dataFC: setSizes })} />
                                            <Button variant={'ghost'} onClick={() => handleRemoveInput({ data: sizes, dataFC: setSizes, index })}>
                                                <img className='cursor-pointer' src={removeImage}  alt="Error!" />
                                            </Button>
                                        </div>)}
                                </div>

                                <Button className='flex ' onClick={() => handleAddInput({ data: sizes, dataFC: setSizes })}>
                                    <img src={addImage} className='rotate-45' alt="Error!" />
                                </Button>
                            </FormControl>


                            <button className='hidden'>add</button>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='purple' mr={3} onClick={onSubmit}>
                            Add
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ChangeProduct;