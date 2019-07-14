import { combineReducers } from "redux";
import user from "./reducers/user";
import errors from "./reducers/errors";
import trip from "./reducers/trip";
import ownerTrip from "./reducers/ownerTrip";
import { connectRouter } from "connected-react-router";
import history from "./history";
export default combineReducers({
  user,
  trip,
  ownerTrip,
  router: connectRouter(history),
  errors
});
