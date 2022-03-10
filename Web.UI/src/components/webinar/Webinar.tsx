import { useTranslation } from "react-i18next"

export const Webinar = () => {

    const { t } = useTranslation()

    return (
        <>
            <div className="w-full h-10 flex items-center justify-center" style={{ backgroundColor: 'rgba(176, 212, 214, 1)' }}>
                <span className="w-1/4" />
                <span className="text-white font-bold w-3/4 items-center flex justify-center hover:underline hover:cursor-pointer">{t('webinar')}</span>
                <span className="w-1/4 flex justify-end mr-4 font-bold cursor-pointer" onClick={() => console.log('je veux le fermer')}>X</span>
            </div>
        </>
    )
}