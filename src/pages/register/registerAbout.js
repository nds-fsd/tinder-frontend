import {React,useState} from 'react';
import { Row, Col, Container, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';
import BotonesFooter from '../../components/botonesFooter/botonesFooter';
import Header from '../../components/header/header';
import Tags from '../../components/tags/tags';


 export function RegisterAbout() {

    const [ tag, setTag] = useState ();
    const [ mostraCategory, setMostracategory] = useState([]);

    let category = [];


    const categoriaUser = () => {
        category.map((u) => (
        <p>{u}</p> 
        
        ))
        console.log("prueba" + categoriaUser)
    }


 return(
    
    <Container>
        <Header paso3="activo" />
        <Row>
            <Col lg="4">

            </Col>
            <Col lg="4">
                <div className="Descrip">
                <h2 className="Center" >We can´t wait to meet you.</h2>
                <p className="Center" >Plese fill the detail below so that we get to <span>knou</span> you</p>
                <p className="Center" >Share a few words about you (psst! be creative, thats the key 😉):</p>
                 </div>
       
                

                    
                <textarea class="Center" type="textarea" rows="6" cols="50" placeholder="Your description..." />
                    

                    <p className="Center texto" >You can add up to 5 interests that we will use to find the best person for you</p>

                   
                        <div>
                           {categoriaUser}

                        </div>
                        
             
                        <Tags mostraCategory={mostraCategory} setMostracategory={setMostracategory} category={category} />


                    <p className="Center texto" >Great! we have almost everything we need! Now, get pretty! Its picture time!</p>
 

                    <BotonesFooter backUrl="/register/ubication" nextUrl="/register/photos" />
                

            </Col>

            <Col lg="4">

            </Col>

        </Row>

    </Container>
    
 );
}




