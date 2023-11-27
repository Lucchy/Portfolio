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
        Passionné par la technologie, mon orientation initiale en mécatronique m'a conduit vers le monde captivant du développement web. En réalisant une interface homme-machine au cours de ma licence pro, j'ai été fasciné par le processus de codage d'applications.<br/>
Fort de cette expérience, j'ai intensifié mes compétences par le biais d'une formation en ligne en intégration web. En tant qu'autodidacte, j'ai rapidement maîtrisé les bases, créant des plateformes web dynamiques et adaptées aux besoins des clients.<br/>
Convaincu de l'importance de l'apprentissage continu, mon prochain pas sera une formation en alternance. Allier théorie et pratique dans un contexte professionnel est la clé pour approfondir mes compétences en développement web.<br/>
Chaque ligne de code que je rédige aspire à créer des expériences numériques esthétiques et fonctionnelles. Mon objectif est d'harmoniser ma passion pour la technologie avec une approche pragmatique et créative pour concevoir des solutions web innovantes. En tant que professionnel en devenir, je suis prêt à relever de nouveaux défis et à contribuer de manière significative au monde du développement web.<br/>
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
