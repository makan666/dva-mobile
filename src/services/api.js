import request from '../utils/request';
import "babel-polyfill";

export async function getData() {
  return request('http://127.0.0.1:3000/api/trial_cars.json');
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}
