import { useTranslation } from "react-i18next"
import { Ellipse } from "../../components/ellipse/Ellipse"
import { Title } from "../../components/title/Title"
import './index.scss'
import ADN from '../../assets/svg/Vector.svg';

export const HomeSectionOne = () => {
    const { t } = useTranslation()

    const titles = [{
            description: t('home.section.1.ellipse.1'),
        }, {
            description: t('home.section.1.ellipse.2'),
        }, {
            description: t('home.section.1.ellipse.3'),
        }, {
            description: t('home.section.1.ellipse.4'),
    }]

    return (
        <>
            <div className="container-howWeWork w-full bg-baseColor-200 mb-20">
                <div className="items-center flex justify-center w-full h-1/3">
                    <Title name={t('home')} subName={t('home.section.1')} bigTitle/>
                </div>
                <div className="flex w-full justify-center -mt-5">
                    <span className="w-3/6 h-1/6 items-center text-center">
                        {t('home.section.1.text')}
                    </span>
                </div>
                <div className='w-full h-3/4 flex justify-center px-52'>
                    <div className='w-full h-3/4 flex justify-between items-center'>
                        {titles.map((title, index) => (
                            <Ellipse key={index} svg={ADN} description={title.description} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}