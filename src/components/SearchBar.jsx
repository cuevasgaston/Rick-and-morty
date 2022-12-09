import styled from "styled-components";
import { useState } from "react";

const Btn = styled.button`
float: rigth;
background-color: green;
color: white;
border-radius: 5px;
border: 1px solid black;
margin: 15px;
`;


export default function SearchBar(props) {
   const [character, setCharacter] = useState('');

   function handleChange(e) {
      setCharacter(e.target.value);
   }

   return (
      <div>
         <input type="search" value={character} onChange={handleChange} />
         <Btn onClick={() => props.onSearch(character)}>Agregar</Btn>
      </div>
   );
}
