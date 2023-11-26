import '../styles/about.css';


const About = ({children}) => {
    return (
        <div className='about' id='about'>
            <h2>About me</h2>
            <div className='container'>
                <div className='text'>
                    <p>{children}</p>
                    <button>
                        Download my resume
                    </button>
                </div>
                
                <div className='photo-about'>
                    <img src="src/assets/images/photoid.png" alt="photo2" />
                </div>
            </div>
        
        </div>
    )
};

export default About;