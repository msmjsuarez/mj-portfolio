import ScrollIntoView from "react-scroll-into-view";
import {FaChevronDown} from "react-icons/fa";

function About() {
    return (
        <div className="max-w-4xl mx-auto mt-20">
            <p className="text-2xl font-bold text-center text-black md:text-4xl">About Me</p>
            <p className="mt-4 text-base leading-relaxed text-center text-gray-600 sm:text-xl">I have been working as a full-stack developer for almost 15 years. I developed websites with PHP and MySQL for the backend. For the frontend, I used different frameworks, such as Tailwind CSS, Bootstrap, ReactJS, and many others, depending on the client's request.</p>

            <p className="mt-4 text-base leading-relaxed text-center text-gray-600 sm:text-xl">WordPress websites and plugin development are my specialties. It's been almost a decade since I've worked with WordPress.</p>
            
            <p className="mt-4 text-base leading-relaxed text-center text-gray-600 sm:text-xl">When your organization requires it, I can quickly master new skills.</p>

        <ScrollIntoView selector="#tech">
            <div className="p-20 mx-auto"></div>
            <FaChevronDown className="mx-auto text-3xl text-blue-500 animate-bounce" />
        </ScrollIntoView>

        </div>
    )
}

export default About