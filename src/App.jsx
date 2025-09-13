import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div className='container'>
      <section id="#home">
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App