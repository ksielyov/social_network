import * as serviceWorker from './serviceWorker';
// import state from './redux/state';

import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import state, {addPost, updateProfileInputStatus, updatePostText, subscribe} from './redux/state';

let render = state => {
  ReactDOM.render(
    <React.StrictMode>
      <App globalState={state} updatePostText={updatePostText} addPostFun={addPost} updateProfileInputStatus={updateProfileInputStatus} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render(state);

subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();