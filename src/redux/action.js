import { ADD_FAVORITES } from "./types";
import { DELETE_FAVORITES } from "./types";
import { FILTER } from "./types";
import { ORDER } from "./types";

export function addFavorites(id) {
    return {
        type: ADD_FAVORITES,
        payload: id,
    };
}

export function deleteFavorites(id) {
    return {
        type: DELETE_FAVORITES,
        payload: id,
    };
}

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender,
    };
}

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order,
    };
}