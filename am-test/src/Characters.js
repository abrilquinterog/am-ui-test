import {useState, useEffect} from "react";
import axios from "axios";

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
        <button onClick={()=> handleFilter('false')}>Staff</button>
        <button onClick={()=> handleFilter('true')}>Students</button>


        <div className="charactertContainer">
        {characters.map((character)=> (
            <div className="characterCard">
            <div className="imageContainer"><img className='img' src={character.image} alt='' /></div>
            <div className="productHeader">
            <p>{character.name}</p>
            <p>Cumpleaños:{character.dateOfBirth}</p>
            <p>Género:{character.gender}</p>
            <p>Color de ojos:{character.eyeColour}</p>
            <p>Color de pelo:{character.hairColour}</p>
            </div>
        </div>
        ))}
        </div>
        </>

    );
};


export default Characters;