'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  // request.open(method, url, async, login, pass);
  request.open('GET', 'js/!!!learn_JS_52_current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Kozel";
    }
  });
  // status
  // statusText
  // response 
  // readyState


});