import QIMA from '../../assets/svg/qima.svg';
import HOPITAL from '../../assets/svg/assistance-hopital.svg'

export const HomeSectionThree = () => {
    return (
        <>
            <div className='w-full h-60 flex justify-center bg-baseColor-200 items-center'>
                <img src={QIMA} alt="" className='mr-20 h-20'/>
                <img src={HOPITAL} alt="" className='h-20 w'/>
            </div>
        </>
    )
}