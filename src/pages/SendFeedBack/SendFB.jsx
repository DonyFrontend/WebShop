import { Button, Input } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FeedBackTC } from "../../Slices/sendFeedBackTC";

const SendFB = () => {
    const {onOpen, onClose, isOpen} = useDisclosure();
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    function sendFeedBack() {
        dispatch(FeedBackTC({message}));
    }

    return <div>
        <Button onClick={onOpen} colorScheme="purple">Send FeedBack</Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>FeedBack</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="flex flex-col gap-y-5">
                        <h1>You can write a review about the convenience of using our site.</h1>
                        <Input value={message} onChange={e => setMessage(e.target.value)} focusBorderColor="purple.500" placeholder="Write your comment..."></Input>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='purple' mr={3} onClick={sendFeedBack} onClickCapture={onClose}>
                        Send
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
}

export default SendFB;