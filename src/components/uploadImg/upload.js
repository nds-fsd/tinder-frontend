import  { React, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';


const Upload = ({addPhoto}) => {
    const inputFile = useRef(null);

    const [foto, setFoto] = useState()

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
    return (
        <div>
          <form onChange={handleSubmit(onSubmit)}>
            <input {...register('photosUser')} type='file' ref={inputFile}></input>
            </form>
        </div>
        
    )
};

export default Upload;