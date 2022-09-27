
export const openNote = (id) => ({
  type: "SELECTED_NOTES",
  id,
});
export const noteSearch = (searchTerm) => ({
  type: "SEARCH_NOTES",
  searchTerm,
});
export const deleteNote = (id) => ({
  type: "DELETE_NOTE",
  id,
});
export const updateNote = (id, field, value) => ({
  type: "UPDATE_NOTE",
  id,
  field,
  value,
});
export const addNote = (id) => ({
  type: "ADD_NOTE",
  id: id++,
  color: (theme) => theme.palette.primary.main,
  title: "This is new Note",
});
