interface ICard {
    title: string;
    content: string;
    svg?: string;
}

export const Card = ({title, content, svg}: ICard) => {
    return (
        <div className="flex w-72 h-80 bg-baseColor-400 shadow-lg hover:shadow-2xl cursor-pointer flex-col">
            <div className="flex justify-center items-center h-1/3 w-full -mt-12">
                <div className='h-28 w-28 rounded-full shadow-md bg-white flex justify-center items-center'>
                    <img src={svg} alt="" />
                </div>
            </div>
            <div className="h-2/3 w-full flex items-center justify-center mt-5 flex-col px-5">
                <h2 className="mb-10 uppercase font-bold text-2xl text-baseColor-500">{title}</h2>
                <span className="leading-7 text-center">{content}</span>
            </div>
        </div>
    )   
}