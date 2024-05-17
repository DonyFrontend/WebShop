import { Link } from "react-router-dom"
import Google from '../../assets/Google.png'
import twitter from './authImages/twitter.png'
import { useState } from "react"
function SignUp(){
    const [password, setPassword] = useState('')
        const [message, setMessage] = useState("")
        const OnHandleChange = (e) =>{
            const newPassword = e.target.value;
            setPassword(newPassword)
            if(newPassword.length <= 8 ){
                setMessage('Пароль недостаточно надёжен')
            } else{
                setMessage('')
            }
        }

    return(
        <div className="flex  w-full items-center justify-center">
            <form className="flex items-center lg:items-stretch flex-col">
                <div className="mt-16 w-80 lg:w-full text-center  md:text-left lg:text-left my-[6%]">
                    <h1 className=" text-4xl  lg:mb-3">
                        Sign Up
                    </h1>
                <h2 className=" pt-5 lg:pt-0 text-xl text-left text-gray-500">Sign up for free to access to in any of our products </h2>
                </div>
           
                <div className=" w-80 mb-5 lg:mb-0 lg:w-[100%] border-[1px] rounded-md border-black">
                    <div className="flex flex-row p-2 content-evenly justify-center">
                        <img className="mx-3 w-5 h-5" src={Google} alt="" ></img>
                        <h2  className="text-[#8A33FD]">Continue With Google</h2>
                    </div>
                </div>

                <div className="mb-5 lg:mb-0 w-80 lg:w-[100%] lg:mt-5 border-[1px] rounded-md border-black">
                    <div className="flex flex-row p-2 content-evenly justify-center">
                        <img className="mx-[10px] w-5 h-5" src={twitter} alt="" ></img>
                        <h2 className="text-[#8A33FD]">Continue With Twitter</h2>
                    </div>
                </div>


            <div className="w-full text-left lg:mt-10">
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
                    <h2 className=" my-[10px] text-2xl lg:text-xl">Your name</h2>
                </div>
                <div>
                    <input required type="text" className="p-2 w-80 lg:w-[100%] border-[1px] rounded-md lg:p-3 border-[#3C4242]"/>
                </div>

                <div>
                    <h2 className="my-[3%] mt-[5%] text-2xl lg:text-xl">Email Address</h2>
                </div>
                    <input  required  type="email" className="p-2 w-80   lg:w-[100%] border-[1px] rounded-md lg:p-3 border-[#3C4242]"/>

                <div className="my-[2%] mt-[5%]">
                    <h2 className="text-2xl lg:text-xl">Password</h2>
                </div>
            </div>
                    <input  required  type="password" value={password} onChange={OnHandleChange} className="p-2 w-80  lg:w-[100%] border-[1px] rounded-md lg;p-3 border-[#3C4242]" />
                    <p className="text-red-500">{message} </p>
                <div className="flex w-80 lg:w-full"> 
                    <h2 >Use 8 or more characters with a mix of letters, numbers & symbols</h2>
                </div>
                    <div className="my-6 w-80 lg:w-full">
                        <div className="flex gap-x-2">
                            <input className="mb-5 lg:mb-0 lg:mt-1" required type="checkbox"/> <p>Agree to our Terms of use and Privacy Policy</p>  
                        </div>
                        <div className="flex gap-x-2">
                            <input type="checkbox" /> <p>Subscribe to our monthly newsletter</p>
                        </div>
                    </div>
                    <button disabled={password.length <= 8} className="w-80 lg:w-40 rounded-md border-[1px] border-black p-4 bg-[#8A33FD] text-white"> Sign up</button>
                    <div className="mb-16 gap-x-2 md:text-2xl lg:text-base justify-center lg:justify-start flex">
                    <h1>Already have an  account?</h1><Link to='/SignIn' className="text-[#8A33FD]"> Log in</Link> 
                    </div>
           </form>
        </div>
    )
}
export default SignUp