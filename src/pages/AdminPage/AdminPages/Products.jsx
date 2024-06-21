import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shopTC } from '../../../Slices/getProductsSlice';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';

const Products = () => {
    const { products, isFetch } = useSelector(state => state.getProductsSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shopTC());
    }, [dispatch])

    if (isFetch) {
        return <h1 className='font-semibold text-3xl'>Loading...</h1>
    }

    return <div className='flex flex-col gap-y-6 w-[100%]'>
        <div className='w-[100%] flex justify-between'>
            <div className='flex gap-x-2'>
                <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                <h1 className='font-semibold text-3xl'>Products</h1>
            </div>

            <div>
                <AddProduct/>
            </div>
        </div>

        <div className='grid grid-cols-3 gap-5 auto-rows-auto'>
            {products.length != 0 ? products.map((item, index) => <Link to={`/shop/${item.id}`} key={index}>
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
            </Link>) : <h1 className='font-semibold text-3xl'>Loading...</h1>}
        </div>
    </div>
}

export default Products;