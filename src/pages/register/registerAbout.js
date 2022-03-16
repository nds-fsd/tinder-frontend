import {React,useState, useEffect} from 'react';
import { Row, Col, Container, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';
import BotonesFooter from '../../components/botonesFooter/botonesFooter';
import Header from '../../components/header/header';
import Tags from '../../components/tags/tags';
import { setUserSession, getUserToken } from '../../API/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import customFetch from '../../API';
import { isExpired, decodeToken } from 'react-jwt';


 export function RegisterAbout() {

    const [ tag, setTag] = useState ();
    const [ mostraCategory, setMostracategory] = useState([]);
    const [ categorias, setCategorias] = useState ([]);


    let category = [];


    const categoriaUser = () => {
        category.map((u) => (
        <p>{u}</p> 
        
        ))


    }


    const navigate = useNavigate();


    const token = getUserToken()
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
    const userID = myDecodedToken.id;


   /* useEffect(() => {
        if(token) navigate('/profile');
    }, []) */

   // if(token) navigate('/register/age');



const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    customFetch("PATCH", `user/modify/${userID}`, {body: {...data, tagsUser: categorias }})
    .then(userSession => {
      setUserSession(userSession);
      navigate("/register/photos");
    }).catch(error  => {
      // Ideally, we should show an error message to the user
      navigate("/register/photos"); 
      console.error(error);
    });
  };


 return(
    
    <Container>
        <Header paso3="activo" Display="yes" />
        <Row>
            <Col lg="4">

            </Col>
            <Col lg="4">
                
                <div className="Descrip">
                <h2 className="Center" >We can´t wait to meet you.</h2>
                <p className="Center" >Plese fill the detail below so that we get to <span>knou</span> you</p>
                <p className="Center" >Share a few words about you (psst! be creative, thats the key 😉):</p>
                 </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                

                    
               <center> <textarea {...register('descriptionUser')}  class="Center" type="textarea" rows="6" cols="50" placeholder="Your description..." /></center>
                    
                    
                    <p className="Center texto" >You can add up to 5 interests that we will use to find the best person for you</p>

                   
                        <div>
                           {categoriaUser}

                        </div>
                     
                        <p className="Center" >Press <span>space</span> for add your tag</p>
                        <center>  <Tags mostraCategory={mostraCategory} setMostracategory={setMostracategory} setCategorias={setCategorias} categorias={categorias} /> </center> 
                        <br />

                    <p className="Center texto" >Great! we have almost everything we need! Now, get pretty! Its picture time!</p>
 

                    <BotonesFooter backUrl="/register/ubication" nextUrl="/register/photos" />
                    </form>
                
            </Col>

            <Col lg="4">

            </Col>

        </Row>

    </Container>
    
 );
}




