const url="https://pokeapi.co/api/v2/pokemon/";
const card=document.getElementById("card");
const button=document.getElementById("button");



let getpokemondata =()=>
{
    let id=Math.floor(Math.random()*150)+1;

    const finalurl=url + id;
    fetch(finalurl)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    .then(data => {
        generateCard(data);
      })
    .catch(error => {
        // Handle any errors that occurred during the fetch operation
        console.error('Fetch error:', error);
    });
};

//card generation

let generateCard=(data)=>{
    const hp=data.stats[0].base_stat;
    const imgSrc=data.sprites.other.dream_world.front_default;
    const pokeName=data.name;
    const statAttack= data.stats[1].base_stat;
    const statDefence= data.stats[2].base_stat;
    const statSpeed= data.stats[5].base_stat;
    
    card.innerHTML=`
    <div id="card">
            <div class="hp">
            <h3 style="font-family: Abel, sans-serif">HP</h3>
            <h3>${hp}</h3>
            </div>
        <div class="image">
            <img src="${imgSrc}" alt="">
        </div>
        <div class="pokename"><h2 style="font-family: Abel, sans-serif">${pokeName}</h2></div>
        <div class="types">
            
        </div>
        <div class="stats">
            <div>
                <h3>${statAttack}</h3>
                <p style="font-family: Abel, sans-serif">ATTACK</p>
            </div>
            <div>
                <h3>${statDefence}</h3>
                <p style="font-family: Abel, sans-serif">DEFENCE</p>
            </div>
            <div>
                <h3>${statSpeed}</h3>
                <p style="font-family: Abel, sans-serif">SPEED</p>
            </div>
            
        </div>
    `
}

button.addEventListener("click",getpokemondata);

window.addEventListener("load",getpokemondata);

