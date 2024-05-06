import { Link } from "react-router-dom"
import Google from '../../assets/Google.png'
import twitter from '../../assets/twitter.png'
function SingUp(){
    return(
        <div className="w-full mb-16 flex items-center justify-center">
            <form className="flex  flex-col">
                <div className="my-[10%]">
                    <h1 className="text-4xl font-medium ">
                        Sign Up
                    </h1>
                <h2 className="pt-5">Sign up for free to access to in any of our products </h2>
                </div>
           
                <div className=" w-[500px] border-[1px] rounded-md border-black">
                    <div className="flex flex-row p-2 content-evenly justify-center">
                        <img className="mx-3 w-5 h-5" src={Google} alt="" ></img>
                        <h2  className="text-[#8A33FD]">Continue With Google</h2>
                    </div>
                </div>

                <div className="my-[20px] w-[500px] border-[1px] rounded-md border-black">
                    <div className="flex flex-row p-2 content-evenly justify-center">
                        <img className="mx-[10px] w-5 h-5" src={twitter} alt="" ></img>
                        <h2 className="text-[#8A33FD]">Continue With Twitter</h2>
                    </div>
                </div>


                <div>
                    <h2 className="my-[3%] mt-[5%]">Email Address</h2>
                </div>
                    <input  required  type="email" className="border-[1px] rounded-md p-3 border-[#3C4242]"/>

                <div className="my-[2%] mt-[5%]">
                    <h2 className="">Password</h2>
                </div>
                    <input  required  type="password" className="border-[1px] rounded-md p-3 border-[#3C4242]" />
                    <h2>Use 8 or more characters with a mix of letters, numbers & symbols</h2>
                    <div className="my-[25px]">
                        <div className="flex gap-x-2">
                            <input required type="checkbox"/> <p>Agree to our Terms of use and Privacy Policy</p>  
                        </div>
                        <div className="flex gap-x-2">
                            <input type="checkbox" /> <p>Subscribe to our monthly newsletter</p>
                        </div>
                    </div>
                    <button className="w-[40%] rounded-md border-[1px] border-black p-4 bg-[#8A33FD] text-white"> Sing up</button>
                    <div className="mb-16 flex">
                    <h1>Already have an  account?</h1><Link to='/profile/*' className="text-[#8A33FD]"> Log in</Link>  
                    </div>
           </form>
        </div>
    )
}
export default SingUp