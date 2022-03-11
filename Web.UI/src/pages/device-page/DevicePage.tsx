import { useTranslation } from "react-i18next" 
import { Header } from "../../components"
import Background from '../../assets/img/bg-about.png'

export const DevicePage = () => {

    const { t } = useTranslation()

    return (
        <>
            <div className="h-screen">
                <Header title={t('navbar.what.we.do')} background={Background}/>
            </div>
        </>
    )
}