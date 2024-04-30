import { Link, useMatch } from "react-router-dom"

const CustomLink = ({to, text, image}) => {
    const match = useMatch(to);
    return <Link className="rounded-lg" to={to} style={{backgroundColor: match ? '#c1bebe' : 'white', transition: '0.5s', fontSize: '17px'}}>
        <div className="flex gap-x-3 p-1">
            <img src={image} alt="Error!" />
            <p>{text}</p>
        </div>
    </Link>
}

export default CustomLink;