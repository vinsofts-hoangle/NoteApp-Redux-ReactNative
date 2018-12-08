import { combineReducers } from "redux";
import filterwork from "./filterwork";
import hideHeader from "./hideHeader";
import filterData from "./filterData";

const reduce = combineReducers({
  nameHeader: filterwork,
  hideHeader: hideHeader,
  data: filterData
});

export default reduce;
