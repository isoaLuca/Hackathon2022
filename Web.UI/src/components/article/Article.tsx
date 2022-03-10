import { Title } from "../title/Title";
import { ImageForArticle } from "./ImageForArticle";
import Line from '../../assets/svg/Line.svg'

interface IArticle {
    title: string;
    content: string;
    img: string;
    textOnLeft?: boolean;
    text?: string;
}

export const Article = ({
    title,
    content,
    img,
    textOnLeft,
    text,
}: IArticle) => {
    return (
        <>
            <div className={`w-full flex justify-center ${!textOnLeft ? 'flex-row-reverse' : ''} `}>
                <div className="w-1/2 flex justify-start flex-col items-start">
                    <div className="items-start flex justify-start h-1/3">
                        <Title name={title} subName={content} bigTitle={false} />
                    </div>
                    <div className="flex w-full justify-center h-2/3">
                        <img src={Line} alt="" className="mr-10"/>
                        <span className="leading-loose text-left">
                            {text}
                        </span>
                    </div>
                </div>
                <div className="flex w-1/2">
                    <ImageForArticle source={img} grid />
                </div>
            </div>
        </>
    )
}