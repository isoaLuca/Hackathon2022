interface ITitle {
    name: string;
    subName: string;
    bigTitle?: boolean;
    textWhite?: boolean;
    textLeft?: boolean;
}

export const Title = ({ name, subName, bigTitle, textWhite, textLeft }: ITitle) => {
    return (
        <>
            {
                bigTitle ?
                    <>
                        <div className="h-1/3 w-full flex justify-center flex-col items-center">
                            <h1 className="title-components font-medium uppercase text-lg text-baseColor-200">{name}</h1>
                            <h2 className={`subtitle-components uppercase font-bold text-5xl ${textWhite ? 'text-white' : 'text-baseColor-100'}`}>{subName}</h2>
                        </div>
                    </>
                    :
                    <>
                        <div className={`h-1/3 w-full flex ${textLeft ? 'items-start': 'items-center'} justify-start flex-col`}>
                            <div>
                                <h1 className="title-components font-medium uppercase text-baseColor-200 text-lg">{name}</h1>
                                <h2 className={`subtitle-components uppercase font-bold ${textWhite ? 'text-white' : 'text-baseColor-100'} text-2xl`}>{subName}</h2>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}