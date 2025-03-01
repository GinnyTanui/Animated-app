import Header from "./components/Header"
import About from "./components/About" 
import Customer from "./components/Customer" 
import Blog from "./components/Blog"
function App() {
  

  return (
    <> 
    <section id="header">
    <Header/>  
    </section>
    <section id="about">
    <About/>  
    </section> 
    <section id="customer">
    <Customer/> 
    </section> 
    <section id="blog">
    <Blog/> 
    </section>
    </>
  )
}

export default App
