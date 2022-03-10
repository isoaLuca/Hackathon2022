import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux';
import LogoWB from '../../assets/svg/LogoWB'
import { ModalActionType } from '../../redux/reducer/Modal/action';
import { InputTypes } from '../../types/Inputs';
import { Modal } from '../modal/Modal';

interface INavbarElements {
    name: string;
    link: string;
}

export const Navbar = () => {

    const { t } = useTranslation()

    const dispatch = useDispatch()

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
        link: '/what-we-do'
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

    const NavbarElements = ({name, link}: INavbarElements) => {
        return (
            <span onClick={() => console.log(link)}>
                <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 uppercase mr-8 text-md cursor-pointer hover:text-cyan-400">
                    {name}
                </span>
            </span>
        )
    }

    return (
        <nav className="flex items-center justify-between flex-wrap p-3 shadow-xl">
            <div className="flex items-center flex-shrink-0 text-white ml-12">
                <LogoWB width='65' height='65' />
            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto block">
                <div className="text-sm lg:flex-grow flex items-center justify-center">
                    {itemTitle.map((item, index) => <NavbarElements key={index} name={item.name} link={item.link} />)}
                </div>
                <div className='bg-gray-600'>
                    <Modal />
                    <span 
                        onClick={handleModalLogin}
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 cursor-pointer"
                    >
                        Sign In
                    </span>
                </div>
            </div>
        </nav>
    )
}