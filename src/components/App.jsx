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
          Passionate about technology, my initial focus on mechatronics led me into the captivating world of web development. While working on a human-machine interface during my professional degree, I was fascinated by the process of coding applications.<br/>
          Building on this experience, I enhanced my skills through online training in web integration. As a self-learner, I quickly mastered the fundamentals, creating dynamic web platforms tailored to clients' needs.<br/>
          Convinced of the importance of continuous learning, my next step will be an apprenticeship. Combining theory and practice in a professional setting is the key to deepening my skills in web development.<br/>
          Every line of code I write aspires to create aesthetic and functional digital experiences. My goal is to harmonize my passion for technology with a pragmatic and creative approach to design innovative web solutions. As an aspiring professional, I am ready to take on new challenges and contribute meaningfully to the world of web development.<br/>
        </About>
        <Projects>
        In this section, you'll find projects I completed during my online training as a web integrator. These projects showcase my capabilities and highlight my skills.
        </Projects>
        {/* <Form/> */}
      </div>

      <Footer title='Lucas Couchy'>
        A passionate front end developper
      </Footer>
    </div>
  );
};

export default App;
