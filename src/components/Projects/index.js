import { useState } from "react";
import boardBooze from '../../assets/images/board-booze.png';
import bitsPleaseChat from '../../assets/images/bits-please-chat.png';

function Projects() {
    const [project] = useState([
        {
            name: 'Bits Please Chat',
            tech: 'Handlebars, Tailwind, Node, Express, Socket.io, MySQL',
            image: bitsPleaseChat,
            link: 'https://damp-river-11459.herokuapp.com/',
        },
        {
            name: 'Board & Booze',
            tech: 'HTML, CSS, Foundation, JS, API',
            image: boardBooze,
            link: 'https://sdanimc.github.io/shire-board-game/',
        },
        {
            name: 'Project 3',
            tech: 'HTML/CSS/JS',
            image: '',
            link: '',
        },
        {
            name: 'Project 4',
            tech: 'HTML/CSS/JS',
            image: '',
            link: '',
        },
        {
            name: 'Project 5',
            tech: 'HTML/CSS/JS',
            image: '',
            link: '',
        },
        {
            name: 'Bits Please Chat',
            tech: 'Handlebars, Tailwind, Node, Express, Socket.io, MySQL',
            image: bitsPleaseChat,
            link: 'https://damp-river-11459.herokuapp.com/',
        },
    ])

    return (
        <div className="lg:mx-[100px] sm:mx-[40px] mx-[20px] sm:pt-[100px] pt-[60px]">
            <h2 className="text-[#E4CAA5] md:text-[60px] text-[40px] md:pb-[30px] pb-[10px] lg:mr-[70%] md:mr-[60%] mr-[40%] border-b-4 border-[#C83649]">Projects</h2>
            <div className="flex flex-wrap md:pt-[40px] pt-[20px] lg:justify-between justify-evenly gap-y-[40px]">
                {project.map((project) => (
                    <a key={project.name}
                        href={project.link}
                        className="bg-[#3C3A40] drop-shadow-xl rounded-lg lg:w-[30%] sm:w-[40%] w-[80%] h-[450px] border-4 border-transparent hover:border-[#9EACB7]"
                    >
                        <img alt={project.name} src={project.image} className="h-[60%] w-full"/>
                        <div className="text-center px-[20px]">
                            <h3 className="text-[#E4CAA5] md:text-[25px] text-[20px] font-medium py-[10px]">
                                {project.name}
                            </h3>
                            <div className="h-[2px] bg-[#9EACB7]"></div>
                            <p className="text-[#F5F5F5] mt-[10px] pb-[20px] md:text-[16px] text-[14px]">
                                {project.tech}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects;