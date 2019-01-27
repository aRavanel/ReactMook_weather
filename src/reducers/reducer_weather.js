import { FETCH_WEATHER } from '../actions/index';

// rappel :  les reducers sont des fonctions
export default function (state = [], action) {

        switch (action.type) {
                case FETCH_WEATHER:
                        // return state.push(action.payload.data);
                        // return state.concat([action.payload.data]);
                        return [action.payload.data, ...state];


        }

        return state;
}