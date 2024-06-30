import UserModal from "./UserModal";
import { useSelector } from "react-redux";

const User = (user) => {
    console.log(user);
    const {isFetch} = useSelector(state => state.getThisUserTC);
    if (isFetch) {
        return <h1>Loading...</h1>
    }

    return <div className="w-full lg:items-start items-stretch flex flex-col gap-y-10">
        <div>
            <h1 className='font-semibold text-3xl text-center lg:text-left'>My Info</h1>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-2 lg:grid-row-2 gap-6 lg:gap-6 md:gap-10">
            <div>
                <h1 className="font-semibold md:text-xl text-base lg:text-base text-center lg:text-left">Name</h1>
                <div className="bg-[#f1f0f0] flex justify-center lg:justify-start rounded-md p-1">
                    <p className="md:text-lg text-base lg:text-base " >{user.user.name}</p>
                </div>
            </div>

            <div>
                <h1 className="font-semibold md:text-xl text-base lg:text-base text-center lg:text-left">Email</h1>
                <div className="bg-[#f1f0f0] flex justify-center lg:justify-start rounded-md p-1">
                    <p className="md:text-lg text-base lg:text-base " >{user.user.email}</p>
                </div>
            </div>

            <div>
                <h1 className="font-semibold md:text-xl text-base lg:text-base text-center lg:text-left">Country</h1>
                <div className="bg-[#f1f0f0] flex justify-center lg:justify-start rounded-md p-1">
                    <p className="md:text-lg text-base lg:text-base " >Kyrgyzstan</p>
                </div>
            </div>

            <div>
                <h1 className="font-semibold md:text-xl text-base lg:text-base text-center lg:text-left">City</h1>
                <div className="bg-[#f1f0f0] flex justify-center lg:justify-start rounded-md p-1">
                    <p className="md:text-lg text-base lg:text-base " >{user.user.town}</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center lg:justify-start">
            <UserModal/>
        </div>
    </div>
}

export default User;