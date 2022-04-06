import tuits from "../data/tuits.json";

const tuitsReducer =
    (state = tuits, action) => {
        switch (action.type) {
            case 'like-tuit':
                return state.map(tuit => {
                    if(tuit._id === action.tuit._id) {
                        if(tuit.liked === true) {
                            tuit.liked = false;
                            tuit.interactionsCount.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.interactionsCount.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                });

            case 'delete-tuit':
                return state.filter(
                    tuit => tuit._id !== action.tuit._id);

            case 'create-tuit':
                const newTuit = {
                    description: action.tuit,
                    _id: (new Date()).getTime() + '',
                    author: {
                        "name": "Irisss",
                        "handle": "irisff",
                        "profileImgSrc": "https://www.boredpanda.com/blog/wp-content/uploads/2020/07/funny-expressive-dog-corgi-genthecorgi-1-1-5f0ea719ea38a__700.jpg"

                    },
                    interactionsCount: {
                        retweets: 111,
                        likes: 222,
                        comments: 333
                    }
                }
                return [
                    newTuit,
                    ...state,
                ];
            default:
                return tuits
        }
    }


export default tuitsReducer;