import { useForm } from 'react-hook-form';
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
    useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react';

const AddProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit
    } = useForm({ mode: 'onBlur' })
    const initialRef = useRef();
    const finalRef = useRef();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <Button colorScheme='purple' onClick={onOpen}>Add product</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input {...register('title', { required: true })} ref={initialRef} placeholder='First name' />
                                {errors.title && <p>Input cannot be empty!</p>}
                            </FormControl>

                            <button>add</button>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Button colorScheme='blue' mr={3}>
                                Save
                            </Button>
                        </form>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddProduct;