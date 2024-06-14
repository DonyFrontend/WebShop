import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getAllUsersTC } from '../../../Slices/getAllUsersSlice';

const Chat = () => {
    const {users, isFetch} = useSelector(state => state.getAllUsersSlice);
    const dispatch = useDispatch();
    console.log(users);

    useEffect(() => {
        dispatch(getAllUsersTC());
    })
    
    if (isFetch) {
        return <h1>Loading...</h1>
    }

    return <div>
        {users.map((item, index) => <div key={index}>
            <p>{item.chat}</p>
        </div>)}
    </div>
}

export default Chat;