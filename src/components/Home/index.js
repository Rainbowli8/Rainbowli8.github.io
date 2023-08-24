import LogoTitle from '../../assets/images/r-logo.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['R', 'a', 'i', 'n', 'b', 'o', 'w', ' ', 'L', 'i', ',']
    const desArray = ['a', ' ', 'C', 'S', ' ', 's', 't', 'u', 'd', 'e', 'n', 't']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
        return () => {
          clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span className={`${letterClass} _15`}> </span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={16}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={desArray}
                idx={27}/>
                </h1>
                <h2> 4th year @ University of Waterloo</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
        <Loader />
        </>
    );
}

export default Home