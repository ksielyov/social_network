import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let messagesDialogData = [
  {
    src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
    name: 'Pavel Durov',
    id: 4,
    senderName: 'Me',
    messageSlip: 'I read now.',
  },

  {
    src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
    name: 'Alexey Navalny',
    id: 3,
    senderName: 'Alexey',
    messageSlip: 'Yes',
  },
];

let dialogData = [
  {
    src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
    name: 'Alexey Navalny',
    message: 'Россия без Путина не жизнеспособна.',
  },

  {
    src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
    name: 'Pavel Durov',
    message: 'Тут тупо сыглы.',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App messagesDialogData={messagesDialogData} dialogData={dialogData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
