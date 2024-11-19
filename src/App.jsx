import Header from './components/1-header/Header';
import Main from './components/2-main/Main';
import Footer from './components/footer/Footer'
import About from './components/3-about/About'
import Project from './components/4-project/Project'
import Contact from './components/5-contact/Contact'
function App() {

  return (
    <div className="container">
        <Header/>
        <Main/>
        <div className="divider"/>
        <About/>
        <div className="divider"/>
        <Project/>
        <div className="divider"/>
        <Contact/>
        <div className="divider"/>
        <Footer/>

    </div>
  )
}

export default App
