import { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { CiFolderOn } from 'react-icons/ci'
import { IProject } from '../../types/type'
const Children = (props: IProject) => {
    const [readMore, setReadMore] = useState(false)
    const { id, description, externalLink, github, title, tech } = props.values // Destructuring props
    const project_desp: string = description
    const slice_project_desp = project_desp.slice(0, 90)
    //read more handler.
    const readmoreHandler = () => {
        setReadMore((pre) => !pre)
    }
    return (
        <>
            <div className='project_icons'>
                <div className='folder_icon'>
                    <CiFolderOn />
                </div>
                <div className='link_icon'>
                    <a href={github} target='_blank' className='github'>
                        <FiGithub />
                    </a>
                    <a href={externalLink} target='_blank' className='link'>
                        <FiExternalLink />
                    </a>
                </div>
            </div>
            <h2 className='project_title'>{title}</h2>
            <p className='project_desp'>
                {readMore ? description : slice_project_desp + '...'}
                <button className='btn' onClick={readmoreHandler}>
                    {readMore ? 'read less' : 'read more'}
                </button>
            </p>
            <div className='technlogies'>
                {tech.map((tech, index) => (
                    <code key={index}>{tech}</code>
                ))}
            </div>
        </>
    )
}

export default Children
