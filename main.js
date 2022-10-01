
stub = function(title, image, flare)
{

    return `<div class="lg:mb-0">
        <div class="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
            style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="` + image + ` style="display:block;margin-left: auto;
            margin-right: auto;"class= ""/>
            <a href="#!">
            <div
                class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style="background-color: rgba(251, 251, 251, 0.2)"></div>
            </a>
        </div>
        <h5 class="text-lg font-bold mb-3 text-center">` + title + `</h5>
        <div class="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
            <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="currentColor"
                d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
            </svg>` + flare + `
        </div>                        
    </div>`;
}

addEventListener('DOMContentLoaded', (event) => 
{
    console.log('DOM fully loaded and parsed');
    document.getElementById('cozy-books').innerHTML = 
    stub("Life of the Party", "/img/Life of the Party Final Small.jpg", "First Book in the Series") + 
    stub("Friends of the Deceased", "/img/Friends of the Deceased Front Cover.bmp", "Second Book in the Series")
    stub("Days of Wine and Tomatoes", "/img/DOWT Front Cover Final Clipped.png", "Third Book in the Series");
});