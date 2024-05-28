import React from "react";
import { Link } from "react-router-dom";
function Error() {

    return(
        <>
        
 <div className="w-screen h-screen flex flex-col justify-center items-center space-y-5">
<div className="max-w-md w-[181px] h-64 relative top-4"> 

<img className="rounded-bl-[100px]" src="https://s3-alpha-sig.figma.com/img/4e73/508f/b488c3c60f5c67b4707e9372e6fb9e67?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SlYsnDfA4w85MelG9JvE1I-9zXp6Aa9zNEoNF8ZhxUUgbBix3fw7l2HgDsjieINibFtkjN4l3Uy6DrRi8uV1nJT9LG678B7Jshld~nS1vY9Jtk5UOgbiWGLq~cy5eSxej3nQOzyJZbXdO0rLPX-kZJxGaIc4mRmbyM4ocVGJXSENDJh6RRL5he5~Jk8S9RfzmL6qfCS9NX~X3QgbOfx~Oja7exfpm9ZYm-gIB5D3wrK48haDAGc3DmNqZxQbuCtInBilrLCQTMY6s2yx0xlVaVGILlWVGJMc8iLFUQ~AbJWWVEmD-kEwzCaJ078cfEmIs7ZZPdkBRoyP2zl5VAJfXg__" alt="404"/>
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
    )
}
export default Error