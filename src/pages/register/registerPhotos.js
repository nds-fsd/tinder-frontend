import { React, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../../components/header/header';
import BotonesFooter from '../../components/botonesFooter/botonesFooter';
import { setUserSession, getUserToken } from '../../API/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import customFetch from '../../API';
import { isExpired, decodeToken } from 'react-jwt';
import Upload from '../../components/uploadImg/upload';
import Galery from '../../components/galleryImg/gallery';




export function RegisterPhotos() {



  const navigate = useNavigate();

  const [photoUrl, setPhotoUrl] = useState({})


  const token = getUserToken()
  const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);
  const userID = myDecodedToken.id;


   /* useEffect(() => {
        if(token) navigate('/profile');
    }, []) */

 // if(token) navigate('/register/age');







const [photos, setPhotos] = useState([]);

console.log('photosi', photos);

const addPhoto = (data) => {
  setPhotos([...photos, data])
};


fetch('https://api.cloudinary.com/v1_1/dhgx6mcd8/image/upload')
.then(response => response.json())
.then(data => setPhotoUrl(JSON.stringify(data.url)));
console.log(photoUrl)





const onSubmit = (data) => {
  customFetch("PATCH", `user/modify/${userID}`, {body: {...data, photosUser: photos }})
  .then(userSession => {
    setUserSession(userSession);
    console.log(data)
   // navigate("/register/about");
  }).catch(error  => {
    // Ideally, we should show an error message to the user
    console.log(data)
   // navigate("/register/about");
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
          <br />
        { /*  <form  onChange={handleSubmit(onSubmit)}>

           <input {...register('photosUser')} type="file" name="photosUser" className="file" />

            </form>*/}

          <Upload addPhoto={addPhoto} />
          <Galery photos={photos} />
            
            <br />
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




