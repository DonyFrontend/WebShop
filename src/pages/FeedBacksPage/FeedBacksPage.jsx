import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AllCurrentFeedbacksTC } from "../../Slices/AllFeedBacksTC";
import LoadPage from '../LoadPage/LoadPage';
import { scrollToZero } from '../utils/CustomFC';

const ReviewCard = ({ date, feedBack, name }) => (
    <div className="bg-white shadow-lg border-purple-800 border rounded-lg p-4 m-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="flex justify-between items-center">
            <div className="text-black text-base lg:text-base md:text-xl">{name}</div>
        </div>
        <p className="mt-2 text-base lg:text-base md:text-lg text-gray-700">{feedBack}</p>
        <div className="mt-4 text-gray-600 font-semibold">{date}</div>
    </div>
);

function FeedBacksPage() {
    const dispatch = useDispatch();
    const { allCurrentFeedBacks, isFetch } = useSelector(state => state.AllFeedBacksTC);

    useEffect(() => {
        dispatch(AllCurrentFeedbacksTC());
        scrollToZero();
    }, [dispatch]);

    if (isFetch) {
        return <div className="h-dvh flex items-center">
        <LoadPage />
    </div>
    }

    return (
        <div className=" w-full flex justify-center bg-white text-center">
            <div>
                <h1 className="text-4xl font-semibold mb-8">Reviews</h1>
                <div className="grid grid-cols-1 auto-rows-auto">
                    {allCurrentFeedBacks.map(feedback => (
                        <ReviewCard
                            key={feedback.id}
                            name={feedback.name}
                            feedBack={feedback.feedBack}
                            date={feedback.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeedBacksPage;