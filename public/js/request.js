
const createXhr = (url, method, search, callback, eventType) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = xhr.responseText;
      callback(data, xhr.status, eventType);
    } else if (xhr.readyState === 4) {
      callback(undefined, xhr.status, eventType);
    }
  });
  xhr.open(method, url);
  xhr.send(search);
};
