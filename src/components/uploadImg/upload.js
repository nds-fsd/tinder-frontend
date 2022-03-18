import  { React, useRef} from 'react';
import { useForm } from 'react-hook-form';
import customFetch from '../../API';
import { isExpired, decodeToken } from 'react-jwt';
import { setUserSession, getUserToken } from '../../API/auth';


const Upload = ({addPhoto, photos}) => {
    const inputFile = useRef(null);

    const token = getUserToken()
  const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);
  const userID = myDecodedToken.id;


    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = () => {
 
        const files = inputFile.current.files;
        const formData = new FormData();
        const url = "https://api.cloudinary.com/v1_1/tindanuclius/image/upload";
      
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          formData.append("file", file);
          formData.append("upload_preset", "ttqpt83w");
          fetch(url, {
            method: "POST",
            header: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
          })
            .then((response) => {
              return response.json();
            })
            .then((image) => {
        
              addPhoto(image.url);
            });
        }
    };

    const onSave = (data) => {
      customFetch("PATCH", `user/modify/${userID}`, {body: {photosUser: photos}})
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
        <div>
          <form onChange={handleSubmit(onSubmit)}>
            <input {...register('photosUser')} type='file' ref={inputFile} className="file" multiple></input>
            </form>
        </div>
        
    )
};

export default Upload;