import './index.scss'

interface IImageShadow {
    source: string;
    isBottomRight?: boolean;
}

export const ImageShadow = ({source, isBottomRight}: IImageShadow) => {
    return (
        <div className="container-img">
            <div className={`relative duplicate ${isBottomRight ? 'is-bottom-right' : ''}`}>
                <img src={source} alt="" className='shadow-2xl' />
            </div>
        </div>
    )
}