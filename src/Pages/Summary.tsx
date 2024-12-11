import viteLogo from '/vite.svg';
import reactLogo from '@/assets/react.svg';

export default function Summary(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className='text-5xl italic underline underline-offset-4 place-content-center place-self-center'>Summary</h1>
            <p className='place-content-center place-self-center font-semibold italic'>Website directory and tool credits!</p>

            {/*Main Tools*/}
            <h2 className='text-3xl italic place-content-center place-self-center'>Main Project Tools</h2>
            <p className='place-content-center place-self-center font-semibold italic'>Two really awesome stuff!</p>
            <div className='flex items-center place-content-center'>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
        </article>
    </div>
}