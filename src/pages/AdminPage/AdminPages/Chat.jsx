import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getAllUsersTC } from '../../../Slices/getAllUsersSlice';
import { Box, Button, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { deleteChatTC } from '../../../Slices/deleteChatTC';
import { Link } from 'react-router-dom';
import LoadPage from '../../LoadPage/LoadPage';

const Chat = () => {
    const { users, isFetch } = useSelector(state => state.getAllUsersSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersTC());
    }, [dispatch])

    if (isFetch) {
        return <div className="flex h-full items-center">
        <LoadPage />
    </div>
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

    return <div className='flex flex-col gap-y-5'>
        <div className='flex gap-x-2'>
            <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
            <h1 className='font-semibold text-3xl'>Chats</h1>
        </div>

        <div>
            {users.map((item, index) => item.chat[0] === undefined ? '' : <Card className='transition-all' _hover={{boxShadow: '0 6px 7px 5px gray', padding: 1}} boxShadow={'0 4px 6px 4px gray'} key={index} >
                <CardHeader>
                    <Heading size='md'>{item.name}</Heading>
                </CardHeader>

                <CardBody>
                    <Box className='flex flex-col gap-y-3'>
                        {item.chat ? item.chat.map((chatItem, index) => <Text key={index} fontSize='md'>
                            {chatItem.message}
                        </Text>) : ''}

                        <Box className='flex gap-x-3'>
                            <Link to={item.id}>
                                <Button colorScheme='green'>Go to chat</Button>
                            </Link>
                            <Button colorScheme='red' onClick={() => deleteChat(item.id)}>Delete chat</Button>
                        </Box>
                    </Box>
                </CardBody>
            </Card>)}
        </div>
    </div>
}

export default Chat;