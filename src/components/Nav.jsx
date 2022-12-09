import styled from "styled-components";
import SearchBar from "./SearchBar";
import { Link, } from 'react-router-dom';

const Lista = styled.div`
padding: 0;

`;


export default function Nav(props) {


   return (
      <Lista>
         <Link to={'/home'}>
            <span>Home</span>
         </Link>
         <Link to={'/about'}>
            <span>About</span>
         </Link>
         <Link to={'/favorites'}>
            <span>Favorites</span>
         </Link>
         <SearchBar onSearch={props.onSearch}>
         </SearchBar>
      </Lista>
   )
}