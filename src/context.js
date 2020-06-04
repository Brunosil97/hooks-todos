import React from 'react';

const todoContext = React.createContext({
    todos: [
        {id: 1, text: "eat breakfast", complete: false},
        {id: 2, text: "do laundry", complete: false},
        {id: 3, text: "finish project", complete: true},
    ]
})

export default todoContext;