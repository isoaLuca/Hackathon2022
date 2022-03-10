interface ITitle {
    name: string;
    subName: string;
}

export const Title = ({name, subName}: ITitle) => {
    return (
        <>
            <div className="h-1/3 w-full">
                <h1 className="title-components font-bold uppercase">{name}</h1>
                <h2 className="subtitle-components">{subName}</h2>
            </div>
        </>
    )
}