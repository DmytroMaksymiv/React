const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

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
};


const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
             return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [ ...state.messages, {id: 9, message: body}]
            }

        default:
            return state;
    }

}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;