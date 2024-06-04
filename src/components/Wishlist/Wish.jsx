import React from "react";
import { Link } from "react-router-dom";

function Wishlist() {

    return(
        <>
<div>
    <div className="flex justify-center pt-32">
     <svg width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="85" cy="85" r="85" fill="#F0F9F4"/>
<path transform="translate(50,50)" fill-rule="evenodd" clip-rule="evenodd" d="M34.4787 10.46C28.2557 3.20782 17.8785 1.257 10.0815 7.89783C2.28452 14.5387 1.18681 25.6418 7.30982 33.4959C12.4007 40.0261 27.8074 53.7988 32.8569 58.2564C33.4218 58.7552 33.7043 59.0045 34.0338 59.1025C34.3214 59.188 34.636 59.188 34.9236 59.1025C35.2531 59.0045 35.5355 58.7552 36.1005 58.2564C41.15 53.7988 56.5567 40.0261 61.6475 33.4959C67.7705 25.6418 66.8069 14.4688 58.8759 7.89783C50.9449 1.32686 40.7017 3.20782 34.4787 10.46Z" stroke="#28A642" stroke-width="6.225" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
</div>

<h3 className="font-bold text-3xl flex justify-center pt-10 pb-2 text-[rgba(60,66,66,1)]">Your wishlist is empty.</h3>
<p className="text text-center text-[rgba(128,125,126,1)]">You don’t have any products in the wishlist yet. You will find a lot <br></br>of interesting products on our Shop page.</p>

</div>
<div className="flex justify-center">
<div className="pt-12 ">
<Link to={'/shop'} className=" justify-center flex w-[200px]  p-2 bg-[rgba(138,51,253,1)] hover:bg-[#6f47a4] text-white rounded-md" >Continue Shopping</Link>
</div>
</div>

        </>
    )
}
export default Wishlist