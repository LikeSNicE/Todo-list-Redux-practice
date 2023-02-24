const ADD_POST = "ADD_POST";

export const generateId = () =>
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36);

const initialState = {
  posts: [
    { id: 1, title: "Привет" },
    { id: 2, title: "React" },
    { id: 3, title: "Stranger things" },
  ],
};

const addPageReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: generateId(),
        title: action.newPostTitle
      };

      return {
        ...state,
        posts: [...state.posts,newPost]
      };
    }
    default:
      return state;
  }
};

export const addPostAC = (newPostTitle) => ({
  type: "ADD_POST",
  newPostTitle,
});

export default addPageReducers;
