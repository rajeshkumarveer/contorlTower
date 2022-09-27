const INITIAL_STATE = {
  notes: [
    {
      id: 1,
      color: "secondary",
      title:
        "Order processing is a key component of order fulfillment, and efficient order processing workflows can help keep customers satisfied.",
      datef: "2020-06-03T23:28:56.782Z",
      deleted: false,
    },
    {
      id: 2,
      color: "error",
      title:
        "Order processing software can provide major benefits for a company, because it helps automate warehouse processes, improves accuracy and decreases the time it takes to fulfill orders.",
      datef: "2020-06-02T23:28:56.782Z",
      deleted: false,
    },
    {
      id: 3,
      color: "warning",
      title:
        "The process of collecting a specified quantity of items from inventory to satisfy customer orders. Order picking must be a highly controlled process because it directly influences the productivity of the overall order processing workflow",
      datef: "2020-06-01T23:28:56.782Z",
      deleted: false,
    },
    {
      id: 4,
      color: "success",
      title:
        "This is when picked items are separated according to their destination. If zone or batch picking strategies are used, for instance, each item must be sorted into its respective order before it can be packed and shipped. Sorting is an essential step toward accuracy and customer satisfaction because it’s the perfect time for workers to ensure all ordered items are present and in good condition for shipping.",
      datef: "2020-06-01T23:28:56.782Z",
      deleted: false,
    },
  ],
  notesContent: 1,
  noteSearch: "",
};

const NotesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SELECTED_NOTES":
      return {
        ...state,
        notesContent: action.id,
      };

    case "SEARCH_NOTES":
      return {
        ...state,
        noteSearch: action.searchTerm,
      };

    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.id
            ? { ...note, [action.field]: action.value }
            : note
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.id ? { ...note, deleted: !note.deleted } : note
        ),
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: action.id++,
            title: action.title,
            color: action.color,
            datef: new Date(),
            deleted: false,
          },
        ],
      };

    default:
      return state;
  }
};

export default NotesReducer;
