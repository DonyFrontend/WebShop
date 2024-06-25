import { Link } from "react-router-dom"
import Google from '../../assets/Google.png'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { SignUpUserTC } from "../../Slices/SignUpUserTC"
import { scrollToZero } from "../../pages/utils/CustomFC"
import signInWithGoogle from "../../pages/utils/SignInWithGoogleFC"

function SignUp(path) {
    useEffect(() => {
        scrollToZero();
    }, [])

    const dispatch = useDispatch();

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState("")
    const [name, setName] = useState('');
    const [town, setTown] = useState('Bishkek');

    console.log(town);

    const OnHandleChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword)
        if (newPassword.length <= 8) {
            setMessage('Пароль недостаточно надёжен')
        } else {
            setMessage('')
        }
    }

    function postUser() {
        dispatch(SignUpUserTC({ email, password, name, town }));
    }

    return (
        <div className="flex  w-full items-center justify-center">
            <form className="flex items-center lg:items-stretch flex-col">
                <div className="mt-16 w-80 md:w-96 lg:w-full text-center  lg:text-left my-[6%]">
                    <h1 className=" text-4xl md:text-5xl lg:text-4xl lg:mb-3">
                        Sign Up
                    </h1>
                    <h2 className=" pt-5 lg:pt-0 text-xl text-left text-gray-500">Sign up for free to access to in any of our products </h2>
                </div>


                <div onClick={signInWithGoogle} className="cursor-pointer mb-5 lg:mb-0 md:w-96 w-80 lg:w-[100%] lg:mt-5 border-[1px] rounded-md border-black">
                    <Link to={'/profile/user'}>
                        <div className="flex lg:text-xl md:text-2xl flex-row p-2 content-evenly justify-center">
                            <img className="mx-3 md:mt-1.5 lg:mt-1.5 w-5 h-5" src={Google} alt="" ></img>
                            <h2 className="text-[#8A33FD]">Continue With Google</h2>
                        </div>
                    </Link>
                </div>


                <div className="w-full text-left lg:mt-10">
                    <div className="text-left">
                        <h2 className="my-[10px] text-2xl lg:text-xl">Select town</h2>
                    </div>
                    <select onChange={e => setTown(e.target.value)} className="p-2 w-80 md:w-96 lg:w-[100%] border-[1px] rounded-md lg:p-3 border-[#3C4242]">
                        <option value='Bishkek'>Bishkek</option>
                        <option value='Kara-Balta'>Kara-Balta</option>
                        <option value='Osh'>Osh</option>
                        <option value="Talas">Talas</option>
                        <option value="Karakol">Karakol</option>
                    </select>

                    <div className="text-left">
                        <h2 className=" my-[10px] text-2xl lg:text-xl">Your name</h2>
                    </div>
                    <div>
                        <input required value={name} onChange={e => setName(e.target.value)} type="text" className="p-2 w-80 md:w-96 lg:w-[100%] border-[1px] rounded-md lg:p-3 border-[#3C4242]" />
                    </div>

                    <div>
                        <h2 className="my-[3%] mt-[5%] text-2xl lg:text-xl">Email Address</h2>
                    </div>
                    <input required value={email} onChange={e => setEmail(e.target.value)} type="email" className="p-2 w-80 md:w-96 lg:w-[100%] border-[1px] rounded-md lg:p-3 border-[#3C4242]" />

                    <div className="my-[2%] mt-[5%]">
                        <h2 className="text-2xl lg:text-xl">Password</h2>
                    </div>
                </div>
                <input required type="password" value={password} onChange={OnHandleChange} className="p-2 w-80 md:w-96 lg:w-[100%] border-[1px] rounded-md lg;p-3 border-[#3C4242]" />
                <p className="text-red-500">{message} </p>
                <div className="flex w-80 md:w-96 lg:w-full">
                    <h2 >Use 8 or more characters with a mix of letters, numbers & symbols</h2>
                </div>
                <div className="my-6 w-80 md:w-96 lg:w-full">
                    <div className="flex gap-x-2">
                        <input className="mb-5 lg:mb-0 lg:mt-1" required type="checkbox" /> <p>Agree to our Terms of use and Privacy Policy</p>
                    </div>
                    <div className="flex gap-x-2">
                        <input type="checkbox" /> <p>Subscribe to our monthly newsletter</p>
                    </div>
                </div>
                <Link to={path}>
                    <button disabled={password.length <= 8} onClick={postUser} className="w-80 md:w-96 lg:w-40 rounded-md border-[1px] border-black p-4 bg-[#8A33FD] text-white">Sign up</button>
                </Link>
                <div className="mb-16 gap-x-2 md:text-2xl lg:text-base justify-center lg:justify-start flex">
                    <h1>Already have an  account?</h1><Link to='/SignIn' className="text-[#8A33FD]"> Log in</Link>
                </div>
            </form>
        </div>
    )
}
export default SignUp