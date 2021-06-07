'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    const addMovieInput = document.querySelector('.adding__input');
    const likeFilm = document.querySelector('.checkLike');
    const confirmBtn = document.querySelector('.confirm');
    // const deleteBtn = document.querySelectorAll('delete');
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
 
    deleteAdv(adv);

    const makeChanges = () => {
        genre.textContent = 'драма';
        
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    makeChanges();
    
    const sortArr = (arr) => {
        arr.sort();
    };

    // sortArr(movieDB.movies);

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        
        films.forEach((item, i) => {
            parent.innerHTML += `<li class="promo__interactive-item"> ${i + 1}. ${item}
                <div class="delete"></div>
            </li>`;    
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    };
     
    createMovieList(movieDB.movies, movieList);

    function saveFilm() {   
        let newFilm = addMovieInput.value;
        
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }; 

            movieDB.movies.push(newFilm);

            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);

            checkLike();
        };
    };
    
    confirmBtn.addEventListener('click', function (event) {
        event.preventDefault();
        saveFilm(); 
    });
    
    function checkLike() {
         if (likeFilm.checked) {
        console.log("Добавляем любимый фильм");
         };
    };
});