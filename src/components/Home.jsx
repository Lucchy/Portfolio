
import '../styles/home.css';


const Home = ({title, children}) => {

    return (
        <div className='home' id='home'>
            <div className='intro'>
                <div className='title'>
                    <h1>{title}</h1>
                    <p>{children}</p>
                    <div className='link-icons'>
                        <a href='https://www.linkedin.com/in/lucas-couchy-devweb/' target='_blank'><img className = 'linkedin-icon' src="/public/images/linkedin.png" alt="linkedin icon"/></a>
                        <a href='https://github.com/Lucchy' target='_blank'><img className = 'github-icon' src="/public/images/github.png" alt="Github icon"/></a>
                        <a href='mailto:lukcouchy@gmail.com'> @</a>
                    </div>
                </div>

                <div className='photo'>
                    <img src='/public/images/photoid.png'/>
                </div>
            </div>
            <div className='technos'>
                <p>My tech stack |</p>
                <div className='stacks'>
                    <img className="html" src="/public/images/html.png" alt="html" />
                    <img className="css" src="/public/images/css.png" alt="css" />
                    <img className="js" src="/public/images/js.png" alt="js" />
                    <img className="react" src="/public/images/react.webp" alt="react" />
                    <img className="python" src="/public/images/python.png" alt="python" />
                    <img className="arduino" src="/public/images/arduino.png" alt="arduino" />
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