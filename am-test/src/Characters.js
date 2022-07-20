import {useState, useEffect} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const api="http://localhost:3004"

const Characters = () =>{

    //Contenido de los personajes renderizados en ui
    const [characters, setcharacters] = useState([]);

    //Se muestran todos los personajes al cargar la página
    useEffect(()=> {
        getCharacters().then(setcharacters);
    }, []);

    //Método get para traer a todos los personajes
    const getCharacters = () => 
    axios.get( `${api}/characters`).then((response)=>{
        console.log(response);
        return response.data; 
    });

    //Función para filtrar
    const handleFilter = async (value) => {
        return await axios.get( `${api}/characters?hogwartsStudent=${value}`)
        .then((response)=>{
            setcharacters(response.data);
        })
        .catch((err)=> console.log(err));

    };
    
    return(
        <>
        <div className="btn-container">
        <button className="btn-fltr" onClick={()=> handleFilter('true')}>ESTUDIANTES</button>
        <button className="btn-fltr" onClick={()=> handleFilter('false')}>STAFF</button>
        </div>

        <div className="charactertContainer">
        {characters.map((character)=> (
            <div className="characterCard">
            <div className="imageContainer" id="imageback"><img className='img-pic' src={character.image} alt='' /></div>
            <div className="descriptionContainer">
                <div className="card-top">
                    {character.alive ? "VIVO" : "FINADO"} / {character.hogwartsStudent ? "ESTUDIANTE  ": "STAFF  "}
                    <FontAwesomeIcon icon={faBookmark} size="2x" className="icon-book" />
                </div>
            <h2 className="nameChar">{character.name}</h2>
            <p><strong>Cumpleaños:</strong> {character.dateOfBirth}</p>
            <p><strong>Género:</strong> {character.gender}</p>
            <p><strong>Color de ojos:</strong> {character.eyeColour}</p>
            <p><strong>Color de pelo:</strong> {character.hairColour}</p>
            </div>
        </div>
        ))}
        </div>
        </>

    );
};


export default Characters;