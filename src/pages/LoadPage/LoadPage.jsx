import { Spinner } from "@chakra-ui/react";

const LoadPage = () => {

    return (
        <div className="w-[100%] max-h-max flex justify-center items-center">
            <Spinner
                thickness='3px'
                speed='0.65s'
                emptyColor='gray.200'
                color='purple.500'
                size='xl'
            />
        </div>
    )
}

export default LoadPage