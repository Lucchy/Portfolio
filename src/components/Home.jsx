
import '../styles/home.css';


const Home = ({title, children}) => {

    return (
        <div className='home' id='home'>
            <div className='intro'>
                <div className='title'>
                    <h1>{title}</h1>
                    <p>{children}</p>
                    <div className='link-icons'>
                        <a href='https://www.linkedin.com/in/lucas-couchy-devweb/' target='_blank'><img className = 'linkedin-icon' src="src/assets/images/linkedin.png" alt="linkedin icon"/></a>
                        <a href='https://github.com/Lucchy' target='_blank'><img className = 'github-icon' src="src/assets/images/github.png" alt="Github icon"/></a>
                        <a href='mailto:lukcouchy@gmail.com'> @</a>
                    </div>
                </div>

                <div className='photo'>
                    <img src='src/assets/images/photoid.png'/>
                </div>
            </div>
            <div className='technos'>
                <p>My tech stack |</p>
                <div className='stacks'>
                    <img className="html" src="src/assets/images/html.png" alt="html" />
                    <img className="css" src="src/assets/images/css.png" alt="css" />
                    <img className="js" src="src/assets/images/js.png" alt="js" />
                    <img className="react" src="src/assets/images/react.webp" alt="react" />
                    <img className="python" src="src/assets/images/python.png" alt="python" />
                    <img className="arduino" src="src/assets/images/arduino.png" alt="arduino" />
                </div>
            </div>
            <div className='icon'>
                <span className="material-symbols-outlined">
                    keyboard_double_arrow_down
                </span>
            </div>
        </div>
    );
};

export default Home;