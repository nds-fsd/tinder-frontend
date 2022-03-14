import React, { useRef } from 'react';
var cloudinary = require ('cloudinary')

const Delete = ({deletePhoto}) => {
    const deleteFile = useRef(null);


const onDelete = () => {
debugger;
const files = deleteFile.current.files;
const formData = new Formdata();
const url = 
cloudinary.uploader.destroy('sample', function(result) { console.log(result) });
}

}