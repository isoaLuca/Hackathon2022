interface ITitle {
    name: string;
    subName: string;
    bigTitle?: boolean;
}

export const Title = ({ name, subName, bigTitle }: ITitle) => {
    return (
        <>
            {
                bigTitle ?
                    <>
                        <div className="h-1/3 w-full flex justify-center flex-col items-center">
                            <h1 className="title-components font-medium uppercase">{name}</h1>
                            <h2 className="subtitle-components uppercase font-bold">{subName}</h2>
                        </div>
                    </>
                    :
                    <>
                        <div className="h-1/3 w-full flex justify-start flex-col items-center">
                            <div>
                                <h1 className="title-components font-medium uppercase">{name}</h1>
                                <h2 className="subtitle-components uppercase font-bold">{subName}</h2>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}