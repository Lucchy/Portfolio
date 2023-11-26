import '../styles/footer.css'

const Footer = ({title, children}) => {

    return (
        <footer>
            <div className="foot-ctn">
                <div className="txt">
                    <h3>&copy;{title}</h3>
                    <p>{children}</p>
                </div>

                <div className="social">
                    <h3>Social</h3>
                    <div className="icons">
                        <a href="#">
                            <img src="src/assets/images/linkedin.png" alt="LINKEDIN" />
                        </a>
                        <a href="#">
                            <img src="src/assets/images/github2.png" alt="github" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 