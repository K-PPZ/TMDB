let articles = document.getElementsByClassName("movie");

for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener("click", () => {
        console.log("hello");

        articles[i].style.position = "fixed";
        articles[i].style.width = "30%";
        articles[i].style.height = "90%";
    });
}