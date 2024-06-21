import React from "react";
import { Link } from "react-router-dom";
function Error() {

    return(
        <>

 <div className="w-screen h-screen flex flex-col justify-center items-center space-y-5">
<div className="max-w-md w-[181px] h-64 relative top-4"> 

<img className="rounded-bl-[100px]" src="https://atriumshop.cz/wp-content/uploads/2018/12/jon-ly-Xn7GvimQrk8-unsplash-768x1024.jpg" alt="404"/>
 <h1 className="font-mono text-[rgba(42,47,47,1)] absolute pb-60 pr-14 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[200px]">4</h1>
 <h1 className="text-white absolute pb-60 pl-44 transform -translate-x-1/2 -translate-y-1/2 text-[170px] font-bold">0</h1>
 <h1 className="font-mono rotate-[20deg] pr-48 pl-[500px] text-[rgba(42,47,47,1)] absolute pb-[360px] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[200px]">4</h1>
</div>

<h3 className="font-bold text-3xl">Oops! Page not found</h3>
<p className="text text-center text-[rgba(128,125,126,1)]">The page you are looking for might have been removed or <br></br>temporarily unavailable.</p>

<div className="flex-space-x-2">
    <Link to={'/shop'} className="w-60 p-2 bg-[rgba(138,51,253,1)] hover:bg-[#6f47a4] text-white rounded-md" >Back to HomePage</Link>
</div>
</div>

        </>
    );
}

export default Error;
