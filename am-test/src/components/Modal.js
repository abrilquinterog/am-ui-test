import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Modal = ({isOpen, closeModal}) =>{

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
                    <input type="text" className="inp"/>
                </label>
                <label>
                    CUMPLEAÑOS <br/>
                    <input type="text" className="inp"/>
                </label>
                <label>
                    COLOR DE OJOS<br/>
                    <input type="text" className="inp"/>
                </label>
                <label>
                    COLOR DE PELO<br/>
                    <input type="text" className="inp"/>
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
                     <input type="submit" value="GUARDAR" className='btn-send'/>
                </form>
            </div>
        
        </div> 
        </>

    );
};

export default Modal;