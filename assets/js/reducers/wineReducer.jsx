
export default function (state={wines:[]}, action) {
  switch(action.type) {

    case "FETCH_WINES": {
      return {...state, wines: action.payload.wines}
      break;
    }

    case "UPDATE_WINE": {
      return {
        ...state,
        wines: state.wines.map(wine => {
          if (wine.id === action.id){
            return {
              ...wine,
               name:action.name
            }
          } else {
            return wine
          }
        })
      }
      break;
    }

    case "TOGGLE_EDIT": {
      return {
        ...state,
        wines: state.wines.map(wine => {
          if (wine.id === action.id){
            return {
              ...wine,
               editing:!action.editing
            }
          } else {
            return wine

          }

        })}
      break;
    }

    case "ADD_WINE": {
      return {...state, wines:[...state.wines, action.payload]}
      break;
    }

    case "DELETE_WINE": {
      return {...state, wines: state.wines.filter(wine =>
        wine.id !== action.payload.id
      )}
      break;
    }
  }
  return state;
};
