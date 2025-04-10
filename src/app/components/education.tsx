import React from 'react'

const Education = () => {
    const education = [
        {
            degree: 'Bachelors',
            institution: 'Rashtriya Raksha University, B.Tech in CS&E (CS)',
            date: '2021 - Present'
        },
        {
            degree: 'Higher Secondary Education',
            institution: 'Gujarat Secondary Education Board',
            date: '2018 - 2020'
        },
        {
            degree: 'Secondary Education',
            institution: 'Gujarat Secondary Education Board',
            date: '2016- 2018'
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Education</h2>
                <ul className="list-inside">
                    {
                        education.map((degree, index) => (
                            <li key={index}>
                                <span className="font-medium">{degree.degree}</span> | <span>{degree.institution}</span> | <span>{degree.date}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Education
