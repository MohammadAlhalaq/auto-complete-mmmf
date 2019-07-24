
const createXhr = (url, method, search, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(2222222222);
      const data = xhr.responseText;
      callback(data, xhr.status);
    } else if (xhr.readyState === 4) {
      console.log(333333333)
      callback(undefined, xhr.status);
    }
  });
  xhr.open(method, url);
  xhr.send(search);
};
