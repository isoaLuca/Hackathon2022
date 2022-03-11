import { Article, Header, Section } from "../../components"
import Background from '../../assets/img/bg-about.png'
import { useTranslation } from "react-i18next"
import BGArticle1 from '../../assets/img/about-a1.png'
import { ImageShadow } from "../../components/article/ImageShadow"
import BGArticle2 from '../../assets/img/about-article2.png'
import { Title } from "../../components/title/Title"
import { SectionTwo } from "../../components/article/SectionTwo"
import BG from '../../assets/img/fresh-women.png'
import { Newletter } from "../home-page/Newletter"
import ArticleBG4 from '../../assets/img/women.png'
import ArticleBG5 from '../../assets/img/about-a5.png'

export const AboutPage = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="h-full w-full">
                <Header title={t('navbar.what.we.do')} background={Background}/>
                <div className="px-20 h-screen flex items-center justify-center">
                    <Article title={t('navbar.what.we.do')} content={t('about.article.1.title')} text={t('about.article.1.content')} img={BGArticle1} />
                </div>
                <div className="h-screen ">
                    <Section content={t('about.article.2.context')} title={<Title name={t('navbar.what.we.do')} subName={t('about.article.2.subname')}/>} component={<ImageShadow source={BGArticle2} isBottomRight/>}/>
                </div>
                <div className="h-screen bg-baseColor-200 flex justify-center">
                    <SectionTwo background={BG} content={t('about.article.3.content')} lineSpacing='leading-none'/>
                </div>
                <div className="h-screen">
                    <Section reverse content={t('about.article.5.content')} title={<Title name={t('navbar.what.we.do')} subName={t('about.article.5.title')}/>} component={<ImageShadow source={ArticleBG5} isBottomRight/>}/>
                </div>
                <div className="h-screen">
                    <Section content={t('about.article.4.content')} title={<Title name={t('navbar.what.we.do')} subName={t('about.article.4.title')} />} component={<ImageShadow source={ArticleBG4} isBottomRight/>} />
                </div>
                <div>
                    <Newletter />
                </div>
            </div>
        </>
    )
}