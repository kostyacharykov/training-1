'use strict';

const p = document.querySelectorAll('p');
console.log(p);

// defer in HTML сообщает браузере, чтобы он обрабатывал 
// страницу и загружал скрипт в фоновом режиме, после запустить его, страница
// не останавливает загрузку

// async in HTML страница не ждет асинхронных скриптов, 
// запускается скрипт сразу после его загрузки
// скрипт не зависит от DOM структуры

;

function loadScript(src) {
  const script = document.createElement('script');
script.src = src; //ведут себя как при async
script.async = false;
document.body.append(script)
}

loadScript('js/test_JS_35.js');
loadScript('js/some_35.js');