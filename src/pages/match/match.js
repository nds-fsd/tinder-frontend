import { React, useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/header';
import { Favorite, HeartBroken } from '@mui/icons-material';
import { setUserSession, getUserToken } from '../../API/auth';
import { isExpired, decodeToken } from 'react-jwt';
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
  const isMyTokenExpired = isExpired(token);
  const userID = myDecodedToken.id;

  const [usuarios1, setUsuarios] = useState ([1,2,3,4,5,6,7,8,9,0]);
  const [match, setMatch] = useState({});
  const [user, setUser] = useState([])
  const [clic, setClic] = useState (0);
  let primero = imgPerfil[clic];
  const total = imgPerfil.length;
  const genero = user.gener;
  const city = user.city;

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


  useEffect(() => {
    fetch(`http://localhost:5002/api/user/match/girl/Barcelona`)
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




    return (

        <Container>
           <Header />
           <Row>
               <Col lg="3"></Col>
               <Col lg="6">
                   <Row>
                      
                   <p className="helloUser"><span className="NameUser">meet</span> your half orange</p>
     

<center><img src={primero} width="450" height="350" alt="" /></center>
      

                  <p><center><button className="dislikeUser"><HeartBroken sx={{ fontSize: 40}} onClick={() => setClic(clic - 1) } /></button>       <button className="messageUser"><Favorite sx={{ fontSize: 40 }}  onClick={() => setClic(clic + 1) } /></button></center></p>

                   
                   </Row>

                   


                   
                
               </Col>
               <Col lg="3"></Col>
           </Row>
        </Container>
    );
}
