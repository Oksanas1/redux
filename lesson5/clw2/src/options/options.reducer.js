import { TOGGLE_OPTION } from "./options.actions";
import options from "./options";

const initialState = {
    optionsList: options,
    selected: [],
};

const optionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_OPTION:
      const { optionId } = action.payload;
      const newSelectedId = state.selected.includes(optionId)
        ? state.selected.filter(id => id !== optionId)
        : state.selected.concat(optionId);
      return ({
        ...state,
        selected: newSelectedId,
      });
    default:
      return state;
  }
}

export default optionsReducer;