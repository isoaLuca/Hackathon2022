import {motion} from 'framer-motion';
import React from 'react';

interface ICardUsers {
    name: string;
    role: string;
    description: string;
    image: string;
    logo: string;
    linkedin: string;
    id?: number;
    expended?: boolean;
    societe?: string;
    setExpended?: (i: number) => void;
}

export const CardUsers = ({
    name,
    role,
    description,
    image,
    logo,
    linkedin,
    id,
    societe
}: ICardUsers) => {

    const [expended, setExpended] = React.useState(false);
    const isOpen = expended || false;
    
    const handleOpen = () => {
        if (setExpended) {
            setExpended(!expended);
        }
    }

    return (
        <>
            <motion.div 
                onClick={handleOpen}
                initial={false}
                animate={{
                    height: isOpen ? 'auto' : 250,
                    opacity: isOpen ? 2 : 1,
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                }}
                className="flex flex-col justify-center items-center bg-white shadow-lg cursor-pointer px-2 py-2">
                <div className="rounded-full bg-white flex -translate-y-12">
                    <img src={image} alt="" className="rounded-full shadow-lg w-32 h-32"/>
                </div>
                <div className="w-1/2 flex justify-center items-center flex-col -translate-y-10">
                    <span className="uppercase text-md text-baseColor-100 font-bold w-52 items-center flex justify-center">{name}</span>
                    <span className="text-sm text-baseColor-500 text-center uppercase">{role}</span>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="" className='h-3 w-3'/>
                    </a>
                </div>
                <div className="flex justify-center items-center w-64 flex-col px-2">
                    {isOpen ? <span className="text-sm text-black text-justify w-64">{description}</span> : null}
                    <div className="flex justify-start items-center">
                        <img src={societe} alt="" className='h-12 w-20'/>
                    </div>
                </div>
            </motion.div>
        </>
    )
}