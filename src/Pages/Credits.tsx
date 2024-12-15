import { LinkNewWindow } from '@/Components/Link';
import viteLogo from '/vite.svg';
import reactLogo from '@/assets/react.svg';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from 'react-pdf'

import WorkCitedPDF from "@/assets/WorkCited.pdf"

export default function Credits(){
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
    ).toString();

    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className='text-5xl italic underline underline-offset-4 place-content-center place-self-center'>Credits</h1>
            <p className='place-content-center place-self-center font-semibold italic'>Website directory and tool credits!</p>

            {/* Controbutions */}
            <div className='pl-20 pr-20 place-content-center place-self-center w-full max-w-sm md:max-w-xl -mt-4'>
                <h2 className='text-3xl italic place-content-center place-self-center'>Website Contributions</h2>
                <li>Asher - Summary of Webpage.</li>
                <li>Johnathan - Four Sections.</li>
                <li>Daryl - Providing Multimedia.</li>
                <li>Keijiro - Home & Coding.</li>
            </div>

            {/* Credits */}
            <div className='pl-20 pr-20 place-content-center place-self-center w-full max-w-sm md:max-w-xl -mt-4'>
            <h2 className='text-3xl italic place-content-center place-self-center'>Credits</h2>
                <LinkNewWindow href="https://www.shadertoy.com/view/MsB3WR">Background: By @reinder</LinkNewWindow>
                <br/>
                <LinkNewWindow href="https://github.com/Intermentality/EINTY-IWeb">Github Project Files</LinkNewWindow>
            </div>

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

            {/* Work Cited */}
            <h2 className='text-3xl italic place-content-center place-self-center -mt-0'>Work Cited</h2>
            <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-1 mb-2 place-content-center place-self-center">
                <Document file={WorkCitedPDF}>
                    <Page 
                    pageIndex={1} 
                    pageNumber={1}
                    width={550}
                    canvasBackground=""
                    />
                </Document>
                <Document file={WorkCitedPDF}>
                    <Page 
                    pageIndex={1} 
                    pageNumber={2}
                    width={550}
                    canvasBackground=""
                    />
                </Document>
            </div>
        </article>
    </div>
}