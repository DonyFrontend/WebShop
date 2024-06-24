import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findUserTC } from "../../../Slices/findUserSlice";
import { useEffect, useState } from "react";
import { Box, Button, FormControl, Input, useToast } from "@chakra-ui/react";
import sendButton from '../images/sendButton.svg';
import { addAdminMessageTC } from "../../../Slices/addAdminMessageTC";
import LoadPage from "../../LoadPage/LoadPage";

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
        return <div className="flex h-full items-center">
            <LoadPage />
        </div>
    }

    function addAdminMessage(e) {
        e.preventDefault();
        if (message != 0) {
            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bg='darkviolet'>
                        Message send!
                    </Box>
                ),
            })
            dispatch(addAdminMessageTC({ id: user.id, message }));
            setMessage('');
            dispatch(findUserTC(params.id));
        }
        dispatch(findUserTC(params.id));
    }

    return <div className="flex flex-col justify-between h-[91.4vh]">
        <div className="flex flex-col gap-y-3 h-[700px] overflow-y-scroll">
            {user.chat.map((item, index) => <div key={index} className='bg-gray-200 rounded-md p-2 flex flex-col gap-y-2'>
                <h1 className='font-medium'>{item.name == 'You' ? user.name : item.name}:</h1>
                <p>{item.message}</p>
            </div>)}
        </div>

        <form onSubmit={addAdminMessage} className='flex gap-x-1 p-2'>
            <FormControl>
                <Input maxLength={200} value={message} onChange={e => setMessage(e.target.value)} placeholder='Type message...' focusBorderColor='purple.500'></Input>
            </FormControl>
            <Button colorScheme='purple' mr={3}>
                <img width={25} src={sendButton} alt="Error!" />
            </Button>
        </form>
    </div>
}

export default ChatWithUser;