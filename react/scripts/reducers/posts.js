// function posts(state = [], action) {
//   switch (action.type) {
//     case 'INCREMENT_LIKES' :
//       const i = action.index;
//       return [
//         ...state.slice(0, i),
//         {...state[i],  likes: state[i].likes + 1 },
//         ...state.slice(i + 1)
//       ];
//     default:
//       return state;
//   }
// }
//
// export default posts;

// A reducer takes in two things;
// 1. the action (what will happen)
// 2. copy of current state

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
          const i = action.index;
          return [
              ...state.slice(0, i),
              {...state[i], likes: state[i].likes + 1},
              ...state.slice(i+1),
          ]
        default:
          return state;
    }
}
export default posts;