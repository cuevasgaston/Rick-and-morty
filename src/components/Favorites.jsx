import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { orderCards } from '../redux/action'
import { filterCards } from '../redux/action'


function Favorites({ myFavorites }) {

    const dispatch = useDispatch();   

    return (
        <div>
            <h1>Favorites</h1>
            <div>
                <select onChange={(e) => dispatch(orderCards(e.target.value))} name='order' id=''>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>
                <select onChange={(e) => dispatch(filterCards(e.target.value))} name='filter' id=''>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                </select>
            </div>
            <div>

            </div>
            <div>
                {myFavorites.map(character => (
                    <div>
                        <h3>{character.name} - {character.id}</h3>
                        <img src={character.image} alt={character.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    }
}


export default connect(mapStateToProps)(Favorites)