import { React, useState } from 'react';
import { Col, Row, Modal, Button } from 'react-bootstrap';
import  './tags.css';



function Tags () {



     const [ categorias, setCategorias] = useState ([]);
    const [inputValue, setInputValue] = useState("");
    const [nomCategory, setnomCategory] = useState("");
    const [indexCategory, setIndexCategory] = useState("");


    const tagsTotal = categorias.length;
    
   

    const etiquetado = (e) => {
     

        if(e.key === 'Enter' && inputValue != "" && tagsTotal <= 4 ) {
            //validar inputValue > 5
            console.log(inputValue);
            setCategorias([...categorias, inputValue]);
            setInputValue("");
            console.log(categorias)
        } else if (tagsTotal == 5) {
           alert("Has superado el limite")
            setInputValue("");
            let bloqueo = "readonly";
        
        }
    }

   const removeTAG = (i) =>
    {
        setnomCategory(i.target.value)

        const index = categorias.indexOf(nomCategory)
        
       //categorias.splice(index,1)
       console.log(categorias)
       console.log(nomCategory)
       console.log(indexCategory)
       console.log(index)
    
    }


 

    return(
        <Row>
            <Col lg="12">
    <div> {categorias.map(category => (<button className="tagUno" value={category} onClick={removeTAG} > 
            
            <a className="tagIcon"></a>{category}</button>))}
           <center><div className="contenedor"><a className="tagIcon"></a><input className="inputTags"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" name="etiquetas" disabled={categorias.length > 4}  placeholder="Type here and press enter" onKeyPress={etiquetado}  /></div></center></div>
            </Col>
        </Row>

    );
}


export default Tags;