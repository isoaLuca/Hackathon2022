import { useTranslation } from 'react-i18next';
import BG from '../../assets/img/wb.png';
import Linkdin from '../../assets/svg/linkedin-white.svg';
import { InfoItems } from '../../pages/contact-page/ContactPage';
import HOME from '../../assets/svg/home-white.svg'
import MAIL from '../../assets/svg/mail-white.svg'
import PHONE from '../../assets/svg/phone-white.svg'
import LOCA from '../../assets/svg/loca-white.svg'
import { useNavigate } from 'react-router-dom';

export const Footer = () => {

    const { t } = useTranslation();
    const navigate = useNavigate()

    return (
        <footer className="w-full bg-baseColor-100">
            <div className="flex justify-center items-center h-full">
                <div className="w-1/2 h-full flex items-center justify-center">
                    <div className='h-1/2 flex items-start flex-col w-1/2'>
                        <img src={BG} alt="" className='flex h-20'/>
                        <span className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat in neque quis tincidunt</span>
                        <img src={Linkdin} alt="" className='h-4 mt-5'/>
                    </div>
                </div>
                <div className="w-1/2 h-full flex justify-center items-center">
                    <div className='h-1/2 flex w-full'>
                        <div className='w-1/2 flex flex-col'>
                            <div className='mb-5'>
                                <span className='font-bold'>Compagny</span>
                            </div>
                            <div className='flex flex-col'>
                                <span onClick={() => navigate('/')} className='mb-3 cursor-pointer'>{t('Home')}</span>
                                <span onClick={() => navigate('/our-devices')} className='mb-3 cursor-pointer'>{t('navbar.our.devices')}</span>
                                <span onClick={() => navigate('/what-we-do')} className='mb-3 cursor-pointer'>{t('navbar.what.we.do')}</span>
                                <span onClick={() => navigate('/who-we-are')} className='mb-3 cursor-pointer'>{t('navbar.who.we.are')}</span>
                                <span onClick={() => navigate('/scientific-validation')} className='mb-3 cursor-pointer'>{t('navbar.scientific.validation')}</span>
                                <span onClick={() => navigate('/sutides')} className='mb-3 cursor-pointer'>{t('navbar.studies')}</span>
                                <span onClick={() => navigate('/our-devices')} className='mb-3 cursor-pointer'>{t('Recruitement')}</span>
                                <span onClick={() => navigate('/contact-us')} className='mb-3 cursor-pointer'>{t('Contact us')}</span>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <div className='mb-5'>
                                <span className='font-bold'>Compagny</span>
                            </div>
                            <div className="flex flex-col justify-center items-start mt-5">
                                <InfoItems svg={HOME} content={t('title')} />
                                <InfoItems svg={MAIL} content="sophie@wbt.com" link linkText="sophie@wbt.com"/>
                                <InfoItems svg={PHONE} content="+33 6 71 66 24 26" link linkText="+33671662426" type="tel"/>
                                <InfoItems svg={LOCA} content="55 Bd Vincent Auriol, 75013 Paris" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}