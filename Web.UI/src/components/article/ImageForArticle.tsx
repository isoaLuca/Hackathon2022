import Grid from '../../assets/svg/grille-md.svg';
import GridLight from '../../assets/svg/grille-lg.svg';

interface IProps {
    source: any,
    grid?: boolean,
    duplicate?: boolean,
}

export const ImageForArticle = ({
    source,
    grid = false,
    duplicate = false,
}: IProps) => {
    return (
        <>
            <div className="">
                {grid ? <><img src={GridLight} className='w-32 h-32 absolute ml-96 -mt-20'/></> : ''}
                <img
                    className="w-full h-full"
                    src={source}
                    alt="img"
                />
                {grid ? <><img src={Grid} className='w-32 h-32 absolute ml-20 -mt-5'/></> : ''}
            </div>
        </>
    )
}