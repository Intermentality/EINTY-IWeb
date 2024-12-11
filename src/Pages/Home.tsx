import { Link } from 'react-router-dom';

export default function Home(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className='text-5xl.'>Home</h1>
            <p>Everything is still in development.</p>
            <p>This is a prototype and the background will be different.</p>
            <p>Page content will also be altered in the future.</p>

            <h2>Pages</h2>
            <li><Link to="/issues" className="text-sky-300">Issues</Link></li>
            <li><Link to="/onepager" className="text-sky-300">OnePager</Link></li>
            <li><Link to="/credits" className="text-sky-300">Credits</Link></li>
        </article>
    </div>
}