import { React, useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/header';
import { Favorite, HeartBroken } from '@mui/icons-material';
import { getUserToken } from '../../API/auth';
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';



export function Match() {
    
    const navigate = useNavigate();

    useEffect(() => {
        const token = getUserToken()
        if(!token) navigate('/login');
    }, []) 

  const imgPerfil = ["https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/5589359/pexels-photo-5589359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/7429616/pexels-photo-7429616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1835927/pexels-photo-1835927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6238186/pexels-photo-6238186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"];

  const token = getUserToken()
  const myDecodedToken = decodeToken(token);

  const userID = myDecodedToken.id;

  const [match, setMatch] = useState([]);
  const [user, setUser] = useState([])
  const [clic, setClic] = useState (0);
 

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

  const orientation = user.orientation;
  const city = user.city;
  console.log(orientation, city)
 useEffect(() => {
    fetch(`http://localhost:5002/api/user/match/${orientation}/${city}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Algo ha fallado");
        }
        return response.json();
      })
      .then((json) => {
        setMatch(json);

      })
      .catch((error) => {
        console.log(error);
      })
  }, []);


const matches = match.map((m) => (

<h3 className="NombreMatch">{m.firstName}, {m.age} years, from {m.city} </h3>))

let primero = matches[clic];



    return (

        <Container>
           <Header />
           <Row>
               <Col lg="3"></Col>
               <Col lg="6">
                   <Row>
                      
                   <p className="helloUser"><span className="NameUser">meet</span> your half orange</p>
     
                    <Col lg={12}>
                        <img width="450" src={imgPerfil[1]} alt="" />
                        <Col lg={8}>{primero} </Col>
                    </Col>
                
                <p>
                      <center>
                        <button className="dislikeUser"><HeartBroken sx={{ fontSize: 40}} onClick={() => setClic(clic - 1) } /></button>
                        <button className="messageUser"><Favorite sx={{ fontSize: 40 }}  onClick={() => setClic(clic + 1) } /></button>
                        </center>
                </p>

                   </Row>

                   
               

                   
                
               </Col>
               <Col lg="3"></Col>
           </Row>
        </Container>
    );
}

