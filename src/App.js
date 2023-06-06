import Footer from './components/footer/footer';
import Header from './components/header/header';
import {componentToRender } from './hooks/useComponent'

function App() {
  

  
  return (
    <main>
    <Header></Header>
    {componentToRender()}
    <Footer></Footer>
    </main>
  );
}

export default App;
