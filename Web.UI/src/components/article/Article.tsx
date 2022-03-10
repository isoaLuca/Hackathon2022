import { Title } from "../title/Title";

interface IArticle {
    title: string;
    content: string;
    img: string;
    textOnLeft: boolean;
}

export const Article = ({
    title,
    content,
    img,
    textOnLeft,
}: IArticle) => {
    return (
        <>
            <div className="container-article w-full">
                <div className="items-center flex justify-center w-full h-1/3">
                    <Title name={title} subName={content} />
                </div>
                <div className="flex w-full justify-center -mt-5">
                    <span className="w-3/6 h-1/6 items-center text-center">
                        {content}
                    </span>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    )
}