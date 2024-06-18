import { Box, Button, Input } from '@chakra-ui/react';
import buttonImage from './images/button.svg';
import { useState } from 'react';
import closeButton from './images/closeButton.svg';
import sendButton from './images/sendButton.svg';
import { useSelector } from 'react-redux';
import { addChatTC } from '../../Slices/addChatTC';
import { useDispatch } from 'react-redux';
import { getUserTC } from '../../Slices/getThisUserTC';
import { useToast } from '@chakra-ui/react';

const ChatPage = () => {
    const toast = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    const [customMessage, setCustomMessage] = useState(false);

    const { user } = useSelector(state => state.getThisUserTC);

    const dispatch = useDispatch();

    if (!user.email) return '';

    function onChangeStateIsOpen() {
        setIsOpen(!isOpen);
        dispatch(getUserTC());
    }

    function onChangeStateInput(e) {
        setMessage(e.target.value);
        setCount(e.target.value.length);
    }

    function addMessage() {
        toast({
            position: 'bottom-left',
            render: () => (
                <Box color='white' p={3} bg='darkviolet'>
                    {message == 0 ? 'The message cannot be empty' : 'Message send!'}
                </Box>
            ),
        })
        if (message != 0) {
            dispatch(addChatTC({ message, name: 'You' }));
            dispatch(getUserTC());
            setMessage('');
            setCustomMessage(true);
            setCount(0);
        }
    }

    return <div className='fixed right-7 bottom-14'>
        <Button height={'52px'} width={'52px'} borderRadius={'100%'} onClick={onChangeStateIsOpen} colorScheme='purple'>
            {isOpen ? <img src={closeButton} alt='Error!' /> : <img src={buttonImage} alt="Error!" />}
        </Button>

        {isOpen ? <div className='fixed w-[25%] h-[60%] flex flex-col justify-between right-7 bottom-44 bg-white rounded-xl' style={{ boxShadow: '0px 1px 4px 1px gray' }}>

            <div className='flex items-center justify-between bg-purple-500 rounded-t-xl p-1 px-2'>
                <h1 className='text-white text-lg font-semibold'>Clothe Net Support</h1>
                <Button colorScheme='purple.500' onClick={onChangeStateIsOpen}><img src={closeButton} alt="Error!" /></Button>
            </div>
            <div className='h-[290px] p-2 flex flex-col gap-y-2 overflow-y-scroll'>
                <div className='bg-gray-200 rounded-md p-2'>
                    <p>Hello! How i can help you ?</p>
                </div>

                {customMessage ? <div className='bg-gray-200 rounded-md p-2'>
                    <p>Your question is being processed, and it may take some time. Thank you for understanding!</p>
                </div> : ''}

                {user.chat ? user.chat.map((item, index) => <div key={index} className='bg-gray-200 rounded-md p-2 flex flex-col gap-y-2'>
                    <h1 className='font-medium'>{item.name}:</h1>
                    <p>{item.message}</p>
                </div>) : ''}
            </div>
            <div className='flex gap-x-1 p-2'>
                <Input maxLength={200} value={message} onChange={e => onChangeStateInput(e)} placeholder='Type message...' focusBorderColor='purple.500'></Input>
                    <Button colorScheme='purple' mr={3}
                        onClick={addMessage}
                    >
                        <img width={40} src={sendButton} alt="Error!" />
                    </Button>
            </div>

            <div className='px-2'>{count}/200</div>
        </div> : ''}
    </div>
}

export default ChatPage;