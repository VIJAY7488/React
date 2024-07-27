/*
* <div id='parent'>
*     <div id='child'>
*          <h1></h1>
*     </div>
* </div>
*
*
*
*/

import React from 'react';
import ReactDOM from 'react-dom';


// React.createElement ==> Object ==> HTMLElement(render)

// const parent = React.createElement('div', {id: 'parent'},[
//     React.createElement('div', {id: 'child1'}, 
//         [React.createElement('h1', {}, "I'm h1 tag"),
//          React.createElement('h2', {}, "I'm h2 tag")
//         ]
//         ),
       
//         React.createElement('div', {id: 'child2'}, 
//             [React.createElement('h1', {}, "I'm h1 tag"),
//              React.createElement('h2', {}, "I'm h2 tag")
//             ]
//             )
// ]
   
// )


// const heading = React.createElement('h1', {id: "heading"}, "Hello World From React" );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(heading); // Object

// root.render(parent);

// Jsx ==> HTML like code or XML like syntax
// JSX (transpiled the code before reaches the JS) - it is done by Parcel-Babel
// JSX ==> React.createElement ==> RectElement JS-Object ==> HTMLElement(render)

// React Element
const jsxHeading = (<h1 id="heading">React using JSX</h1>);

const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(jsxHeading);