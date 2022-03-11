import { useTranslation } from "react-i18next"
import { Article, Section } from "../../components"
import { ImageShadow } from "../../components/article/ImageShadow";
import { Title } from "../../components/title/Title";
import BGA2 from '../../assets/img/science-a2.png'
import BGA3 from '../../assets/img/science-a3.png'

interface ILocalCard {
    title: string;
    content: string;
}

const LocalCard = ({title, content}: ILocalCard) => {
    const { t } = useTranslation()
    return (
        <div className="h-72 w-64 shadow-lg hover:shadow-xl px-5 py-5 hover:bg-baseColor-100 group">
            <div className="h-2/3 flex justify-start items-start flex-col w-full">
                <h2 className="text-2xl font-bold group-hover:text-white">{title}</h2>
                <span className="text-baseColor-100 leading-7 group-hover:text-white mt-5">{content}</span>
            </div>
            <div className="h-1/3 flex justify-end items-end">
                <a href="" target='_blank' className="text-sm text-baseColor-100 group-hover:text-white hover:underline">{'Read more ->'}</a>
            </div>
        </div>
    )
}

export const SciencePage = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="h-full w-full">
                <div className="h-screen px-24 flex justify-center items-center">
                    <Article title={t('navbar.who.we.are')} img={'BGA1'} content={t('aboutus.article.1.title')} text={t('aboutus.article.1.content')}/>
                </div>
                <div className="h-screen w-full flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-3 w-8/12">
                        <LocalCard title={t('aboutus.article.2.title')} content={t('Je suis le content')}/>
                        <LocalCard title={t('aboutus.article.2.title')} content={t('Je suis le content')}/>
                        <LocalCard title={t('aboutus.article.2.title')} content={t('Je suis le content')}/>
                        <LocalCard title={t('aboutus.article.2.title')} content={t('Je suis le content')}/>
                        <LocalCard title={t('aboutus.article.2.title')} content={t('Je suis le content')}/>
                    </div>
                </div>
                <div className="h-screen">
                    <Section reverse title={<Title name={t('navbar.scientific.validation')} subName={t('sciences.article.2.title')}/>} content={t('lorem')} component={<ImageShadow source={BGA2} />} />
                </div>
                <div className="h-screen">
                    <Section title={<Title name={t('navbar.scientific.validation')} subName={t('sciences.article.2.title')}/>} content={t('lorem')} component={<ImageShadow source={BGA3} />} />
                </div>
            </div>
        </>
    )
}