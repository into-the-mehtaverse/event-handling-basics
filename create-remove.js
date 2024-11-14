/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        const parts = url.split("\/");
        const breed = parts[4];
        const imagePath = parts[5];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        const gallery = document.querySelector(".gallery ul");

        gallery.insertAdjacentHTML("beforeend",`<li>
                <figure>
                    <img src="https://images.dog.ceo/breeds/${breed}/${imagePath}" />
                    <figcaption>${breed}</figcaption>
                </figure>
            </li>`);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const first = document.querySelector(".gallery ul li");


    /*-------------------- Remove the first dog card --------------------- */
    first.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const list = document.querySelector(".gallery ul");
    const dogs = list.querySelectorAll("li");


    /*-------------------- Remove the last dog card ----------------------- */
    if(dogs.length > 0) {
        const last = dogs[dogs.length-1];
        last.remove()
    }

});
