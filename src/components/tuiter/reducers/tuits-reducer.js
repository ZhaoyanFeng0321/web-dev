import {CREATE_TUIT,
    DELETE_TUIT,
    FIND_ALL_TUITS,
    UPDATE_TUIT}
    from "../../../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TUIT:
            return [action.tuit, ...state];
        case  FIND_ALL_TUITS:
            return action.tuits;
        case UPDATE_TUIT:
            return state.map(tuit => tuit._id === action.tuit._id ? action.tuit : tuit);
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        default:
            return state;
    }

            // case 'like-tuit':
            //     return state.map(tuit => {
            //         if(tuit._id === action.tuit._id) {
            //             if(tuit.liked === true) {
            //                 tuit.liked = false;
            //                 tuit.interactionsCount.likes--;
            //             } else {
            //                 tuit.liked = true;
            //                 tuit.interactionsCount.likes++;
            //             }
            //             return tuit;
            //         } else {
            //             return tuit;
            //         }
            //     });
            //
            // case 'delete-tuit':
            //     return state.filter(
            //         tuit => tuit._id !== action.tuit._id);
            //
            // case 'create-tuit':
            //     const newTuit = {
            //         description: action.tuit,
            //         _id: (new Date()).getTime() + '',
            //         author: {
            //             "name": "Irisss",
            //             "handle": "irisff",
            //             "profileImgSrc": "https://www.boredpanda.com/blog/wp-content/uploads/2020/07/funny-expressive-dog-corgi-genthecorgi-1-1-5f0ea719ea38a__700.jpg"
            //
            //         },
            //         interactionsCount: {
            //             retweets: 111,
            //             likes: 222,
            //             comments: 333
            //         }
            //     }
            //     return [
            //         newTuit,
            //         ...state,
            //     ];
            // default:
            //     return tuits

    }


export default tuitsReducer;