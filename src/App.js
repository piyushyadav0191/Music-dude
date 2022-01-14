import './App.css';
import ParticlesBg from 'particles-bg';
import NavbarMenu from './Navbar';
import 'tachyons';
import Blog from './Blog';


  function App(){
    return (
      <div>
        <div>...</div>
        <ParticlesBg type="lines" num={1200} color="#0000" bg={true}   />
        
        <NavbarMenu />
          <Blog />

      </div>
    )}
  


export default App;
