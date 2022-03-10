import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux';
import LogoWB from '../../assets/svg/LogoWB'
import { ModalActionType } from '../../redux/reducer/Modal/action';
import { InputTypes } from '../../types/Inputs';
import { Modal } from '../modal/Modal';
import Avatar from '../../assets/svg/person-outline.svg';
import UK from '../../assets/svg/uk.svg';
import { useNavigate } from 'react-router-dom';

interface INavbarElements {
    name: string;
    link: string;
}

interface ISubMenu {
    name: string;
}

export const Navbar = () => {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isConnected = true
    const username = 'John Doe'

    const inputsLogin: InputTypes[] = [
        {
            name: "email",
            type: "text",
            label: "Email",
            placeholder: "Email",
        }, {
            name: "password",
            type: "password",
            label: "Password",
            placeholder: "Password",
        },
    ]

    const itemTitle = [{
        name: t('navbar.what.we.do'),
        link: '/about',
    }, {
        name: t('navbar.our.devices'),
        link: '/our-devices'
    }, {
        name: t('navbar.who.we.are'),
        link: '/who-we-are'
    }, {
        name: t('navbar.scientific.validation'),
        link: '/scientific-validation'
    }, {
        name: t('navbar.studies'),
        link: '/studies'
    }]

    const handleModalLogin = () => {
        dispatch({
            type: ModalActionType.OPEN,
            payload: {
                title: t("login"),
                content: inputsLogin,
            }
        })
    }

    const NavbarElements = ({ name, link }: INavbarElements) => {
        
        const SubMenu = ({name}: ISubMenu) => {
            return (
                <span className='hover:text-baseColor-100 py-2 cursor-pointer'>{name}</span>
            )
        }

        return (
            <div onClick={() => navigate(link)} className='group relative h-20 flex justify-center items-center'>
                <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 uppercase mr-8 text-md cursor-pointer hover:text-baseColor-100 items-center">
                    {name}
                </span>
                <div className='hidden group-hover:block bg-white h-92 w-32 absolute translate-y-24 -translate-x-4'>
                    <div className='w-full h-full flex flex-col items-center justify-center px-2'>
                        <SubMenu name={t('navbar.what.we.do')} />
                        <span className='hover:text-baseColor-100 py-2 cursor-pointer'>item1</span>
                        <span className='hover:text-baseColor-100 py-2 cursor-pointer'>item1</span>
                        <span className='hover:text-baseColor-100 py-2 cursor-pointer'>item1</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <nav className="flex items-center justify-center flex-wrap p-3 shadow-xl navbar">
            <div className="flex items-center flex-shrink-0 text-white ml-12" onClick={() => navigate('/')}>
                <LogoWB width='65' height='65' />
            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto block">
                <div className="text-sm lg:flex-grow flex items-center justify-center">
                    {itemTitle.map((item, index) => <NavbarElements key={index} name={item.name} link={item.link} />)}
                </div>
                <div className='mr-4 cursor-pointer flex w-28 justify-between items-center '>
                    <Modal />
                    <span
                        onClick={handleModalLogin}
                        className="inline-block text-sm leading-none mt-4 lg:mt-0 "
                    >
                        {!isConnected ?
                            <>
                                <img src={Avatar} alt="" className='hover:bg-baseColor-100 flex justify-end ml-10' />
                            </>
                            : <span className='hover:text-baseColor-100'>{username}</span>
                        }
                    </span>
                    <div className='h-10 w-10 rounded-full shadow-md hover:shadow-lg'>
                        <img src={UK} alt="" className='rounded-full h-10 w-10 bg-cover' />
                    </div>
                </div>
            </div>
        </nav>
    )
}