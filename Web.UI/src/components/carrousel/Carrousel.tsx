import './index.scss'

interface IProps {
    title: string;
    content: string
}

export const Carrousel = ({title, content}: IProps) => {
    return (
        <>
            <div className="h-72 w-52 shadow-lg bg-baseColor-400 rounded-md ">
                <div className='container-car relative'>
                    <div className="h-1/3 flex justify-center items-center mb-5">
                        <h2 className="uppercase text-baseColor-100 text-xl font-bold">{title}</h2>
                    </div>
                    <div className="h-1/3 flex justify-center items-center px-5">
                        <span className="text-center text-baseColor-500 leading-6">
                            {content}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}