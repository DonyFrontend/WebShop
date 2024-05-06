import UserModal from "./UserModal";
import { auth } from "../../../FirebaseConfig";

const User = () => {

    return <div className="w-[70%] flex flex-col gap-y-10">
        <div>
            <h1 className='font-semibold text-3xl'>My Info</h1>
        </div>
        <div className="grid grid-cols-2 grid-row-2 gap-6">
            <div>
                <h1 className="font-semibold">Name</h1>
                <div className="bg-[#f1f0f0] rounded-md p-1">
                    <p>{auth.name}</p>
                </div>
            </div>

            <div>
                <h1 className="font-semibold">Email</h1>
                <div className="bg-[#f1f0f0] rounded-md p-1">
                    <p>{auth.currentUser.email}</p>
                </div>
            </div>

            <div>
                <h1 className="font-semibold">Country</h1>
                <div className="bg-[#f1f0f0] rounded-md p-1">
                    <p>Kyrgyzstan</p>
                </div>
            </div>

            <div>
                <h1 className="font-semibold">City</h1>
                <div className="bg-[#f1f0f0] rounded-md p-1">
                    <p>Kara-Balta</p>
                </div>
            </div>
        </div>
        <div>
            <UserModal/>
        </div>
    </div>
}

export default User;