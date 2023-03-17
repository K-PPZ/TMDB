let articles = document.getElementsByClassName("movie");
let section = document.getElementById("all_movies");

for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener("click", () => {
        console.log("hello");

        if (articles[i].classList.contains("movie_off")) {
            articles[i].classList.remove("movie_off");
            articles[i].classList.add("movie_on");
        } else {
            // section.addEventListener("click", () => {
                articles[i].classList.remove("movie_on");
                articles[i].classList.add("movie_off");
            // });
        }
    });


}