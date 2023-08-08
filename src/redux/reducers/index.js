import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducers";

export const rootReducer = combineReducers({
    titleReducer,
    usersReducer
})