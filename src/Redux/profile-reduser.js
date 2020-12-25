import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 445458, location: 'Lviv', company: 'Wokreyn'},
        {id: 2, message: 'It\'s my first post', like: 5678944467, location: 'Kyiv', company: 'Start Up Forum'},
        {
            id: 3,
            message: 'It\'s very nice funktion props',
            like: 567,
            location: 'Uzgorod',
            company: 'Mariana company'
        },
        {id: 4, message: 'By in Fokstrot', like: 431, location: 'Rivne', company: 'Appler'},
        {id: 5, message: 'We ned JSX Developer', like: 1141, location: 'Spas', company: 'Kuzdei Inc'},
        {
            id: 6,
            message: 'We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood/ Whats wrong with you to day?Heeey ..We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood',
            like: 81,
            location: 'Lviv',
            company: 'Wokreyn'
        },
        {
            id: 7,
            message: 'We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood/ Whats wrong with you to day?Heeey ..We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood',
            like: 901,
            location: 'Hrabiv',
            company: 'VOVA BABIN Inc'
        },
        {id: 8, message: 'It\'s done', like: 401, location: 'Roznativ', company: 'Spaser Z LLC'},

    ],
    profile: null,
    status: ''

};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 9,
                message: action.newPostText,
                like: 0,
                location: '',
                company: ''
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }


        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
        }

        default:
            return state;
    }

}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};


export default profileReducer;