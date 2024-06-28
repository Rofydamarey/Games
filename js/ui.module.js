export class Ui{
    displayDataGame(data){
      let gamesBox=``
      for (let i = 0; i <data.length; i++) {
         gamesBox+=`
         <div class="col-md-3  ">
            <div data-id="${data[i].id}"  class="card h-100 bg-transparent" role="button" >
                    <div class="card-body p-3">
                     <figure class="position-relative" >
                        <img src="${data[i].thumbnail}" class="w-100" alt="">
                        </figure>
                        <figcaption class="pt-1">
                          <div class="hstack justify-content-between">
                             <h3 class="h6 small">${data[i].title}</h3>
                             <span class="badge free p-2">Free</span>
                         </div>
                        </figcaption>
                        <p class="card-text small text-center text-secondary">
                        ${data[i].short_description.split(" ",12)}
                        </p>
                    </div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge text-bg-secondary">${data[i].genre}</span>
                        <span class="badge text-bg-secondary">${data[i].platform}</span>
                    </footer>
                  </div>
            </div>
         `
         
      }
      document.getElementById("games").innerHTML=gamesBox;
   }
      
    displayDetails(data){
   let content=`
      <div class="col-md-4">
   <img src="${data.thumbnail}" class="w-100" >
      </div>
      <div class="col-md-8">
         <h3>Title:${data.title}</h3>
         <p>Category:<span class="badge text-bg-primary">${data.genre}</span></p>
         <p>Platform:<span class="badge text-bg-primary">${data.platform}</span></p>
         <p>Status:<span class="badge text-bg-primary">${data.status}</span></p>
   
   <p class="small">${data.description}</p>
         <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
   
      </div>
   
   `
   document.getElementById("details").innerHTML = content;
   
   }
  }



