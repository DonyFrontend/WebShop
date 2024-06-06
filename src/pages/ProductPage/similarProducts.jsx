import { Link } from "react-router-dom";

function SimilarProducts(props) {
    return (
        props.products.map((item, index) => <Link to={`/shop/${item.id}`} key={index}>
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
        </Link>)
    )
}

export default SimilarProducts;