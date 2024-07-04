import { useRef, useState } from 'react';
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

const UserModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();
    const toast = useToast();

    const [town, setTown] = useState('Bishkek');
    const [name, setName] = useState('');

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    function changeData(e) {
        e.preventDefault();
        toast({
            position: 'bottom-left',
            render: () => (
                <Box color='white' p={3} bg='darkviolet'>
                    {name === '' || town === '' ? 'The data cannot be empty' : 'Data changed!'}
                </Box>
            ),
        })
        if (!(town === '' || name === '')) {
            dispatch(changeUserDataTC({ name, town }));
            dispatch(getUserTC());        
            onClose();
        }
    }


    return (
        <>
            <Button onClick={onOpen} colorScheme='purple'>Change Data</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change your account</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={changeData}>

                    <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input value={name} onChange={e => setName(e.target.value)} focusBorderColor='purple.500' ref={initialRef} maxLength={7} placeholder='Name' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>City</FormLabel>
                                <select onChange={e => setTown(e.target.value)} className="p-2 w-80 md:w-96 lg:w-[100%] border-[1px] rounded-md lg:p-3 border-[#3C4242]">
                                    <option value='Bishkek'>Bishkek</option>
                                    <option value='Kara-Balta'>Kara-Balta</option>
                                    <option value='Osh'>Osh</option>
                                    <option value="Talas">Talas</option>
                                    <option value="Karakol">Karakol</option>
                                </select>
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