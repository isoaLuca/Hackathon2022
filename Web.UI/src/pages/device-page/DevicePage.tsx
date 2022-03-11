import { useTranslation } from "react-i18next" 
import { Ellipse, Header } from "../../components"
import Background from '../../assets/img/bg-about.png'
import { Title } from "../../components/title/Title"
import { Card } from "../../components/cards/Card"
import { SectionTwo } from "../../components/article/SectionTwo"
import BGA2 from '../../assets/img/devices-a2.png'
import ReactPlayer from "react-player";
import Video from '../../assets/video/motion-design.mp4'
import BEST from '../../assets/svg/meilleur.svg'
import NEW from '../../assets/svg/new.svg'
import DIFF from '../../assets/svg/different.svg'

export const DevicePage = () => {

    const { t } = useTranslation()

    return (
        <>
            <div className="h-full w-full">
                <Header title={t('navbar.our.devices')} background={Background}/>
                <div className="h-96">
                    <Title bigTitle name={t('navbar.our.devices')} subName={t('devices.article.1.title')}/>
                    <div className="flex w-full h-full justify-center mt-5">
                        <span className="w-4/6 h-1/6 flex items-center text-center leading-8">
                            {t('devices.article.1.content')}
                        </span>
                    </div>
                </div>
                <div className="w-full h-96 px-10 flex justify-evenly items-center">
                    <Card title={t('cards.1.title')} content={t('cards.1.content')} svg={NEW}/>
                    <Card title={t('cards.2.title')} content={t('cards.2.content')} svg={DIFF}/>
                    <Card title={t('cards.3.title')} content={t('cards.3.content')} svg={BEST}/>
                </div>
                <div className="h-screen w-full flex justify-center items-center bg-baseColor-400">
                    <SectionTwo background={BGA2} content={t('devices.article.2.content')} lineSpacing='leading-7'/>
                </div>
                <div className="bg-baseColor-100 flex justify-center h-full items-center flex-col" style={{height: '80vh'}}>
                    <div className="">
                        <Title bigTitle textWhite name={t('navbar.our.devices')} subName={t('devices.article.3.title')} />
                    </div>
                    <div className="flex w-3/4 justify-between items-center mt-20">
                        <div className="flex flex-col">
                            <Ellipse text="1"/>
                            <span className="text-white font-bold text-xl text-center">{t('algo.1')}</span>
                        </div>
                        <div className="translate-y-24">
                            <Ellipse text="2"/>
                            <span className="text-white font-bold text-xl text-center">{t('algo.2')}</span>
                        </div>
                        <div className="">
                            <Ellipse text="3"/>
                            <span className="text-white font-bold text-xl text-center">{t('algo.3')}</span>
                        </div>
                        <div className="translate-y-24">
                            <Ellipse text="4"/>
                            <span className="text-white font-bold text-xl text-center">{t('algo.4')}</span>
                        </div>
                    </div>
                </div>
                <div className="h-screen w-full flex flex-col justify-start items-center">
                    <div className="mt-5 mb-10">
                        <Title name={t('navbar.our.devices')} subName={t('devices.article.4.title')}/>
                    </div>
                    <div className="w-4/6 h-4/6 flex justify-center items-center">
                        <ReactPlayer 
                            url={Video}
                            playing={true}
                            loop={true}
                            width='100%'
                            height='100%'
                            controls={true}
                            className='shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}