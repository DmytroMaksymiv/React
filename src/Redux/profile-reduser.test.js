import profileReducer, {addPostActionCreator, deletePost} from "./profile-reduser";
import React from "react";


let state = {
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

    ]
};


test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("it-camasutra");

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect (newState.posts.length).toBe (9);
});


test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("it-camasutra");

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect (newState.posts[8].message).toBe ("it-camasutra");
});


test('after deleting length of messages should be decremented', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
   expect (newState.posts.length).toBe(7);
});


test('after deleting length shouldn`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect (newState.posts.length).toBe(8);
});
