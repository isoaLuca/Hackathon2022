interface IEllipse {
    svg?: any;
    description?: string;
    text?: string;
    littleDescription?: boolean;
    bgBlue?: boolean;
}

export const Ellipse = ({ svg, description, text, littleDescription, bgBlue }: IEllipse) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className={`w-32 h-32 rounded-full ${bgBlue ? 'bg-baseColor-100' : 'bg-white'} shadow-lg flex justify-center items-center border border-slate-300`}>
                   <img src={svg} alt="" />
                   <span className="text-baseColor-100 text-7xl font-extrabold">{text}</span>
                </div>
                <span className={`${littleDescription ? 'text-md text-black mt-10 text-center w-64': 'uppercase text-xl text-baseColor-100'} font-boldmt-5`}>{description}</span>
            </div>
        </>
    )
}