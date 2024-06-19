import { Link } from 'react-router-dom';

function Error() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col justify-center items-center space-y-5 p-4">
                <div className="relative w-full max-w-md h-64 mt-4 flex justify-center">
                    <img className="rounded-bl-[100px] max-w-md w-[181px] h-64 relative top-4" src="https://atriumshop.cz/wp-content/uploads/2018/12/jon-ly-Xn7GvimQrk8-unsplash-768x1024.jpg" alt="404" />
                    <h1 className="font-mono text-[rgba(42,47,47,1)] absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-8xl sm:text-[150px] md:text-[200px]">4</h1>
                    <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-[130px] md:text-[170px] font-bold">0</h1>
                    <h1 className="font-mono rotate-[20deg] text-[rgba(42,47,47,1)] absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 font-bold text-8xl sm:text-[150px] md:text-[200px]">4</h1>
                </div>

                <h3 className="font-bold text-2xl sm:text-3xl text-center">Oops! Page not found</h3>
                <p className="text-center text-[rgba(128,125,126,1)]">The page you are looking for might have been removed or <br />temporarily unavailable.</p>

                <div className="flex justify-center">
                    <Link to={'/shop'} className="w-40 sm:w-60 p-2 bg-[rgba(138,51,253,1)] hover:bg-[#6f47a4] text-white rounded-md text-center">Back to HomePage</Link>
                </div>
            </div>
        </>
    );
}

export default Error;
