import data from "../data/data";

const filterData = (state = data, action) => {
  if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      arr: state.arr.filter(item => {
        return item.id !== action.id;
      })
    };
  }

  if (action.type === "SAVE_ITEM") {
    return {
      ...state,
      arr: state.arr.map(item => {
        if (item.id === action.id) {
          return {
            id: action.id,
            name: action.newContent,
            time: action.newTime,
            worked: true
          };
        }
        return item;
      })
    };
  }

  if (action.type === "ADD_ITEM") {
    return {
      arr: [
        {
          id: state.arr.length + 1,
          name: action.content,
          time: action.time,
          worked: false
        }
      ].concat(state.arr),
      isDone: !state.isDone
    };
  }

  if (action.type === "EDIT_ITEM") {
    return {
      ...state,
      isEdit: !state.isEdit,
      editName: action.item.name,
      editTime: action.item.time,
      editId: action.item.id
    };
  }

  return state;
};

export default filterData;
