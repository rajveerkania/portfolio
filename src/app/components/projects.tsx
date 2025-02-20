import React from 'react'

const Projects = () => {
    const projects = [
        {
            name: 'Portfolio',
            link: 'https://rajveer.space',
            description: 'Web Application'
        },
        {
            name: 'SITAICS ERP',
            link: 'https://github.com/rajveerkania/SITAICS',
            description: 'Web Application'
        },
        {
            name: 'PriceWise',
            link: 'https://github.com/rajveerkania/pricewise',
            description: 'Web Scrapper'
        },

        {
            name: 'Task Manager',
            link: 'https://github.com/rajveerkania/task-manager',
            description: 'Web Application'
        },
        {
            name: 'TermiNews',
            link: 'https://github.com/rajveerkania/TermiNews',
            description: 'Web Scrapper'
        },
        {
            name: 'Quiz App',
            link: 'https://github.com/rajveerkania/quiz-app',
            description: 'Web Application'
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Projects</h2>
                <ul className="ist-inside">
                    {
                        projects.map((project, index) => (
                            <li key={index}>
                                <a href={project.link} target='_blank' className='text-primary underline italic'>
                                    <span>{project.name}</span>
                                </a> | <span>{project.description}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Projects
