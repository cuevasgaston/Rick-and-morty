import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Detail() {
    const { detailId } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                window.alert('No hay personajes con ese ID');
            });
        return setCharacter({});
    }, [detailId]);

    return (        
        <div>
            {character ? (
                <div>
                    <div>
                        <button onClick={() => navigate('/home')}>Volver</button>
                    </div>
                    <div>
                        <h1>Nombre: {character.name}</h1>
                        <h2>Status: {character.status}</h2>
                        <h2>Especie: {character.specie}</h2>
                        <h2>Genero: {character.gender}</h2>
                        <h2>Origen: {character.origin?.name}</h2>
                    </div>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}