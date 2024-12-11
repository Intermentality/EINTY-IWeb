import { Link } from 'react-router-dom';

export default function Home(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className='text-5xl.'>Home</h1>
            
            <h2>Pages</h2>
            <li><Link to="/issues" className="text-sky-300">Issues</Link></li>
            <li><Link to="/summary" className="text-sky-300">Summary</Link></li>
        </article>
    </div>
}