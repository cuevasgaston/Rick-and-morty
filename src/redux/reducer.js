import { ADD_FAVORITES } from "./types"
import { DELETE_FAVORITES } from "./types"
import { FILTER } from "./types"
import { ORDER } from "./types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAVORITES:
            return {
                allCharacters: [...state.myFavorites, payload],
                myFavorites: [...state.myFavorites, payload]
            }
        case DELETE_FAVORITES:
            return {
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }
        case FILTER:
            const filteredCharacters =
                payload === 'All'
                    ? state.allCharacters
                    : state.allCharacters.filter(char =>
                        char.gender === payload)
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case ORDER:
            const sortedCharacters = state.allCharacters;
            if (payload === "Ascendente")
                sortedCharacters.sort((a, b) => a.id - b.id);
            else sortedCharacters.sort((a, b) => b.id - a.id);

            return {
                ...state,
                myFavorites: sortedCharacters
            }


        default:
            return { ...state };
    }
}


