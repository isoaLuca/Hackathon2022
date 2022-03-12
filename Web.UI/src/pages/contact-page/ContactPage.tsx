import { useTranslation } from "react-i18next"
import { Title } from "../../components/title/Title"
import HOME from '../../assets/svg/home.svg'
import MAIL from '../../assets/svg/mail.svg'
import PHONE from '../../assets/svg/phone.svg'
import LOCA from '../../assets/svg/loca.svg'
import { InputTypes } from "../../types/Inputs"
import { Form } from "../../components"


interface Iprops {
    svg: string
    content: string
    link?: boolean
    linkText?: string
    type?: string
}

export const InfoItems = ({ svg, content, link, linkText, type }: Iprops) => {
    return (
        <div className="flex items-center">
            <img src={svg} alt="" className="h-7 w-7 mr-5 mb-5" />
            {link ? <a href={type === 'tel' ? `${'tel:'+linkText}` : `${'mailto:'+linkText}`} className="text-base text-base-500 mb-5">{content}</a> : <span className="text-base text-base-500 mb-5">{content}</span>}
        </div>
    )
}

const InputForm: InputTypes[] = [
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        required: true,
    }, {
        name: 'email',
        label: 'Email',
        type: 'text',
        required: true,
    }, {
        name: 'phone',
        label: 'Phone',
        type: 'text',
    }, {
        name: 'subject',
        label: 'Subject',
        type: 'text',
    }, {
        name: 'message',
        label: 'Message',
        type: 'textarea',
    }
]

export const ContactPage = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="h-screen w-full flex justify-center items-center">
                <div className="flex justify-center items-center h-4/6 w-full">
                    <div className="w-1/2 h-3/4 flex flex-col justify-center items-start px-10">
                        <Title name="Contact Us" subName="Get In Touch With Us" textLeft />
                        <span className="mt-4">{t('lorem')}</span>
                        <div className="flex flex-col justify-center items-start mt-8">
                            <InfoItems svg={HOME} content={t('title')} />
                            <InfoItems svg={MAIL} content="sophie@wbt.com" link linkText="sophie@wbt.com"/>
                            <InfoItems svg={PHONE} content="+33 6 71 66 24 26" link linkText="+33671662426" type="tel"/>
                            <InfoItems svg={LOCA} content="55 Bd Vincent Auriol, 75013 Paris" />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.2851446958016!2d2.369443715828832!3d48.83369947928507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672221d61c6b7%3A0x3387b92c3dcdb4!2s55%20Bd%20Vincent%20Auriol%2C%2075013%20Paris!5e0!3m2!1sen!2sfr!4v1647042521298!5m2!1sen!2sfr" width="400" height="300" style={{ border: '0' }} aria-hidden="false" tabIndex={0}></iframe>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex flex-col">
                        <div className="flex justify-start items-center w-full h-full">
                            <Form 
                                inputs={InputForm}
                                submitLabel={t('send')}
                                onSubmit={(e) => {console.log(e)}}
                                contact
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}