import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AllCurrentFeedbacksTC } from "../../Slices/AllFeedBacksTC";

function FeedBacksPage() {
    const dispatch = useDispatch();
    const { allCurrentFeedBacks, isFetch } = useSelector(state => state.AllFeedBacksTC);
        console.log(allCurrentFeedBacks);
    useEffect(() => {
        dispatch(AllCurrentFeedbacksTC());
    }, [dispatch]);

    if (isFetch) {
    return <h1>Loading...</h1>
   }
    return (
        <div className="flex justify-center w-full">
            <div>
               
                    {allCurrentFeedBacks.map(feedback => (
                        <div key={feedback.id}>
                            <p>Name: {feedback.name}</p>
                            <p>Feedback: {feedback.feedback}</p>
                            <p>Date: {feedback.date}</p>
                        </div>
                    ))}
                
            </div>
        </div>
    )
}

export default FeedBacksPage;