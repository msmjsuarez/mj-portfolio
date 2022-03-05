import {FaArrowRight} from 'react-icons/fa';

function Contact() {
    return(
        <div className="w-full max-w-lg pb-10 m-auto text-center pt-36">
            <h1 className="text-xl sm:text-3xl">Do you require professional assistance with your company?</h1>
            <a href="mailto:msmjsuarez@gmail.com">
                <span className="inline-block w-auto py-4 mt-6 text-base text-white bg-gray-800 rounded cursor-pointer font-display md:text-xl px-7">
                    <div className="flex flex-row items-center">
                        <span className="mr-3">Get in touch</span>
                        <FaArrowRight className="text-white animate-pulse" />
                    </div>
                </span>
            </a>
        </div>
    )
}

export default Contact