import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

import Section1 from './IssuesSubpage/Section1';
import Section2 from './IssuesSubpage/Section2';
import Section3 from './IssuesSubpage/Section3';
import Section4 from './IssuesSubpage/Section4';

export default function Issues(){
    const [paragraphText, setParagraphText] = useState(<Section1 />);

    function changeText(id: number){
       if(id === 1){
        setParagraphText(<Section1 />)
       }
       if(id === 2){
        setParagraphText(<Section2 />)
       }
       if(id === 3){
        setParagraphText(<Section3 />)
       }
       if(id === 4){
        setParagraphText(<Section4 />)
       }
    }

    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">

            {/* Navbar */}
            <div className="place-content-center place-self-center">
                <h2 className="text-5xl italic underline underline-offset-4 place-content-center place-self-center mb-4">Issues</h2>
                <ButtonGroup size="large" variant="outlined" aria-label="Basic button group" color="warning">
                    <Button onClick={() => {changeText(1);}}>Key Stats</Button>
                    <Button onClick={() => {changeText(2);}}>Cases</Button>
                    <Button onClick={() => {changeText(3);}}>Analysis</Button>
                    <Button onClick={() => {changeText(4);}}>Historical</Button>
                </ButtonGroup>
            </div>

            {/*Content*/}
            {paragraphText}
        </article>
    </div>
}