const display_and_loadData = async (isClicked) => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const card_container = document.getElementById("card_container");
    card_container.innerHTML=" ";
    let count=1;
    if(isClicked){
        data.data.tools.sort((a,b) => new Date(a.published_in) - new Date(b.published_in))
    }
    data.data.tools.map((items) => {
        console.log(items);
        const cardDiv = document.createElement('div');
        cardDiv.classList = "card w-72 bg-base-100 shadow-xl";
        cardDiv.innerHTML = `
            <figure class="px-10 pt-10 bg-emerald-100 flex justify-center items-center pb-10">
                <img
                src="${items.image}"
                class="rounded-xl"
                />
            </figure>
            <div class="card-body p-3">
                <h2 class="card-title font-bold">features</h2>
                <div>
                <ol>
                ${items.features.map((list)=>{
                        
                    return `<li>${count++} ${list}</li>`

                    }).join('')}
                </ol>
                    
                    
                </div>
                <h2 class="card-title">${items.name}</h2>
                <p>${items.published_in}</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        card_container.appendChild(cardDiv);
        count=1
    })
}


const sortByDate = ()=>{
   display_and_loadData(true);
}
display_and_loadData();