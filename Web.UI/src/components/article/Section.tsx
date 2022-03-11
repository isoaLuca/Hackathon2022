interface ISection {
    title: React.ReactNode;
    content: React.ReactNode;
    component: React.ReactNode;
    reverse?: boolean;
}

export const Section = ({title, content, component, reverse}: ISection) => {
    return (
        <>
            <div className={`w-full h-full flex items-center justify-center px-11 ${reverse ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1/2 h-1/2 flex justify-between flex-col items-center`}>
                    <div className="w-3/4 h-full flex justify-between items-start flex-col">
                        <div className="h-1/3">
                            <span className="">{title}</span>
                        </div>
                        <div className="h-96">
                            <span className="text-left section-content">{content}</span>
                        </div>
                    </div>
                </div>
                <div className={`w-1/2 h-full flex justify-center items-center`}>
                    {component}
                </div>
            </div>
        </>
    )
}