import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getAllUsersTC } from '../../../Slices/getAllUsersSlice';
import { Box, Button, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { deleteChatTC } from '../../../Slices/deleteChatTC';

const Chat = () => {
    const { users, isFetch } = useSelector(state => state.getAllUsersSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersTC());
    }, [dispatch])

    if (isFetch) {
        return <h1 className='font-semibold text-3xl'>Loading...</h1>
    }

    const findChats = users.filter(item => item.chat[0]);

    if (findChats == false) {
        return <div className='flex gap-x-2'>
        <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
        <h1 className='font-semibold text-3xl'>Apparently, there are no new messages here right now.</h1>
    </div>
    }

    function deleteChat(id) {
        dispatch(deleteChatTC(id));
        dispatch(getAllUsersTC());
    }

    return <div>
        {users.map((item, index) => item.chat[0] === undefined ? '' : <Card key={index} >
            <CardHeader>
                <Heading size='md'>{item.name}</Heading>
            </CardHeader>

            <CardBody>
                <Box className='flex flex-col gap-y-7'>
                    {item.chat ? item.chat.map((item, index) => <Text key={index} fontSize='md'>
                        {item}
                    </Text>) : ''}

                    <Box className='flex gap-x-3'>
                        <Button colorScheme='green'>Go to chat</Button>
                        <Button colorScheme='red' onClick={() => deleteChat(item.id)}>Delete chat</Button>
                    </Box>
                </Box>
            </CardBody>
        </Card>)}
    </div>
}

export default Chat;