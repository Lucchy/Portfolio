import'../styles/card.css';
import React, {useState, useEffect} from 'react';
import { useSpring, animated} from 'react-spring';

const Card = ({url, img, title, description, tags}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=> {
        setIsVisible(true);
    }, []);

    const props = useSpring({
        opacity: isHovered ? 1 : 0,
        transform: `translateY(${isHovered ? '0%' : '5%'})`
    });


    return(
        <a href={url} target='_blank' rel='noopener noreferrer'
        className={`card ${isVisible ? 'fade-in':''} ${isHovered ? 'hovered': ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
                <img src={img} alt={title} />
            {isHovered && (
                <animated.div className="card-content" style={props}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="tags">
                        {tags.map((tag, index)=> (
                            <p key={index}>{tag}</p>
                        ))}
                    </div> 
            </animated.div>
            )}
        </a>
    );
};

export default Card;