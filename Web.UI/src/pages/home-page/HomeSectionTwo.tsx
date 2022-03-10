import { useTranslation } from "react-i18next"
import { Title } from "../../components/title/Title"

export const HomeSectionTwo = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="container-howWeWork w-full">
                <div className="items-center flex justify-center w-full h-1/3">
                    <Title name={t('home')} subName={t('home.section.2')} />
                </div>
                <div className="flex w-full justify-center -mt-5">
                    <span className="w-3/6 h-1/6 items-center text-center">
                        {t('home.section.2.text')}
                    </span>
                </div>
                <div className="">

                </div>
            </div>
        </>
    )
}