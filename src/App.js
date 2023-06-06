import Footer from './components/footer';
import Header from './components/header';
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
