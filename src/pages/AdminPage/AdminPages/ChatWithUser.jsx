import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findUserTC } from "../../../Slices/findUserSlice";
import { useEffect, useState } from "react";
import { Box, Button, Input, useToast } from "@chakra-ui/react";
import sendButton from '../images/sendButton.svg';
import { addAdminMessageTC } from "../../../Slices/addAdminMessageTC";

const ChatWithUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { user, isFetch } = useSelector(state => state.findUserSlice);
    const toast = useToast();

    const [message, setMessage] = useState('');

    useEffect(() => {
        dispatch(findUserTC(params.id));
    }, [params.id, dispatch])

    if (isFetch) {
        return <h1 className='font-semibold text-3xl'>Loading...</h1>
    }

    function addAdminMessage() {
        if (message != 0) {
            dispatch(addAdminMessageTC({id: user.id, message}));
            setMessage('');
            dispatch(findUserTC(params.id));
        }
    }

    return <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-y-3 h-96 overflow-y-scroll">
            {user.chat.map((item, index) => <div key={index} className='bg-gray-200 rounded-md p-2 flex flex-col gap-y-2'>
                <h1 className='font-medium'>{item.name == 'You' ? user.name : item.name}:</h1>
                <p>{item.message}</p>
            </div>)}
        </div>

        <div className='flex gap-x-1 p-2'>
            <Input maxLength={200} value={message} onChange={e => setMessage(e.target.value)} placeholder='Type message...' focusBorderColor='purple.500'></Input>
            <div onClick={addAdminMessage}>
                <Button colorScheme='purple' mr={3}
                    onClick={() => {
                        toast({
                            position: 'bottom-left',
                            render: () => (
                                <Box color='white' p={3} bg='darkviolet'>
                                    {message == 0 ? 'The message cannot be empty' : 'Message send!'}
                                </Box>
                            ),
                        }),
                        addAdminMessage
                    }
                    }
                >
                    <img width={25} src={sendButton} alt="Error!" />
                </Button>
            </div>
        </div>
    </div>
}

export default ChatWithUser;