import { combineReducers } from "redux";
import discoveryReducer from "../routes/DiscoveryPage/reducer";

export default function createReducer() {
  const rootReducer = combineReducers({
    discoveryReducer,
  });
  return rootReducer;
}
