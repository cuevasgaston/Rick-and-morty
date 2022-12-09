import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { addFavorites, deleteFavorites } from '../redux/action';
import { useState, useEffect } from 'react'
import { connect } from "react-redux";



const Contenedor = styled.div`
margin: 10px 10px 50px;
background-color: orange; 
border-radius: 1.3em;
width: 25em;
heigth: 35em;
`;
const Imagen = styled.img`
height: 60%;
width: auto;
`;
const Divprops = styled.div`
align-items: flex-end;
text-align: center;
padding: 10px;
font-family: Lato, sans-serif;
font-weight: 100;
line-height: 1.5rem;
`;
const Btn = styled.button`
display: flex;
float: rigth;
background-color: red;
color: white;
border-radius: 3px;
border: 1px solid darkred;
margin: 5px;
`;
const Name = styled.h2`
text-align: left;
display: block;
`;
const Info = styled.span`
display: flex;
justify-content: space-between;
`;

export function Card(props) {

   const [isFav, setIsFav] = useState(false)   

   useEffect(() => {
      props.myFavorites.forEach(fav => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         props.deleteFavorites(props.id)
      } else {
         setIsFav(true)
         props.addFavorites(props)
      }
   }

   return (
      <Contenedor className='contenedor'>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <Btn className='btn' onClick={() => props.onClose(props.id)}>X</Btn>
         <Imagen className='imagen' src={props.image} alt={props.name} />
         <Divprops className='divprops'>
            <Link to={`/detail/${props.id}`}>
               <Name>{props.name}</Name>
            </Link>
            <Info>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
            </Info>
         </Divprops>
      </Contenedor>
   );
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorites: function (id) {
         dispatch(addFavorites(id))
      },
      deleteFavorites: function (id) {
         dispatch(deleteFavorites(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
