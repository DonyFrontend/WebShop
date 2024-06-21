import { useSelector, useDispatch } from 'react-redux';
import { Card, CardHeader, CardBody, Text, Heading, Box, Button } from '@chakra-ui/react';
import { DFeedBackTC } from '../../../Slices/deleteFeedBackTC';
import { getFeedBacks } from '../../../Slices/getFeedBacksTC';
import { addCurrentFeedBackTC } from '../../../Slices/addCurrentFeedBackTC';

const FeedBacks = () => {
    const { feedBacks, isFetch } = useSelector(state => state.getFeedBacksTC);
    const dispatch = useDispatch();

    if (isFetch) {
        return <h1 className='font-semibold text-3xl'>Loading...</h1>
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

    return <div>
        <div className='flex gap-x-2'>
            <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
            <h1 className='font-semibold text-3xl'>FeedBacks</h1>
        </div>

        <div className='flex flex-col gap-y-5'>
            {feedBacks.map((item, index) => <Card key={index} >
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