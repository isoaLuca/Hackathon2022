import React from "react";
import Send from '../../assets/svg/send.svg';
import TriangleBlue from '../../assets/svg/triangle-blue.svg';
import BigGrid from '../../assets/svg/grille.svg';

export const Newletter = () => {

    const [email, setEmail] = React.useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <div className="w-full newletter-container ">
                <div className="flex justify-center w-full items-center h-full">
                    <div className="w-5/6 shadow-2xl h-60 rounded-xl z-50">
                        <img src={TriangleBlue} alt="" className="absolute -translate-x-5 -translate-y-5"/>
                        <div className="w-full flex justify-center items-center py-10">
                            <h2 className="font-bold text-3xl text-baseColor-100">Subcribe to the newsletter !</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email adress' className='w-1/2 h-12 rounded-3xl border shadow-md px-4 mr-4' />
                            <div className="rounded-full shadow-lg h-14 w-14 flex items-center justify-center" onClick={(e) => handleSubmit(e)}>
                                <img src={Send} alt="send" className="w-10 h-10 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <img src={BigGrid} alt="" className="absolute right-16 mt-28 z-0"/>
                </div>
            </div>
        </>
    )
}