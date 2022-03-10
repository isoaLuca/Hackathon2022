import { useTranslation } from "react-i18next"
import { Article } from "../../components"
import { Title } from "../../components/title/Title"
import IMG from '../../assets/img/laboratory-testing.png';

export const HomeSectionTwo = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="container-howWeWork w-full mt-20">
                <div className="w-full px-32 flex justify-center items-center">
                    <Article img={IMG} title={t('home')} content={t('home.section.2.title')} text={t('home.section.2')}/>
                </div>
            </div>
        </>
    )
}