import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import SignOut from './Images/signOut.svg';
import { SignOutUserTC } from '../../Slices/SignOutUserTC';
import { useDispatch } from 'react-redux';

const ProfileModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    function postData() {
        dispatch(SignOutUserTC());
    }

    return (
        <>
            <div className="flex gap-x-3 p-1 cursor-pointer" onClick={onOpen}>
                <img src={SignOut} alt="Error!" />
                <p>Sign out</p>
            </div>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign out from account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you sure you want to exit ?
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {onClose, postData()}}>
                            Exit
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfileModal;