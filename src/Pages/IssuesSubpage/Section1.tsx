import { YouTube } from "@/Components/YouTube"
import { Paragraph } from "../../Components/Paragraph"

export default function Section1(){
    return <>
        <h2>Key Statistics on Loneliness and Belonging </h2>

        <Paragraph>
            Loneliness and the need for belonging are pressing issues that affect people on a global scale. 

            For instance, a 2020 survey by Cigna found that more than 60% of Americans reported feeling lonely, 
            marking a significant increase from previous years. The implications of loneliness are extensive. 
            
            According to "The Far-reaching Consequences of Loneliness in America," 
            loneliness is associated with a 29% increase in the risk of heart disease and a 32% increase in the risk of stroke. 
            Furthermore, research by Allen et al. highlights the importance of social connections, 
            noting that individuals with a strong sense of belonging are less likely to suffer from anxiety and depression. 
            
            Specifically, their study reveals that people with high levels of social connection have a 
            50% greater likelihood of survival compared to those with weaker social ties. 
            
            These statistics highlight the critical need to address loneliness and foster a sense of belonging within our communities.  
        </Paragraph>

        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mb-2">
            <YouTube url="https://www.youtube.com/embed/RsXLT2z3X8g?si=374o-PKV3NtCwtOX" />
            <YouTube url="https://www.youtube.com/embed/1qegujBS18k?si=yQKeBKXcvM-Sf4aB" />
        </div>
        <YouTube url="https://www.youtube.com/embed/1qegujBS18k?si=yQKeBKXcvM-Sf4aB" />
    </>
}