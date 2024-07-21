import { ApiPromise, WsProvider } from '@polkadot/api';

let api;

export const connect = async () => {
  const wsProvider = new WsProvider('ws://127.0.0.1:9944'); // Update to your node's WS address if different
  api = await ApiPromise.create({ provider: wsProvider });
  return api;
};

export const getApi = () => {
  if (!api) {
    throw new Error('API is not connected. Call connect() first.');
  }
  return api;
};
