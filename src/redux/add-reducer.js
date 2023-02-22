
export const generateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
)

const initialState = {
  posts: [
    { id: 1, title: "Привет" },
    { id: 1, title: "React" },
  ],
};

const addPageReducers = (state = initialState,action) => {
  switch(action.type){
    default: 
      return state;
  }
}

export default addPageReducers