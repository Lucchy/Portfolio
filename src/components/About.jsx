import '../styles/about.css';
import { saveAs } from 'file-saver';

const About = ({children}) => {

    const handleDownlaod = ()=> {
        const pdfUrl = '/images/Cv.pdf';
        saveAs(pdfUrl, 'CV_Dev-web_Lucas_Couchy');
    }
    return (
        <div className='about' id='about'>
            <h2>About me</h2>
            <div className='container'>
                <div className='text'>
                    <p>{children}</p>
                    <button onClick={handleDownlaod}>
                        Download my resume
                    </button>
                </div>
                
                <div className='photo-about'>
                    <img src="/public/images/photoid.png" alt="photo2" />
                </div>
            </div>
        
        </div>
    )
};

export default About;