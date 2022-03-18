import { React, useState, useEffect } from 'react';
import { Col, Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/header';
import './profile.css';
import { getUserToken } from '../../API/auth';
import { decodeToken } from 'react-jwt';



export function Profile() {


  

    const [user, setUser] = useState ({});
    const token = getUserToken()
    const myDecodedToken = decodeToken(token);
    const userID = myDecodedToken.id;
    const tags = user.tagsUser;


  

    



    
    const imgViaje1 ="https://images.pexels.com/photos/5589359/pexels-photo-5589359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje2 ="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
    const imgViaje3 ="https://images.pexels.com/photos/7429616/pexels-photo-7429616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje4 ="https://images.pexels.com/photos/1835927/pexels-photo-1835927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje5 ="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje6 ="https://images.pexels.com/photos/6238186/pexels-photo-6238186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    
    useEffect(() => {
        fetch(`http://localhost:5002/api/user/${userID}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Algo ha fallado");
            }
            return response.json();
          })
          .then((json) => {
            setUser(json);

          })
          .catch((error) => {
            console.log(error);
          })
      }, []);
  
      const pics = user.photosUser;

      const Gallery = pics.map((p) => (<Col lg={4}><img className="Galeriaimg" src={p} alt=""/></Col>))

    return (

        <Container>
           <Header />
           <Row>
               <Col lg="3"></Col>
               <Col lg="6">
                   <Row>
                      
    <p className="helloUser">Hello <span className="NameUser">{user.firstName}</span> ¿How are you?</p>
                   <img className="fotoPerfil" src={user.picProfile} alt="" />
                   <div  className="userDescription">
                     <p><h3>Description:</h3></p>
                   <p>{user.descriptionUser}</p>
                   </div>
                   
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
              
                    
                <div className="intereses">
                
                    <h3>Intereses:</h3>
                <p>
                <center>{tags && tags.map((tag) => (<button className="tagUno"> <a className="tagIcon"></a>{tag}</button>))}</center> 
                </p>
                </div>

                   
                <Container>
                    <Row>
                        
                       {Gallery}
                          
      
                    </Row>
                
                </Container>       
                            
                   </Row>

               </Col>
               <Col lg="3"></Col>
           </Row>
        </Container>
    );
}

