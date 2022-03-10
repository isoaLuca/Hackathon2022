interface IEllipse {
    svg: any;
    description?: string;
}

export const Ellipse = ({ svg, description }: IEllipse) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className='w-32 h-32 rounded-full bg-white shadow-lg flex justify-center items-center border border-slate-300'>
                    <img src={svg} alt="" />
                </div>
                <span className="uppercase font-bold text-xl text-baseColor-100 mt-5">{description}</span>
            </div>
        </>
    )
}