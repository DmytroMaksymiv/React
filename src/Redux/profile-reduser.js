const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


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
    newPostText: 'it-camasutra.com'

};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 9,
                message: state.newPostText,
                like: 0,
                location: '',
                company: ''
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;