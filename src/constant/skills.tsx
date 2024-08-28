import {
    SiMongodb,
    SiExpress,
    SiJavascript,
    SiTypescript,
    SiCss3,
    SiMysql,
    SiTailwindcss,
    SiHtml5,
    SiPython,
    SiFirebase,
} from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { GrReactjs, GrSettingsOption } from 'react-icons/gr'
import { MdSettings } from 'react-icons/md'
import material_ui from '../assets/material_ui.svg'
import nextjs from '../assets/nextjs.svg'
import { Object } from '../types/type'

const frontend_data: Object[] = [
    { name: 'React.js', icon: <GrReactjs /> },
    { name: 'Html', icon: <SiHtml5 /> },
    { name: 'Css', icon: <SiCss3 /> },
    { name: 'Javascript', icon: <SiJavascript /> },
    { name: 'Typescript', icon: <SiTypescript /> },
    { name: 'Tailwind Css', icon: <SiTailwindcss /> },
    {
        name: 'Next.js',
        icon: <img src={nextjs} alt='next' width={'50px'} height={'50px'} />,
    },
    {
        name: 'Material Ui',
        icon: (
            <img src={material_ui} alt='icon' width={'30px'} height={'30px'} />
        ),
    },
]
const backend_data: Object[] = [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Mongodb', icon: <SiMongodb /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Mysql', icon: <SiMysql /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Rest Api', icon: <MdSettings /> },
]
export { frontend_data, backend_data }
