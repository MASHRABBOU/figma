const ellist = document.querySelector(".list100")

function salom (arr){
    arr.forEach((item) =>{
        


        const html = `
        <header class="bosh-qism">
        <article class="card-20">  
        <img class="img1" src="./img/IMAGE (8).png" alt="">
            <h4 class="country__region"></h4>
            <p class="country__row"><span></span>${item.body.slice(0,30)}</p>
            <p class="country__row"><span></span></p>
            </article>
            </header>
        `;
        ellist.insertAdjacentHTML('beforeend', html);
        
    })
}
fetch("http://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => salom(data))