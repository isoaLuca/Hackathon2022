import { useTranslation } from 'react-i18next'
import { HomeSectionOne } from './HomeSectionOne'
import { HomeSectionThree } from './HomeSectionThree'
import { HomeSectionTwo } from './HomeSectionTwo'
import './index.scss'
import { Newletter } from './Newletter'

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
            <HomeSectionTwo />
            <HomeSectionThree />
            <Newletter />
        </>
    )
}