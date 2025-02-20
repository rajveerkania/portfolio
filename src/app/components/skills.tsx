import React from 'react'

const Skills = () => {
    const skills = [
        {
            name: 'Next.js',
            description: 'Unconscious Competence'
        },
        {
            name: 'MERN Stack',
            description: 'Unconscious Competence'
        },
        {
            name: 'Backend with Python',
            description: 'Unconscious Competence'
        },
        {
            name: 'Cloud with AWS',
            description: 'Conscious Competence'
        },
        {
            name: 'Bash Scripting',
            description: 'Conscious Competence'
        },
        {
            name: 'Linux Administration',
            description: 'Conscious Competence'
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Skills</h2>
                <ul className="list-inside">
                    {
                        skills.map((skill, index) => (
                            <li key={index}>
                                <span className="font-medium">{skill.name}</span> <span>({skill.description})</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Skills
