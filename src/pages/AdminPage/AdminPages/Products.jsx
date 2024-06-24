import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shopTC } from '../../../Slices/getProductsSlice';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import { Button, Spinner } from '@chakra-ui/react';
import { deleteProductTC } from '../../../Slices/deleteProductTC';
import LoadPage from '../../LoadPage/LoadPage';

const Products = () => {
    const { products, isFetch } = useSelector(state => state.getProductsSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shopTC());
    }, [dispatch])

    if (isFetch) {
        return <div className="flex h-full items-center">
            <LoadPage />
        </div>
    }

    function deleteProduct(id) {
        dispatch(deleteProductTC(id));
        dispatch(shopTC());
    }

    return <div className='flex flex-col gap-y-6 w-[100%]'>
        <div className='w-[100%] flex justify-between'>
            <div className='flex gap-x-2'>
                <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                <h1 className='font-semibold text-3xl'>Products</h1>
            </div>

            <div>
                <AddProduct />
            </div>
        </div>

        <div className='grid grid-cols-3 gap-11 auto-rows-auto'>
            {products.length != 0 ? products.map((item, index) => <div key={index} className='flex flex-col gap-y-3 h-[100%] justify-between'><Link to={`/shop/${item.id}`}>
                <div className='flex flex-col h-[100%] justify-between'>
                    <div>
                        <img src={item.images[0]} alt="Error!" />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <h2 className='font-medium text-xl'>{item.title}</h2>
                        <div className='flex gap-1 text-lg'>{item.categories.map((item, index) => <p key={index} className='text-gray-600'>{item}/</p>)}</div>
                        <p className='text-lg text-gray-600'>{item.colors.length} Colors</p>
                        <p className='font-medium text-base'>Price: ${item.price}</p>
                    </div>
                </div>
            </Link>
                <div className='flex gap-x-2'>
                    <Button colorScheme='purple'>Change</Button>
                    <Button colorScheme='red' onClick={() => deleteProduct(item.id)}>Delete</Button>
                </div>
            </div>) : <div className='col-start-2 justify-self-center self-center row-start-2'><Spinner
                thickness='3px'
                speed='0.65s'
                emptyColor='gray.200'
                color='purple.500'
                size='xl'
            /></div>}
        </div>
    </div>
}

export default Products;