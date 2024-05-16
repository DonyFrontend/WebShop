const sections = [
    {
        title:'Need Help',
        items:['Contact Us','Track Order','Returns & Refunds','FAQ.s','Career']
    },
    {
        title:'Company',
        items:['About Us','euphoria Blog','euphorlastan','Collaboration','Media']
    },
    {
        title:'More Info',
        items:['Term and Conditions','Privacy Policy','Shipping policy','Sitemap']
    },
    {
        title:'Location',
        items:['support @ euphoria.in','Eklingpura Cbouraha','Ahmedabad Main Road','(NH8-Near Mahadev Hotel) Udalpur,India-313002']
    },
    
]
//  const items =[
//      {
//          name:'Facebook',
//          icon:FaFacebook,
//          link: ''
//      },
//      {
//          name:'Instagram',
//          icon: FaInstagram,
//          link: ''
//     },
//     {
//         name:'Twitter',
//         icon:FaTwitter,
//         link: ''
//     },
//     {
//          name:'Twitch',
//          icon:FaTwitch,
//          link: ''
//      },
//      {
//         name:'Github',
//         icon:FaGitthub,
//         link: ''
//      },
//  ]
const Footer = () =>{
    return(
        <>
   <div className="w-full  bg-[rgba(60,66,66,1)] text-gray-300 py-y px-2">
    <div className=" md:grid-cols-2 max-w-[1240px] mx-auto grid lg:grid-cols-4 py-16  border-b-2 border-gray-600 ">
        {
            sections.map((section,index)=>(
                <div key={index}>
                <h6 className="font-bold uppercase pt-2">
                    {section.title}
                </h6>
                     <ul>
                        {section.items.map((item,i)=>(
                            <li key={i}
                            className="py-1 text-gray-500 hover:text-white cursor-pointer">
                                {item}

                            </li>
                        ))}
                     </ul>
                </div>
            ))
        }

        <div className="col-span-2 pt-8 md:pt-2 ">
            <p className="font-bold text-center lg:text-left uppercase">
                Subscribe to our newsletter
            </p>
            <p className="py-4 text-center lg:text-left">
                The latest updates,articcles and resources,sent to your index weekly.
            </p>
            <form className="flex flex-col items-center sm:flex-row ">
                <input type="email" placeholder="Enter email address " 
                className="w-80 lg:w-full p-2 mr-4 rounded-md md-4"/>
            <button className="p-2 md-4">
                Subscribe
            </button>
   
            </form>

        </div>


    </div>
    {/*Copyright & Social Icons */}
    <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 hover:text-white">
     <p className="py-4">
        Copyright 2024 Euphoria Folks Pvt Ltd.All rights reserved.
     </p>


<div className="text-center text-xl text-white md-2">
    <a href="" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-white mx-1 inline-block pt-1"><i className="fa fa-twitter"></i></a>
    <a href="" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-white mx-1 inline-block pt-1"><i className="fa fa-instagram"></i></a>
    <a href="" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-white mx-1 inline-block pt-1"><i className="fa fa-twitter"></i></a>
    <a href="" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-white mx-1 inline-block pt-1"><i className="fa fa-twitter"></i></a>
</div>


</div>

     </div>
   
        </>
    )
}
export default Footer
 
 
