import { useMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { scrollToZero } from "../../pages/utils/CustomFC";

const CustomLink = ({to, text}) => {
    const match = useMatch(to);
    scrollToZero();

    return <Link to={to} style={{color: match ? '#3C4242' : '#807D7E', transition: '0.5s', fontSize: '17px'}}>{text}</Link>
}

export default CustomLink;