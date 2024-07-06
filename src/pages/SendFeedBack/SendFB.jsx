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
import { useRef } from "react";

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
        if (message != '') {
            dispatch(FeedBackTC({ message }));
            onClose();
        }
    }

    function changeInput(e) {
        setMessage(e.target.value);
        setCount(e.target.value.length);
    }

    const inputRef = useRef();

    return <div>
        <Button onClick={onOpen} colorScheme="purple">Send FeedBack</Button>

        <Modal initialFocusRef={inputRef} isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>FeedBack</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={sendFeedBack} className="flex flex-col gap-y-5">
                    <ModalBody>
                        <h1>You can write a review about the convenience of using our site.</h1>
                        <div>{count}/200</div>
                        <Input ref={inputRef} maxLength={200} value={message} onChange={changeInput} focusBorderColor="purple.500" placeholder="Write your comment..."></Input>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" colorScheme='purple' mr={3}>
                            Send
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Close</Button>
                    </ModalFooter>
                </form>

            </ModalContent>
        </Modal>
    </div >
}

export default SendFB;