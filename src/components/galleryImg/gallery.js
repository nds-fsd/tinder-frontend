import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import React from 'react';

const Galery = ({photos}) => {
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dhgx6mcd8'
        }
      }); 

     
    
    return (
        <div>
            {photos.map(photo => (
    
                <div>
                    <img src={photo.url} width="100"/>
                    <AdvancedImage 
                        cldImg={cld.image(photo.public_id).resize(fill().width(800))} 
                        plugins={[placeholder({mode: 'blur'})]}
                    />
                
                </div>
            ))}
        </div>
    );
};

export default Galery;