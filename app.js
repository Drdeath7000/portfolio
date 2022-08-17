(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".btn-to-about").addEventListener("click", () => {
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector('[data-id="about"]')
            .classList.add("active-btn");

        document.querySelector(".active").classList.remove("active");
        document.getElementById(("about")).classList.add("active");
    });

    document.querySelector(".btn-to-portfolio").addEventListener("click", () => {
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector('[data-id="portfolio"]')
            .classList.add("active-btn");

        document.querySelector(".active").classList.remove("active");
        document.getElementById(("portfolio")).classList.add("active");
    })
})();
