import { useTranslation } from "react-i18next"
import { Article, Ellipse, Section } from "../../components"
import BGA1 from '../../assets/img/studies.png'
import { ImageShadow } from "../../components/article/ImageShadow"
import { Title } from "../../components/title/Title"
import BGA2 from '../../assets/img/studies-a1.png'
import BGA3 from '../../assets/img/studies-a2.png'
import BGA4 from '../../assets/img/studies-a4.png'
import BGA5 from '../../assets/img/studies-a3.png'

interface Iprops {
    topText: string
    bottomText: string
}

const LocalizedCard = ({topText, bottomText}: Iprops) => {
    return (
        <div className="bg-white w-52 h-72 shadow-md rounded-xl px-5 py-5 justify-center items-center flex flex-col">
            <span className="h-1/2 items-end flex justify-end text-center mb-3">{topText}</span>
            <hr className="h-0.5 w-1/2 bg-baseColor-100" />
            <span className="h-1/2 text-center mt-3">{bottomText}</span>
        </div>
    )
}

export const StudiesPage = () => {

    const { t } = useTranslation()

    return (
        <>
            <div className="h-full w-full">
                <div className="h-screen px-24 flex justify-center items-center bg-baseColor-400">
                    <Section reverse title={<Title name={t('navbar.studies')} subName={t('studies.article.1.title')} />} content={t('lorem')} component={<ImageShadow source={BGA1} />} />
                </div>
                <div className="h-96">
                    <div className="flex justify-center items-center h-full w-full">
                        <Ellipse description="lorem" littleDescription img={BGA2}/>
                        <Ellipse description="lorem" littleDescription img={BGA3}/>
                        <Ellipse description="lorem" littleDescription img={BGA4}/>
                        <Ellipse description="lorem" littleDescription img={BGA5}/>
                    </div>
                </div>
                <div className="h-screen bg-baseColor-100 flex justify-center items-center flex-col w-full">
                    <Title name={t('navbar.studies')} subName={t('studies.article.2.title')} bigTitle textWhite />
                    <div className="w-7/12 flex justify-center items-center">
                        <div className="w-full flex justify-evenly">
                            <LocalizedCard topText={t('studies.article.3.title')} bottomText={t('studies.article.3.content')} />
                            <LocalizedCard topText={t('studies.article.4.title')} bottomText={t('studies.article.4.content')} />
                            <LocalizedCard topText={t('studies.article.5.title')} bottomText={t('studies.article.5.content')} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}