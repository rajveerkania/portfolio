import React from 'react'

const Inprogress = () => {
    const inProgress = [
        {
            name: 'AWS Cloud Practitioner',
            description: 'Certification'
        },
        {
            name: 'DomainName Details Extractor',
            description: 'Web Scrapper'
        },
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Work in Progress</h2>
                <ul className="list-inside">
                    {
                        inProgress.map((project, index) => (
                            <li key={index}>
                                <span className="font-medium">{project.name}</span> <span>({project.description})</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Inprogress
