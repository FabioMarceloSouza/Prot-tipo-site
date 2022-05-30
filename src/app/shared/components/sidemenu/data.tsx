import { BsListTask } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { FaUserFriends } from 'react-icons/fa';
import { IoMdPaperPlane } from 'react-icons/io';
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';

export const dataMenu = [ 
    {
        title: 'Atividades',
        icon: <BsListTask className="icon-menu"/>,
        arrow: <IoIosArrowForward  className="arrow-menu"/>,
        navigate: 'private/activities'
    },
    {
        title: 'Beneficiários',
        icon: <FaUserFriends className="icon-menu"/>,
        arrow: <IoIosArrowForward  className="arrow-menu"/>,
        navigate: 'private/beneficiaries'
    },
    {
        title: 'Minha Conta',
        icon: <AiOutlineUser className="icon-menu"/>,
        arrow: <IoIosArrowForward  className="arrow-menu"/>,
        navigate: 'private/my-account'
    },
    {
        title: 'Fidelidade',
        icon: <AiOutlineStar className="icon-menu"/>,
        arrow: <IoIosArrowForward  className="arrow-menu"/>,
        navigate: 'activities'
    },
    {
        title: 'Convide Amigos',
        icon: <IoMdPaperPlane className="icon-menu"/>,
        arrow: <IoIosArrowForward  className="arrow-menu"  />,
        navigate: 'activities'
    },
]

