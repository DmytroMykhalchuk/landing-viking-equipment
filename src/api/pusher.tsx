// import Pusher from 'pusher-js';
import { baseUrl } from './api';

// export const _EventName = '';

export const _ChannelPrefix = '';

//@ts-ignore
// Pusher.logToConsole = Boolean(process.env.REACT_APP_ALLOWED_PUSHER_LOG==='1');

// export const initPusher = () => {
//     return new Pusher(process.env.REACT_APP_PUSHER_APP_ID || '', {
//         cluster: process.env.REACT_APP_PUSHER_CLUSTER || '',
//         authEndpoint: baseUrl + 'broadcasting/auth',
//         auth: {
//             headers: {
//                 'authorization': `Bearer ${localStorage.getItem('access_token')}`,
//                 "Access-Control-Allow-Origin": "*",
//             },
//         },
//     });
// }