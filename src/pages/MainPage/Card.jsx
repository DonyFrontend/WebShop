import { Card, Stack, Heading, Text, Divider, CardBody, CardFooter } from '@chakra-ui/react'


const MainCard = (props) => {
    console.log('props:', props);
    return (
        <Card maxW='sm'>
            <CardBody>
               
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{props.name}</Heading>
                    <Text fontSize='2xl'>
                        {props.feedBack}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                  {props.date}
            </CardFooter>
        </Card>
    )
}

export default MainCard;