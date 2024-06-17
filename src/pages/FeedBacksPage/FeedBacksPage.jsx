import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AllCurrentFeedbacksTC } from "../../Slices/AllFeedBacksTC";

function FeedBacksPage() {
    const dispatch = useDispatch();
    const { currentFeedBacks, isFetch } = useSelector(state => state.AllFeedbacksTC);
        console.log(currentFeedBacks);
    useEffect(() => {
        dispatch(AllCurrentFeedbacksTC());
    }, [dispatch]);

    if (isFetch) {
    return <h1>Loading...</h1>
   }
    return (
        <div className="flex justify-center w-full">
            <div>
               
                    {currentFeedBacks.map(feedback => (
                        <div key={feedback.id}>
                            <p>Name: {feedback.name}</p>
                            <p>Feedback: {feedback.feedback}</p>
                            <p>Date: {feedback.date}</p>
                        </div>
                    ))}
                
            </div>
        </div>
    );
}

export default FeedBacksPage;