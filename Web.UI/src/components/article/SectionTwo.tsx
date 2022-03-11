import Triangle from '../../assets/svg/triangle.svg'
import Grid from '../../assets/svg/grille.svg'
import { Title } from '../title/Title'

interface SectionTwoProps {
    background: string
    content: string
    lineSpacing?: string
}

export const SectionTwo = ({background, content, lineSpacing}: SectionTwoProps) => {
    return (
        <>
            <div className=" w-9/12 h-full flex justify-center items-center">
                <div className='w-1/2 h-full flex flex-col items-center justify-center'>
                    <div className='absolute'>
                        <img src={Grid} alt="" className='-translate-x-52 -translate-y-64'/>
                    </div>
                    <div className='absolute'>
                        <img src={Triangle} alt="" className='translate-x-52 -translate-y-72'/>
                    </div>
                    <div>
                        <img src={background} alt="" className='z-0'/>
                    </div>
                </div>
                <div className='w-2/3 h-full flex justify-center items-center'>
                    <div className='h-3/6 bg-white shadow-lg -translate-x-32 translate-y-32 rounded-md w-full py-5 px-5'>
                        <Title name={'What we do'} subName={'We are a team of creative and passionate people who love to create.'}/>
                        <span className={lineSpacing}>{content}</span>
                    </div>
                </div>
            </div>
        </>
    )
}