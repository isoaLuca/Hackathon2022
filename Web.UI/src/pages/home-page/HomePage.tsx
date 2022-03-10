import { useTranslation } from 'react-i18next'
import { HomeSectionOne } from './HomeSectionOne'
import './index.scss'

export const HomePage = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="w-full home-page">
                <div className='w-2/4 h-full container-title'>
                    <h1 className='font-bold text-4xl text-white'>{t('title.home.screen')}</h1>
                </div>
            </div>
            <HomeSectionOne />
        </>
    )
}