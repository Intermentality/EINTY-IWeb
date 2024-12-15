import { Paragraph } from "../../Components/Paragraph"

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from 'react-pdf'

import PDF1 from '@/assets/PDF1.pdf'
import PDF2 from '@/assets/PDF2.pdf'


export default function Section3(){
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
    ).toString();

    return <>
        <h2>Character Analysis and Connection to Everything I Never Told You. </h2>

        <Paragraph>
            In Everything I Never Told You, 
            Lydia is a great example of loneliness and the quest for belonging. 
            
            Lydia's struggles are deeply rooted in the expectations placed upon her by her family. 
            
            Her parents, wanting her to achieve what they could not, impose their dreams on her, 
            resulting in Lydia feeling an immense pressure to conform. 
            
            This pressure isolates her, as she feels she cannot be herself or share her true feelings with anyone, 
            leading to a deep sense of loneliness. 
        </Paragraph>

        <Paragraph>
            Lydia's isolation is compounded by the societal expectations of her time.

            As a Chinese American girl in the 1970s, she faces additional cultural and racial 
            challenges that alienate her further from her peers and community. 

            This intersection of familial and societal pressures creates a complex web of 
            loneliness from which Lydia struggles to escape. 
        </Paragraph>

        <Paragraph>
            Lydia's story is not just about her personal struggle but also about the 
            broader societal implications of loneliness and the need for belonging. 
            
            It highlights how deeply interconnected these issues are with cultural, 
            familial, and societal dynamics. 
            
            By analyzing Lydia's experiences and connecting them to real-world data 
            and case studies, we gain a richer understanding of the complexities of 
            loneliness and the critical importance of encouraging genuine connections and 
            support systems in our communities. 
        </Paragraph>

        <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2 mb-2">
            <Document file={PDF1}>
                <Page 
                pageIndex={1} 
                pageNumber={1}
                width={325}
                canvasBackground="transparent"
                />
            </Document>
            <Document file={PDF2}>
                <Page 
                pageIndex={1} 
                pageNumber={1}
                width={325}
                canvasBackground="transparent"
                />
            </Document>
        </div>
    </>
}