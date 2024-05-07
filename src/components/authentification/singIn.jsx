import { Link } from "react-router-dom"
import Google from '../../assets/Google.png'
import twitter from '../../assets/twitter.png'
import {useDispatch} from 'react-redux'
import { SignInTC } from "../../Slices/SignInTC";
import { useState } from "react";

function SingIn(){
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function postData(e) {
        e.preventDefault();
        dispatch(SignInTC({email, password}));
        setEmail('')
        setPassword('');
    }

    return(
        <div className="w-[100] flex items-center justify-center">
            <form className="w-[60] flex  flex-col">
            <h1 className="text-[100] h-10 font-[500] ">
                    Sign In Page
                </h1>
                <div className=" w-[500px] border-[1px] rounded-md border-black">
                    <div className="flex flex-row p-2 content-evenly justify-center">
                    <img className="mx-[10px] w-5 h-5" src={Google} alt="" ></img>
                        <h2  className="text-[#8A33FD]">Continue With Google</h2>
                    </div>
                </div>

                <div className="my-[20px] w-[500px] border-[1px] rounded-md border-black">
                    <div className="flex flex-row p-2 content-evenly justify-center">
                    <img className="mx-[10px] w-5 h-5" src={twitter} alt="" ></img>
                        <h2 className="text-[#8A33FD]">Continue With Twitter</h2>
                    </div>
                </div>

                <div className="flex my-[25px] justify-between">
                <div className=" w-[200px] border-y-[1px] border-gray-400">
                     </div>
                        <hi>OR</hi>
                     <div className="w-[200px]  border-y-[1px] top-none border-gray-400">
                     </div>
                </div>

                <div className=""></div>

                    <h2 className="my-[10px]">User name or email address</h2>
                    <input type="email" className="border-[1px] rounded-md p-3 border-[#3C4242]"/>

                    <div className="my-[10px]"></div>

                    <h2 className="my-[10px]">Password</h2>
                    <input type="password" className="border-[1px] rounded-md p-3 border-[#3C4242]" />
                    <Link className="text-end text-[#8A33FD]" to={'https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop'}>Forget your password?</Link>
                    <button className="w-[40%] rounded-md border-[1px] border-black p-4 bg-[#8A33FD] text-white"> Sing in</button>
                    <div className="flex">
                    <h1>Don’t have an account?</h1><Link to='/SingUp' className="text-[#8A33FD]" onClick={postData}>Sign up</Link>  
                    </div>
           </form>
        </div>
    )
}
export default SingIn