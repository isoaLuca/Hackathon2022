import { Article, Ellipse, Header, Section } from "../../components"
import Background from '../../assets/img/bg-about.png'
import { useTranslation } from "react-i18next"
import BGA1 from '../../assets/img/bg-aboutus-a1.png'
import { ImageShadow } from "../../components/article/ImageShadow"
import BGA2 from '../../assets/img/women-face.png'
import { Title } from "../../components/title/Title"
import ORDI from '../../assets/svg/Frame01.svg'
import FICHE from '../../assets/svg/Frame02.svg'
import DASH from '../../assets/svg/Frame04.svg'
import CHECK from '../../assets/svg/check-circle.svg'
import BGA31 from '../../assets/img/buissness-women.png'
import BGA32 from '../../assets/img/medical-science.png'
import BGA33 from '../../assets/img/card-medical.png'
import BGA34 from '../../assets/img/abstract-bg-bulle.png'
import { CardUsers } from "../../components/cards/CardUsers"
import Linkdin from '../../assets/svg/linkedin.svg'
import QIMA from '../../assets/svg/qima.svg'
import HOPI from '../../assets/svg/assistance-hopital.svg'
import WB from '../../assets/svg/Frame.svg'
import SOPHIE from '../../assets/img/sophie.png'
import STAN from '../../assets/img/stan.png'
import NICO from '../../assets/img/nico.png'
import RICH from '../../assets/img/richard.png'
import MEL from '../../assets/img/meliss.png'
import DUONG from '../../assets/img/duong.png'

export const AboutUsPage = () => {
    const { t } = useTranslation()

    const ElementArticle = [
        {
            content: t('aboutus.article.4.content.1'),
            icon: CHECK,
        }, {
            content: t('aboutus.article.4.content.2'),
            icon: CHECK,
        }, {
            content: t('aboutus.article.4.content.3'),
            icon: CHECK,
        }, {
            content: t('aboutus.article.4.content.4'),
            icon: CHECK,
        }
    ]

    const Users = [
        {
            name: t('card.user.1.name'),
            role: t('card.user.1.role'),
            description: t('card.user.1.description'),
            image: SOPHIE,
            logo: Linkdin,
            linkedin: 'https://www.linkedin.com/in/jean-marc-dubois-b8a8b8a4/',
            societe: WB,
        }, {
            name: t('card.user.2.name'),
            role: t('card.user.2.role'),
            description: t('card.user.2.description'),
            image: STAN,
            logo: Linkdin,
            linkedin: 'https://www.linkedin.com/in/jean-marc-dubois-b8a8b8a4/',
            societe: WB,
        }, {
            name: t('card.user.3.name'),
            role: t('card.user.3.role'),
            description: t('card.user.3.description'),
            image: NICO,
            logo: Linkdin,
            linkedin: 'https://www.linkedin.com/in/jean-marc-dubois-b8a8b8a4/',
            societe: QIMA,
        }, {
            name: t('card.user.4.name'),
            role: t('card.user.4.role'),
            description: t('card.user.4.description'),
            image: RICH,
            logo: Linkdin,
            linkedin: 'https://www.linkedin.com/in/jean-marc-dubois-b8a8b8a4/',
            societe: QIMA,
        }, {
            name: t('card.user.5.name'),
            role: t('card.user.5.role'),
            description: t('card.user.5.description'),
            image: DUONG,
            logo: Linkdin,
            linkedin: 'https://www.linkedin.com/in/jean-marc-dubois-b8a8b8a4/',
            societe: HOPI,
        }, {
            name: t('card.user.6.name'),
            role: t('card.user.6.role'),
            description: t('card.user.6.description'),
            image: MEL,
            logo: Linkdin,
            linkedin: 'https://www.linkedin.com/in/jean-marc-dubois-b8a8b8a4/',
            societe: HOPI,
        }
    ]
    return (
        <>
            <div className="h-full w-full">
                <Header background={Background} title={t('navbar.who.we.are')}/>
                <div className="h-screen px-12 w-full">
                    <div className="h-full w-full flex justify-center items-center">
                        <Article title={t('navbar.who.we.are')} img={BGA1} content={t('aboutus.article.1.title')} text={t('aboutus.article.1.content')}/>
                    </div>
                </div>
                <div className="h-screen w-full">
                    <Section title={<Title name={t('navbar.who.we.are')} subName={t('aboutus.article.2.title')} />} content={t('aboutus.article.2.content')} component={<ImageShadow source={BGA2}/>}/>
                </div>
                <div className="h-1/2 mt-20">
                    <Title name={t('navbar.who.we.are')} subName={t('aboutus.article.3.title')} />
                    <div className="flex justify-evenly mt-10">
                        <Ellipse svg={ORDI} description={t('aboutus.ellipse.1')} littleDescription bgBlue/>
                        <Ellipse svg={FICHE} description={t('aboutus.ellipse.2')} littleDescription bgBlue/>
                        <Ellipse svg={DASH} description={t('aboutus.ellipse.3')} littleDescription bgBlue/>
                    </div>
                </div>
                <div className="h-screen mt-32 w-full px-24">
                    <Article title={t('navbar.who.we.are')} img={BGA1} content={t('aboutus.article.1.title')} text={t('aboutus.article.1.content')}/>
                </div>
                <div className="h-screen flex w-full">
                    <div className="w-1/2 flex justify-start flex-col h-3/4">
                        <Title name={t('navbar.who.we.are')} subName={t('aboutus.article.4.title')}/>
                        <div className="w-full flex justify-center flex-col px-32">
                            {ElementArticle.map((item, index) => (
                                <div key={index} className="flex justify-start items-center mt-10">
                                    <img src={item.icon} alt="" className="w-5 h-5"/>
                                    <span className="text-baseColor-100 text-lg ml-4">{item.content}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center flex-col">
                        <div className="flex w-2/3 mb-5 justify-center">
                            <div className="flex h-full justify-end items-end">
                                <img src={BGA31} alt="" className="w-48 h-52 mr-5 flex shadow-md"/> 
                            </div>
                            <div>
                                <img src={BGA32} alt="" className="w-72 h-80 shadow-md"/>
                            </div>
                        </div>
                        <div className="flex w-2/3 justify-center">
                            <div className="flex h-full justify-start items-start mr-5">
                                <img src={BGA33} alt="" className="w-28 h-32 flex shadow-md"/> 
                            </div>
                            <div>
                                <img src={BGA34} alt="" className="w-52 h-64 shadow-md"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-screen flex w-full justify-center items-center flex-col">
                    <Title name={t('navbar.who.we.are')} subName={t('aboutus.article.5.title')}/> 
                    <div className="grid grid-cols-3 gap-10 h-full">
                        {Users.map((item, index) => (
                            <CardUsers 
                                id={index}
                                name={item.name}
                                role={item.role}
                                description={item.description}
                                image={item.image}
                                logo={Linkdin}
                                linkedin={item.linkedin}
                                societe={item.societe}
                            />
                        ))}
                    </div>           
                </div>
            </div>
        </>
    )
}