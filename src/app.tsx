import { lazy, Suspense } from 'react'
const Social = lazy(() => import('./components/socialmedia/Social'))
const Navbar = lazy(() => import('./layouts/navbar/Navbar'))
const Home = lazy(() => import('./components/home/Home'))
const About = lazy(() => import('./components/about/About'))
const Project = lazy(() => import('./components/project/Project'))
const Skills = lazy(() => import('./components/skills/Skills'))
const Contact = lazy(() => import('./components/contact/Contact'))
const Footer = lazy(() => import('./layouts/footer/Footer'))
import './app.scss'
const App: React.FC = () => {
    return (
        <>
            <main className="container">
                <Suspense fallback={<Loading />}>
                    <section className='components'>
                        <Home />
                        <About />
                        <Skills />
                        <Project />
                        <Contact />
                        <Footer />
                    </section>
                    <Navbar />
                    <Social />
                </Suspense>
            </main>
        </>
    )
}
const Loading = () => {
    return <h1 className='loading'>ms.web</h1>
}
export default App
