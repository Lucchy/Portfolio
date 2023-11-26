import '../styles/App.css';
import Header from './Header';
import Home from './Home'; 
import About from './About';
import Projects from './Projects';
import Form from './Form';
import Footer from './Footer';

const App = () => {

  return (
    <div className='app'>
      <Header icon = 'rocket_launch' title="Lucas.couchy"/>

      <div className='wrapper'>

        <Home title="Front-end React Developper">
          Hey, I'm <span>Lucas Couchy</span> a passionate front-end react developper based in Paris. 
        </Home>
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui cumque sapiente illo nemo harum, beatae modi quis doloribus? Aliquid dignissimos odit voluptatem quas nobis incidunt molestiae voluptates blanditiis, hic consectetur quasi consequuntur alias ut voluptatum est tempora unde autem ducimus enim omnis excepturi laudantium error esse? Mollitia, unde pariatur. In totam laudantium natus veniam at. Adipisci dolorum exercitationem id vel modi, laboriosam et reprehenderit magni natus expedita incidunt obcaecati temporibus quasi consequatur voluptatum cupiditate est tempore ratione veritatis autem veniam? Odit quibusdam ratione provident amet. Eos tempore harum voluptatem soluta ad omnis optio dolorem, porro fuga, repellat blanditiis suscipit.        
        </About>
        <Projects/>
        {/* <Form/> */}
      </div>

      <Footer title='Lucas Couchy'>
        A passionate front end developper
      </Footer>
    </div>
  );
};

export default App;
