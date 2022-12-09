import React from 'react';
import Card from './Card';
import styled from "styled-components";

const Lista = styled.div`
padding: 0;
margin-bottom: 3em;
display: flex;
justify-content: center;
aling-items: center;
`;

// export default function Cards(props) {
//    const {characters} = props;
//    const listItems = characters.map((character) =>
//       <li>{Card(character)}</li>
//    );
//    return (<Lista>
//       <ul>{listItems}</ul>
//    </Lista>
//    );
// }


export default function Cards(props) {
   const { characters, onClose } = props;

   return (
      <div>
         {characters.map(character => (
            <Card
               name={character.name}
               gender={character.gender}
               species={character.species}
               image={character.image}
               key={character.id}
               id={character.id}
               onClose={onClose}
            />
         ))}
      </div>
   );
}