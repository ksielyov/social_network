import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, updateProfileInputStatus} from './redux/state';

export let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App globalState={state} addPostFun={addPost} updateProfileInputStatus={updateProfileInputStatus} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}