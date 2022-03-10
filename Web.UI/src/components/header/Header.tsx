interface IHeader {
    title: string;
    background: string;
}

export const Header = ({title, background}: IHeader) => {
    return (
        <header className="w-full h-1/3">
            <div className="flex w-full h-full justify-center items-center">
                <img src={background} alt="" />
                <span className="absolute text-4xl font-bold uppercase text-white">{title}</span>
            </div>
        </header>
    )
}