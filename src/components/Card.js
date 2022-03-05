import profile from '../images/mj-profile.png';
import {FaGithub, FaSkype, FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {AiFillPhone} from 'react-icons/ai';

function Card () {
    return(
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-xl p-5 mx-auto bg-white shadow-xl rounded-xl">
                <div className="">
                    <img className="w-32 mx-auto rounded-full shadow-xl drop-shadow-sm" src={profile} alt="" />
                </div>
                <div className="mt-5 text-center">
                    <p className="text-xl text-gray-900 sm:text-2xl">MJ Layasan</p>
                    <p className="inline-block w-auto px-5 pt-2 pb-4 text-xs text-gray-600 border-b-2 sm:text-base">Full Stack Developer / WordPress Website and Plugin Developer / Tech Support / Instructor</p>
                </div>
                <div className="flex justify-center mt-4 align-center">
                    <a className="p-1 m-1 text-xl text-gray-800 transition-colors duration-300 rounded-full sm:m-2 sm:p-2 hover:bg-gray-800 hover:text-white" href="https://github.com/msmjsuarez/" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        <span className="sr-only">Github</span>
                    </a>

                    <a className="p-1 m-1 text-xl text-blue-600 transition-colors duration-300 rounded-full sm:m-2 sm:p-2 hover:bg-blue-600 hover:text-white" href="https://www.linkedin.com/in/mjlayasan/" target="_blank">
                        <FaLinkedin />
                        <span className="sr-only">Linkedin</span>
                    </a>

                    <a className="p-1 m-1 text-xl transition-colors duration-300 rounded-full sm:m-2 sm:p-2 text-sky-500 hover:bg-sky-500 hover:text-white" href="skype:live:mjyurag?chat">
                        <FaSkype />
                        <span className="sr-only">Skype</span>
                    </a>

                    <a className="p-1 m-1 text-xl text-red-600 transition-colors duration-300 rounded-full sm:m-2 sm:p-2 hover:bg-red-600 hover:text-white" href="mailto:msmjsuarez@gmail.com">
                        <SiGmail />
                        <span className="sr-only">Gmail</span>
                    </a>

                    <a className="p-1 m-1 text-xl text-gray-600 transition-colors duration-300 rounded-full sm:m-2 sm:p-2 hover:bg-gray-600 hover:text-white" href="tel:+639355688730">
                        <AiFillPhone />
                        <span className="sr-only">Mobile</span>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Card