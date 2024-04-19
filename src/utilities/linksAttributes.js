import linkAttributes from "../components/linksComponent";
import { Image} from "react-bootstrap";

function LinksComponent() {
    return(
        <div className="">
            {linkAttributes.map(item => {
                return( 
                    <a href={item.link}><Image src={item.path} className="img-fluid object-fit-cover mx-2 " style={{maxHeight:'20px'}} alt={item.title}/></a>
                )
            })}
        </div>
    )
}

export default LinksComponent;