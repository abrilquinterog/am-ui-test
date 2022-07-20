import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
//import axios from "axios";
import { useState } from "react";

const Modal = ({isOpen, closeModal}) =>{
    
    //Capturar valores de inputs
    const [name, setname] = useState("")
    const [dateOfBirth, setdateOfBirth] = useState("")
    const [eyeColour, seteyeColour] = useState("")
    const [hairColour, sethairColour] = useState("")
    
    //Valores de personajes para añadir 
    const newCharacterData = {
        name: name,
        dateOfBirth: dateOfBirth,
        eyeColour: eyeColour,
        hairColour: hairColour
    }

    /*Bosquejo de función con método post para añadir otro personaje
    function submit (e){
        axios.post("http://localhost:3004/characters", newCharacterData).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }*/

    const handleModalDialogClick = (e) =>{
        e.stopPropagation();
    }
    
    return (
        <>
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal_dialog" onClick={handleModalDialogClick}>
                <div className='modalTop'>
                    <h2 className="tittle-add">Agrega un personaje</h2>
                    <FontAwesomeIcon icon={faCircleXmark} onClick={closeModal} size='2x' className="btn-close"/>
                </div>
            
            <form className='form-box'>
                
                <label>
                    NOMBRE<br/>
                    <input onChange={(e)=> setname(e.target.value)} type="text" className="inp" value={name}/>
                </label>
                <label>
                    CUMPLEAÑOS <br/>
                    <input onChange={(e)=> setdateOfBirth(e.target.value)} type="text" className="inp" value={dateOfBirth}/>
                </label>
                <label>
                    COLOR DE OJOS<br/>
                    <input onChange={(e)=> seteyeColour(e.target.value)} type="text" className="inp" value={eyeColour}/>
                </label>
                <label>
                    COLOR DE PELO<br/>
                    <input onChange={(e)=> sethairColour(e.target.value)} type="text" className="inp" value={hairColour}/>
                </label>
                     
                <label className='radio'>
                    GÉNERO<br/>
                    <input
                    type="radio" name="genero" value="Mujer" className="form-check-input"/>
                    Mujer
                    <input
                    type="radio" name="genero" value="Hombre" className="form-check-input"/>
                    Hombre
                </label>


                <label className='radio'>
                    POSICIÓN<br/>
                    <input
                    type="radio" name="posicion" value="estudiante" className="form-check-input"/>
                    Estudiante
                    <input
                    type="radio" name="posicion" value="staff" className="form-check-input"/>
                    Staff
                </label>

                <label>
                    FOTOGRAFÍA   
                    <input type="file" name="picture" />
                </label>
                     <button type="submit" className='btn-send'>GUARDAR</button>
                </form>
            </div>
        
        </div> 
        </>

    );
};

export default Modal;