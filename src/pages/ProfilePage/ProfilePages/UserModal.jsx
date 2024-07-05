import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Box
} from '@chakra-ui/react';
import { changeUserDataTC } from '../../../Slices/changeUserDataTC';
import { getUserTC } from '../../../Slices/getThisUserTC';
import {useForm} from 'react-hook-form';

const UserModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const toast = useToast();

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset
    } = useForm({mode: 'onBlur'});

    useEffect(() => {
        reset({
            name: '',
            town: 'Bishkek'
        })
        dispatch(getUserTC());
    }, [reset, dispatch])

    const onSubmit = (data) => {
        console.log(data);
        if (!(data.town === '' || data.name === '')) {
            dispatch(changeUserDataTC(data));
            dispatch(getUserTC());
            onClose();
        }
        toast({
            position: 'bottom-left',
            render: () => (
                <Box color='white' p={3} bg='darkviolet'>
                    {data.name === '' || data.town === '' ? 'The data cannot be empty' : 'Data changed!'}
                </Box>
            ),
        })
    }


    return (
        <>
            <Button onClick={onOpen} colorScheme='purple'>Change Data</Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change your account</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input maxLength={10} {...register('name', {required: true})} focusBorderColor='purple.500' placeholder='Name' />
                                {errors.name && <h1 className='text-red-500'>Required</h1>}
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>City</FormLabel>
                                <select {...register('town', {required: true})} className="p-2 w-80 md:w-96 lg:w-[100%] border-[1px] rounded-md lg:p-3 border-[#3C4242]">
                                    <option value='Bishkek'>Bishkek</option>
                                    <option value='Kara-Balta'>Kara-Balta</option>
                                    <option value='Osh'>Osh</option>
                                    <option value="Talas">Talas</option>
                                    <option value="Karakol">Karakol</option>
                                </select>
                                {errors.town && <h1 className='text-red-500'>Required</h1>}
                            </FormControl>
                    </ModalBody>

                    <ModalFooter>
                            <Button type='submit' colorScheme='purple' mr={3}>
                                Save
                            </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                    </form>
                </ModalContent>
            </Modal></>
    )
}

export default UserModal;