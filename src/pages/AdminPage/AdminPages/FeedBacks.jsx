import { useSelector, useDispatch } from 'react-redux';
import { Card, CardHeader, CardBody, Text, Heading, Box, Button } from '@chakra-ui/react';
import { DFeedBackTC } from '../../../Slices/deleteFeedBackTC';
import { getFeedBacks } from '../../../Slices/getFeedBacksTC';
import { addCurrentFeedBackTC } from '../../../Slices/addCurrentFeedBackTC';
import LoadPage from '../../LoadPage/LoadPage';
import { useEffect } from 'react';

const FeedBacks = () => {
    const { feedBacks, isFetch } = useSelector(state => state.getFeedBacksTC);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFeedBacks());
    }, [dispatch])

    if (isFetch) {
        return <div className="flex h-full items-center">
        <LoadPage />
    </div>
    }

    if (feedBacks.length == 0) {
        return <div className='flex gap-x-2'>
            <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
            <h1 className='font-semibold text-3xl'>Apparently, there are no reviews here right now.</h1>
        </div>
    }

    function deleteFeedBack({ id }) {
        dispatch(DFeedBackTC({ id }));
        dispatch(getFeedBacks());
    }

    function addFeedBack(doc) {
        console.log(doc);
        dispatch(addCurrentFeedBackTC(doc));
        dispatch(DFeedBackTC({ id: doc.id }))
        dispatch(getFeedBacks());
    }

    return <div className='flex flex-col gap-y-5'>
        <div className='flex gap-x-2'>
            <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
            <h1 className='font-semibold text-3xl'>FeedBacks</h1>
        </div>

        <div className='flex flex-col gap-y-6 pb-4'>
            {feedBacks.map((item, index) => <Card className='transition-all' _hover={{boxShadow: '0 6px 7px 5px gray', padding: 1}} boxShadow={'0 4px 6px 4px gray'} key={index} >
                <CardHeader>
                    <Heading size='md'>{item.name}</Heading>
                </CardHeader>

                <CardBody>
                    <Box className='flex flex-col gap-y-4'>
                        <Text fontSize='md'>
                            {item.feedBack}
                        </Text>

                        <Text fontSize='sm'>
                            Date: {item.date}
                        </Text>

                        <Box className='flex gap-x-3'>
                            <Button colorScheme='green' onClick={() => addFeedBack(item)}>Add</Button>
                            <Button colorScheme='red' onClick={() => deleteFeedBack({ id: item.id })}>Delete</Button>
                        </Box>
                    </Box>
                </CardBody>
            </Card>)}
        </div>
    </div>
}

export default FeedBacks;