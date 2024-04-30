import { Link } from "react-router-dom"

function SingUp(){
    return(
        <div className="w-[100] flex items-center justify-center">
            <form className="w-[60] flex  flex-col">
            <h1 className="text-[100] font-[500] ">
                    Sign Up
                </h1>
                <h2>Sign up for free to access to in any of our products </h2>
                <div className="my-[25px]"></div>
                <div className=" w-[500px] border-[1px] rounded-md border-black">
                    <div className="flex flex-row p-2 content-evenly justify-center">
                        <img className="mx-[10px] w-5 h-5" src="./src/assets/Google.png" alt="" ></img>
                        <h2  className="text-[#8A33FD]">Continue With Google</h2>
                    </div>
                </div>

                <div className="my-[20px] w-[500px] border-[1px] rounded-md border-black">
                    <div className="flex flex-row p-2 content-evenly justify-center">
                        <img className="mx-[10px] w-5 h-5" src="./src/assets/twitter.png" alt="" ></img>
                        <h2 className="text-[#8A33FD]">Continue With Twitter</h2>
                    </div>
                </div>

                <div className="my-[20px]"></div>

                    <h2 className="my-[10px]">Email Address</h2>
                    <input type="email" className="border-[1px] rounded-md p-3 border-[#3C4242]"/>

                    <div className="my-[10px]"></div>

                    <h2 className="my-[10px]">Password</h2>
                    <input type="password" className="border-[1px] rounded-md p-3 border-[#3C4242]" />
                    <h2>Use 8 or more characters with a mix of letters, numbers & symbols</h2>
                    <div className="my-[25px]">
                        <div className="flex">
                            <input type="checkbox"/> Agree to our Terms of use and Privacy Policy 
                        </div>
                        <div className="flex">
                            <input type="checkbox" />Subscribe to our monthly newsletter
                        </div>
                    </div>
                    <button className="w-[40%] rounded-md border-[1px] border-black p-4 bg-[#8A33FD] text-white"> Sing up</button>
                    <div className="flex">
                    <h1>Already have an  account?</h1><Link to='/profile' className="text-[#8A33FD]"> Log in</Link>  
                    </div>
           </form>
        </div>
    )
}
export default SingUp