import { Box, Button, Input } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast
} from '@chakra-ui/react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FeedBackTC } from "../../Slices/sendFeedBackTC";
import { useSelector } from "react-redux";

const SendFB = () => {
    const toast = useToast();
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [message, setMessage] = useState('');
    const [count, setCount] = useState(message.length);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.getThisUserTC);

    function sendFeedBack(e) {
        e.preventDefault();
        toast({
            position: 'bottom-left',
            render: () => (
                <Box color='white' p={3} bg='darkviolet'>
                    {user.name ? message == 0 ? 'The review cannot be empty' : 'Thanks for leaving a review!' : 'Please log in or sign up!'}
                </Box>
            )
        })
        if(message != '') {
            dispatch(FeedBackTC({ message }));
            onClose();
        }
    }

    function changeInput(e) {
        setMessage(e.target.value);
        setCount(e.target.value.length);
    }

    return <div>
        <Button onClick={onOpen} colorScheme="purple">Send FeedBack</Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>FeedBack</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={sendFeedBack} className="flex flex-col gap-y-5">
                        <h1>You can write a review about the convenience of using our site.</h1>
                        <div>{count}/200</div>
                        <Input maxLength={200} value={message} onChange={changeInput} focusBorderColor="purple.500" placeholder="Write your comment..."></Input>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <form onSubmit={sendFeedBack}>
                        <Button colorScheme='purple' mr={3}>
                            Send
                        </Button>
                    </form>
                <Button variant='ghost' onClick={onClose}>Close</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    </div >
}

export default SendFB;