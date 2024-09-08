import { AiFillHome, AiOutlineInfoCircle, AiOutlinePicture, AiOutlinePhone } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { FaPenNib } from 'react-icons/fa';

const pageLinks = [
    {
        title:'Home',
        icon:<AiFillHome />,
        link:'/',
    },
    {
        title:'Services',
        icon:<RiServiceLine />,
        link:'/services'
    },
    {
        title:'Blog',
        icon:<FaPenNib />,
        link:'/#blog',
    },
    {
        title:'Gallery',
        icon:<AiOutlinePicture />,
        link:'/gallery',
    },
    {
        title:'Contact Us',
        icon:<AiOutlinePhone />,
        link:'/contact',
    }
]

export default pageLinks;