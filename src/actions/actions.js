export function show_all() {
  return {
    type: "SHOW_ALL"
  };
}

export function filterWorker() {
  return {
    type: "FILTERWORKER"
  };
}

export function filterNotWorker() {
  return {
    type: "FILTERNOTWORKER"
  };
}

export function hideHeader() {
  return {
    type: "HIDE_HEADER"
  };
}

export function deleteItem(id) {
  return {
    type: "DELETE_ITEM",
    id
  };
}

export function saveItem(newContent, newTime, id) {
  return {
    type: "SAVE_ITEM",
    newContent,
    newTime,
    id
  };
}

export function addItem(content, time) {
  return {
    type: "ADD_ITEM",
    content,
    time
  };
}

export function editItem(item) {
  return {
    type: "EDIT_ITEM",
    item
  };
}
