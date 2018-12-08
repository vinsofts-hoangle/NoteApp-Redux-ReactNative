
const filterwork = (state="NOTE", action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "NOTE";
    case "FILTERWORKER":
      return "WORKED";
    case "FILTERNOTWORKER":
      return "NOTWORKED";
    default:
      return state;
  }
};

export default filterwork;
