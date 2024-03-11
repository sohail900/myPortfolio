import { FC } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { CiFolderOn } from 'react-icons/ci'
const Children: FC = () => {
    const project_desp: string =
        'The biggest engineering challenge we faced up front was finding a content management system our clients could use to curate the content of the mobile app without needing to touch any code. Our ideal CMS needed to have the following:'
    const slice_project_desp = project_desp.slice(0, 90)

    return (
        <>
            <div className='project_icons'>
                <div className='folder_icon'>
                    <CiFolderOn />
                </div>
                <div className='link_icon'>
                    <span className='github'>
                        <FiGithub />
                    </span>
                    <span className='link'>
                        <FiExternalLink />
                    </span>
                </div>
            </div>
            <h2 className='project_title'>
                Building a Social Media Clone using Mern Stack
            </h2>
            <p className='project_desp'>{slice_project_desp}...</p>
            <div className='technlogies'>
                <code>React</code>
                <code>Node.js</code>
                <code>Express</code>
                <code>Mongodb</code>
                <code>Material UI</code>
            </div>
        </>
    )
}

export default Children
