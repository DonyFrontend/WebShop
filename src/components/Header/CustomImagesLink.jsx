import { Link, useMatch } from "react-router-dom"
import { scrollToZero } from "../../pages/utils/CustomFC"

const CustomImagesLink = ({to, image}) => {
    const match = useMatch(to)
    scrollToZero();

    return <Link to={to}>
        <div className="flex justify-center" style={{padding: '5px', borderRadius: '8px', backgroundColor: match ? '#c1bebe' : '#F6F6F6'}}>
            <img width={25} src={image} alt="Error" />
        </div>
    </Link>
}

export default CustomImagesLink;