import { React, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../../components/header/header';
import BotonesFooter from '../../components/botonesFooter/botonesFooter';
import Upload from '../../components/uploadImg/upload';
import Galery from '../../components/galleryImg/gallery';
import { setUserSession, getUserToken } from '../../API/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import customFetch from '../../API';
import { isExpired, decodeToken } from 'react-jwt';





export function RegisterPhotos() {


  const token = getUserToken()
  const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);
  const userID = myDecodedToken.id;

  const navigate = useNavigate();

  const [photoUrl, setPhotoUrl] = useState({})


   /* useEffect(() => {
        if(token) navigate('/profile');
    }, []) */

 // if(token) navigate('/register/age');


const [photos, setPhotos] = useState([]);



const addPhoto = (data) => {
  setPhotos([...photos, data])
};

const [ perfil, setPerfil ] = useState("");




const pics = photos.map((p) => (<Col><div><img width="100%" src={p} alt="" /><p><button className="picProfile" onClick={() => setPerfil(p)}>Select for profile</button></p></div></Col>));


fetch('https://api.cloudinary.com/v1_1/dhgx6mcd8/image/upload')
.then(response => response.json())
.then(data => setPhotoUrl(JSON.stringify(data.url)));
console.log(photoUrl)



const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();


const onSubmit = (data) => {
  customFetch("PATCH", `user/modify/${userID}`, {body: {photosUser: photos, picProfile: perfil}})
  .then(userSession => {
    setUserSession(userSession);
    console.log(data)
   // navigate("/register/about");
  }).catch(error  => {
    // Ideally, we should show an error message to the user
    console.log(data)
  //  navigate("/register/about");
    console.error(error);
  });
};


    return (
        <Container> 

        <Header paso4="activo" Display="yes"/>

          <Row>
            <Col lg="4"></Col>
            <Col lg="4">
          <div className="Descrip">
            <h2>We can´t wait to meet you</h2>
                <p>Please fill the detail below so that we get to <span>knou</span> you</p>
          </div>
          <br />

          <Row>
             {pics}
          </Row>  
          <br />
          <br />
          <br />
          <br />

          <Upload addPhoto={addPhoto} photos={photos} />
         
          <button className="botonGuardado" onClick={handleSubmit(onSubmit)}>Save photos</button>
            <p></p>
            <br />
            <br />


            
            <br />
            <br />
            <br />
            <br />
            <br /> 
        
                <BotonesFooter backUrl="/register/about" nextUrl="/login" />
            </Col>
            <Col lg="4">
           
           
        
            </Col>
          </Row>
        
        </Container>
    );
};




