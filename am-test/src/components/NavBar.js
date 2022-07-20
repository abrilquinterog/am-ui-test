import { useState } from "react";
import Modal from "./Modal";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


const NavBar = () =>{

    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }

    
    return (
        <>
        <div className="navbar">
        <button className="btn-fav">  FAVORITOS    <FontAwesomeIcon icon={faBookmark}/></button>
        <button className="btn-add" onClick={openModal}>  AGREGAR    <FontAwesomeIcon icon={faUserPlus}/></button> 
        </div>

        <Modal isOpen={isOpenModal}
                closeModal={closeModal}/>

        </>

    );
};

export default NavBar;