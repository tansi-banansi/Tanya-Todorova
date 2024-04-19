import { Col, Row , Image} from "react-bootstrap";
import iconAttributes from "../utilities/iconsAttributes";

export default function SkillsGallery(){

    return(
        <Row className="text-center">
            {iconAttributes.map(icon => {
                return( 
                <Col xs={icon.xs} sm={icon.sm} md={icon.md} lg={icon.lg} className="gy-5" >
                    <Image src={icon.path} className="img-fluid  object-fit-cover" />
                    <p className="text-white text-uppercase fw-medium pt-2" >{icon.title}</p>
                </Col>
                )
            })}
        </Row>
    )
}