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
    const {onOpen, onClose, isOpen} = useDisclosure();
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.getThisUserTC);

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
                    <div onClick={sendFeedBack}>
                        <Button colorScheme='purple' mr={3}
                            onClick={() => 
                                toast({
                                position: 'bottom-left',
                                render: () => (
                                    <Box color='white' p={3} bg='darkviolet'>
                                    {user.name ? 'Thanks for leaving a review!' : 'Please log in or sign up!'}
                                    </Box>
                                ),
                                })
                            }
                            onClickCapture={onClose}>
                            Send
                        </Button>
                    </div>
                    <Button variant='ghost' onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
}

export default SendFB;