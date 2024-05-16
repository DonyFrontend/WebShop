import { Link } from "react-router-dom"
import Google from '../../assets/Google.png'
import twitter from './authImages/twitter.png'
function SignIn(){
    return(
        <div className="flex  w-full items-center justify-center">
            <form className="flex items-center lg:items-stretch flex-col">
                <div className="mt-16 text-center  md:text-left lg:text-left my-[6%]">
                    <h1 className="mb-3 text-4xl">
                        Sign In Page
                    </h1>
                </div>

                <div>
                <div className=" w-80 mb-5 lg:mb-0 lg:w-[100%] border-[1px] rounded-md border-black">
                    <div className="flex flex-row p-2 content-evenly justify-center">
                    <img className="mx-[10px] w-5 h-5" src={Google} alt="" ></img>
                        <h2  className="text-[#8A33FD]">Continue With Google</h2>
                    </div>
                </div>

                <div className=" mb-5 lg:mb-0 w-80 lg:w-[100%] lg:mt-5 border-[1px] rounded-md border-black">
                    <div className="flex flex-row p-2 content-evenly justify-center">
                    <img className="mx-[10px] w-5 h-5" src={twitter} alt="" ></img>
                        <h2 className="text-[#8A33FD]">Continue With Twitter</h2>
                    </div>
                </div>
            </div>


                <div className="flex my-0 lg:my-[6%] span-origin items-center justify-between">
                <div className=" lg:w-[200px] border-y-[1px] border-gray-300">
                     </div>
                        <h2 className="hidden lg:flex lg:text-2xl text-gray-600 mx-5">OR</h2>
                     <div className="lg:w-[200px]  border-y-[1px] top-none border-gray-300">
                     </div>
                </div>

                

                <div className="flex flex-col mb-10 lg:mb-0">
                <div className="text-left">
                 <h2 className="my-[10px] text-2xl lg:text-xl">Select town</h2>
                </div>
                <select className="p-2 w-80 lg:w-[100%] border-[1px] rounded-md lg:p-3 border-[#3C4242]">
                    <option value='option1'>Bishkek</option>
                    <option value='option2'>Kara-Balta</option>
                    <option value='option3'>Osh</option>
                    <option value="option 4">Talas</option>
                    <option value="option 5">Karakol</option>
                </select>   
                <div className="text-left">
                <h2 className=" my-[10px] text-2xl lg:text-xl">User name or email address</h2>
                </div>
                <div>
                    <input required type="email" className="p-2 w-80 lg:w-[100%] border-[1px] rounded-md lg:p-3 border-[#3C4242]"/>
                </div>
              

                <div className="text-left">
                 <h2 className="my-[10px] text-2xl lg:text-xl">Password</h2>
                </div>

                <div>
                    <input required type="password" className="p-2 w-80  lg:w-[100%] border-[1px] rounded-md lg;p-3 border-[#3C4242]" />
                </div>


                    <Link className="pt-2 text-left lg:my-0 lg:text-end text-[#8A33FD]" to={'https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop'}>Forget your password?</Link>
                    <button className="w-80 mt-3 lg:mt-0 lg:w-40 rounded-md border-[1px] border-black p-4 bg-[#8A33FD] text-white"> Sing in</button>
                    <div className="mb-16 justify-center lg:justify-start flex">
                    <h1>Don’t have an account?</h1><Link to='/signup' className="text-[#8A33FD]">Sign up</Link>  
                    </div>
                </div>
           </form>
        </div>
    )
}
export default SignIn