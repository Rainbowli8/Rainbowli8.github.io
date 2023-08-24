import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faCuttlefish, faDocker, faGitAlt, faJava, faPython, faReact, faUnity } from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as Clogo } from '../../assets/images/c++.svg';
import { faDharmachakra } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Loader'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
          clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't',' ','M', 'e']}
                    idx={15}
                    />
                </h1>
                <p> I'm Rainbow Li, 4th year Computer Science student studying at the University of Waterloo. I am a 
                    versatile software developer fluent in a variety of programming languages, including Python, C/C++, and Java. 
                    Whether it's implementing machine learning models, optimizing web layouts, or managing DevOps tools, 
                    I've got the skills to make waves. </p>
                <p> Outside of school, I enjoy playing puzzle games, cooking, and playing badminton. </p>
            </div>
            <div className='stage-cube-cont'>
                <div className = 'cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#306998" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faGitAlt} color="#dd0031" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faUnity} color="#626262" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faAws} color="#252F3E" />
                    </div>
                    <div className='face6'>
                    <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
                    </div>


                </div>
            </div>
        </div>
        <Loader/>
        </>
    )
}

export default About