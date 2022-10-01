


addEventListener('DOMContentLoaded', (event) => 
{
    console.log('DOM fully loaded and parsed');
    //
    document.getElementById('cozy-books').innerHTML = 
    stub("Life of the Party", "img/Life of the Party Final Small.jpg", "First Book in the Series") + 
    stub("Friends of the Deceased", "img/Friends of the Deceased Front Cover.bmp", "Second Book in the Series") +
    stub("Days of Wine and Tomatoes", "img/DOWT Front Cover Final Clipped.png", "Third Book in the Series");
    //
    document.getElementById('thrillers').innerHTML = 
    stub("Amends", "img/Amends cover small.bmp", "First Book in the Series")+ 
    stub("Ubiquitous Medical", "img/ubiquitousmedical Front Cover.jpg", "Second Book in the Series");
    //
    document.getElementById('youth-adventures').innerHTML = 
    stub("Bubbles", "img/Bubbles 1 Cover small.bmp", "First Book in the Series");
    //
    document.getElementById('game-list').innerHTML = 
    gameStub("Quick Tower Defence Ultimate", 
        "img/Quick Tower Defence Ultimate.png", 
        "https://store.steampowered.com/app/2051530/Quick_Tower_Defence_Ultimate/") +
    gameStub("Horse and Go Seek", "img/Horse and Go Seek.png",
     "https://store.steampowered.com/app/1927410/Horse_and_Go_Seek/") + 
    gameStub("Minigame Blast!", "img/Minigame Blast!.png", 
        "https://store.steampowered.com/app/1185410/Minigame_Blast/") +
    gameStub("Ficterra", "img/Ficterra.png", "https://store.steampowered.com/app/852880/Ficterra/");
});

stub = function(title, image, flare)
{
    return `<div class="lg:mb-0">
        <div class="shadow-lg rounded-lg overflow-hidden bg-no-repeat bg-cover mb-6"
            style="background-position: 50%;" 
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="` + image + `" style="   display: inline-block;
            height: 100%;
            vertical-align: middle;margin-left: auto; margin-right: auto; "
            class= "opacity-100 transition duration-300 ease-in-out hover:opacity-80"/>
            <a href="#!">            
        </div></div>`;
}

gameStub = function(title, image, link)
{
    return `<div class="lg:mb-0">
        <h2 class="text-lg font-bold mb-2 text-center">` + title + `</h2>
        <div class="rounded-lg overflow-hidden bg-no-repeat bg-cover mb-6 "
            style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="light">
            
            <a href="` + link + `" target="_blank">
            <img src="` + image + `" style="display:block;margin-left: auto; 
            margin-right: auto;" class="opacity-100 transition duration-300 ease-in-out hover:opacity-80"/>
            </a>          
        </div></div>`;
}