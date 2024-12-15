import { Paragraph } from '@/Components/Paragraph';
import { Link } from 'react-router-dom';

export default function Home(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className='text-5xl.'>Home</h1>
            <h2>Overview</h2>
            <Paragraph>
                This website is made to spread awareness over 
                isolation and the need for belonging as it's a 
                real issue that impacts individuals in families and 
                communities.  
            </Paragraph>
            <Paragraph>
                Some real examples can be seen with elderly Chinese 
                individuals living in Chicago and throughout history 
                with close-knit communities disappearing. 
            </Paragraph>
            <Paragraph>
                This is relevant since isolation and the need for 
                belonging rise as cultural and societal environments 
                change. 
                
                This also increases loneliness as even though everyone 
                is connected through the internet, 
                people are still not together in person to communicate 
                face-to-face. 
            </Paragraph>

            <h2>Pages</h2>
            <li><Link to="/issues" className="text-sky-300">Issues</Link></li>
            <li><Link to="/onepager" className="text-sky-300">OnePager</Link></li>
            <li><Link to="/credits" className="text-sky-300">Credits</Link></li>
        </article>
    </div>
}