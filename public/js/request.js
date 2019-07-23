
const createXhr = (url, method, search, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data);
    } else if (xhr.readyState === 4) {
      callback(undefined);
    }
  });
  xhr.open(method, url);
  xhr.send(search);
};
module.exports = createXhr;
