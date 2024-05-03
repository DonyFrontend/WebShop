import { Card, Image, Stack, Heading, Text, Divider, Button, CardBody, CardFooter } from '@chakra-ui/react'


const MainCard = () => {

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='https://avatars.mds.yandex.net/i?id=3048dae807a2ce634bbc3c6fb2e00ac2ffd370ba-4034663-images-thumbs&n=13'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Show more
                    </Button>
            </CardFooter>
        </Card>
    )
}

export default MainCard;