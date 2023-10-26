import axios from 'axios';

const header = {
  'content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-Naver-Client-Id': 'S0QZyjNjOWxp302OBVpC',
  'X-Naver-Client-Secret': 'XuG1Hn0PJ6',
};

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const URL = `${PROXY}/v1/papago/n2mt`;

// const instance = axios.create({
//   baseURL: '',
// });

function Papago(data) {
  return axios({
    url: URL, method: 'post', data, headers: header,
  });
}

export { Papago };
