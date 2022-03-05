import { BsWordpress } from 'react-icons/bs';
import { GrReactjs } from 'react-icons/gr';
import { SiPhp, SiTailwindcss, SiLaravel, SiApachecordova, SiCodeigniter, SiBootstrap } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import jQueryMobile from '../images/jquery-mobile-36.png';


function Skills() {
    return (
        <div className="justify-center max-w-4xl py-12 mx-auto" id='tech'>
            <p className="pt-4 text-2xl font-bold text-center text-black sm:text-4xl">
                What Tech I Use
            </p> 
            <div className="flex flex-wrap justify-center pt-2">

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiPhp color='#787cb4' className="mx-auto text-4xl" />
                <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">PHP</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <GrMysql color='#015b84' className="mx-auto text-4xl" />
                <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">MySQL</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <BsWordpress className="mx-auto text-4xl text-gray-800" />
                <p className="mt-6 font-semibold text-center text-l sm:text-2xl">WordPress</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiLaravel color='#ff2d20' className="mx-auto text-4xl" />
                <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">Laravel</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiCodeigniter color='#dd4814' className="mx-auto text-4xl" />
                <p className="mt-6 font-semibold text-center text-l sm:text-2xl">CodeIgniter</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiApachecordova color='#3f4c58' className="mx-auto text-4xl" />
                <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">Cordova</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <img className="w-10 m-auto my-0" src={jQueryMobile} />    
                <p className="font-semibold text-center mt-7 text-l">jQuery Mobile</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <GrReactjs color='#61dbfb' className="mx-auto text-4xl" />
                <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">React</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiTailwindcss color='#38bdf8' className="mx-auto text-4xl" />
                <p className="mt-6 text-base font-semibold text-center sm:text-xl">Tailwind CSS</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiBootstrap color='#8212FA' className="mx-auto text-4xl" />
                <p className="mt-6 font-semibold text-center text-l sm:text-2xl">Bootstrap</p>
                </div>       
                
            </div>
        </div>
    )
}

export default Skills