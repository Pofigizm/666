import io from 'socket.io-client';
import * as apiChecks from './api-checks';

const EXCHANGE_TIMEOUT = 3000;
const EXCHANGE_HOST = window.location.hostname;
const EXCHANGE_PORT = window.ENVIROMENT_SOCKET_PORT || SOCKET_PORT;

const socket = io( EXCHANGE_HOST + ':' + EXCHANGE_PORT );
console.log('transport: socket connection');

let exchangeCount = 0;
function getExchangeID() {
  return String(exchangeCount++);
}

const castFn = type => name => handler => {
  socket.on(`${type}:${name}`, data => {
    if (apiChecks[name](data)) handler(data);
  });
};

const exchangeFn = name => data => {
  const exchangeID = getExchangeID();
  socket.emit(`client-request:${name}`, {
    exchangeID,
    data,
  });

  return new Promise( (resolve, reject) => {
    socket.once(`server-response:${name}@${exchangeID}`, res => {
      if (!apiChecks[name](res)) return reject('API check has failed.');
      if (res.status !== 'OK') return reject(res.description);
      return resolve(res.data);
    });
    setTimeout(() => reject(`${name} timeout`), EXCHANGE_TIMEOUT);
  });
};

const exporter = (conf, func) => conf
  .reduce( (result, key) => ({
    ...result,
    [key]: func(key),
  }), {});

const config = {
  broadcast: [
    'topRooms',
  ],
  roomcast: [
    'message',
    'attachment',
    'joinUser',
    'leaveUser',
  ],
  exchange: [
    'joinRoom',
    'leaveRoom',
    'partMessages',
    'sendMessage',
    'searchRoomID',
    'createRoom',
  ],
};

export const broadcast = exporter( config.broadcast, castFn('broadcast') );
export const roomcast  = exporter( config.roomcast, castFn('roomcast') );
export const exchange  = exporter( config.exchange, exchangeFn );

