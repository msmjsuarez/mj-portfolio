import {FaGithub, FaSkype, FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {AiFillPhone} from 'react-icons/ai';

function Footer() {
    return(
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4">
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

            <div className="flex justify-center mt-4">
                <p className="mb-4 text-black">
                    Developed by <a className="text-blue-500 hover:underline" href="mailto:msmjsuarez@mail.com">MJ Layasan</a> <span className="mr-2" role="link" aria-label='heart'>💛</span>
                </p>
            </div>

        </div>
    )
}

export default Footer