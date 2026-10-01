import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { useLanguage } from './i18n/LanguageProvider'

function App() {
  const { t } = useLanguage()

  return (
    <>
      <a className="skip-link" href="#main">
        {t.aria.skipToContent}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App
