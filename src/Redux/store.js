import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";


let store = {

    _state: {

        profilePage: {
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

        },

        dialogsPage: {

            dialogs: [
                {id: 1, name: 'Dmytro'},
                {id: 2, name: 'Irinka'},
                {id: 3, name: 'Snizanna'},
                {id: 4, name: 'Kata'},
                {id: 5, name: 'Alina'},
                {id: 6, name: 'Valera'},
                {id: 7, name: 'Ivanka'},
                {id: 8, name: 'Taras'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are your'},
                {id: 3, message: 'Very Nice'},
                {id: 4, message: 'Nice Job'},
                {id: 5, message: 'Very Grete'},
                {id: 6, message: 'I like BigBurger'},
                {id: 7, message: 'Nice to met you'},
                {id: 8, message: 'I\'m done'},
            ],

            newMessageBody: ""

        },


        sidebar: {}

    },

    _callSubscriber () {
        console.log('state changed');

    },

    getState () {
        debugger;
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;      // observer - this is PATERN

    },


    dispatch(action) { // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}


export default store;

window.store = store;