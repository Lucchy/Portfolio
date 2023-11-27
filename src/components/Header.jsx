import '../styles/header.css';

const Header = ({title, icon}) => {

    return (
        <header>
            <div className='logo'>
                <div>
                    <span className="material-symbols-outlined">
                    {icon}
                    </span>
                </div>
                <p>{title}</p>
            </div>
            
            <nav>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='<#projects'>Projects</a>
            </nav>
        </header>
    );

};

export default Header;