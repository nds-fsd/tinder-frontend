import { React } from 'react';
import { Row, Col } from 'react-bootstrap';
import './botonesFooter.css';


function BotonesFooter({backUrl, nextUrl}) {

    return( 
    
    <Row>
    <Col lg="7">
    </Col>
    <Col lg="5">
    <p>
         <a href={backUrl}> <button className="btnWhite">Back</button></a>
         <a href={nextUrl}> <button className="btnPurple">Next Step</button></a>
    </p>
    </Col>
</Row>
);

}

export default BotonesFooter;