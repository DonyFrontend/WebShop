import { Link } from "react-router-dom"
import Google from '../../assets/Google.png'
import { useEffect, useState } from "react"
import { SignInTC } from "../../Slices/SignInTC";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { scrollToZero } from "../../pages/utils/CustomFC";
import signInWithGoogle from "../../pages/utils/SignInWithGoogleFC";

function SignIn(){
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');

    const [error, setError] = useState('')

    useEffect(() => {
        if (localStorage.error === 'true') {
            setError('Введите правильные данные')
        }
        else{
            console.log('Успех');
        }
        scrollToZero();
    }, [error, setError])

    function postUser() {
        dispatch(SignInTC({email, password}));
        navigate('/profile/user')
    }

    return(
        <div className="flex  w-full items-center justify-center">
            <form className="flex items-center lg:items-stretch flex-col">
                <div className="mt-16 text-center  md:text-left lg:text-left my-[6%]">
                    <h1 className="mb-3 text-4xl md:text-5xl lg:text-4xl">
                        Sign In Page
                    </h1>
                </div>

                <div>
                <div onClick={() => signInWithGoogle({navigate})} className="cursor-pointer w-80 md:w-96 mb-5 lg:mb-0 lg:w-[100%] border-[1px] rounded-md border-black">
                    <div className="flex lg:text-xl md:text-2xl flex-row p-2 content-evenly justify-center">
                    <img className="mx-[10px] md:mt-1.5 lg:mt-1.5 w-5 h-5" src={Google} alt="" ></img>
                        <h2  className="text-[#8A33FD]">Continue With Google</h2>
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

                

                <div className="flex  flex-col mb-10 lg:mb-0">

                
                

                <div className="text-left">
                    <h2 className=" my-[10px] text-2xl lg:text-xl">Email</h2>
                </div>
                <div>
                    <input value={email} onChange={e => setEmail(e.target.value)} required type="email" className="p-2 w-80 md:w-96  lg:w-[100%] border-[1px] rounded-md lg:p-3 border-[#3C4242]"/>
                </div>
              

                <div className="text-left">
                    <h2 className="my-[10px] text-2xl lg:text-xl">Password</h2>
                </div>

                <div>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="p-2 w-80 md:w-96 lg:w-[100%] border-[1px] rounded-md lg;p-3 border-[#3C4242]" />
                </div> 
                {error === 'Введите правильные данные' && <p className="text-red-500">Введите правильные данные</p>}
                {error !== 'Введите правильные данные' && <p className="hidden"></p> }


                    <Link className="pt-2 text-left lg:my-0 lg:text-end text-[#8A33FD]" to={'https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop'}>Forget your password?</Link>
                    
                        <button onClick={postUser} className=" mt-3 w-80 md:w-96 lg:w-40 lg:mt-0 rounded-md border-[1px] border-black p-4 bg-[#8A33FD] text-white"> Sign in</button>
                    <div className="mb-16 gap-x-2 md:text-2xl lg:text-base  justify-center lg:justify-start flex">
                    <h1>Don’t have an account?</h1><Link to='/SignUp' className="text-[#8A33FD]">Sign up</Link>  
                    </div>
                </div>
           </form>
        </div>
    )
}
export default SignIn