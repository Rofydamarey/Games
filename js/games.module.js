import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";
//Active navlinks
export class Games {
   constructor() {
      this.getGames("mmorpg");
      document.querySelectorAll(".menu a").forEach((link) => {
         link.addEventListener("click", (e) => {
            document.querySelector(" .active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         });
      });

      this.ui = new Ui();
   }
   

//fetch Games
async getGames(category) {
   const loading = document.querySelector(".loading");
   loading.classList.remove("d-none");
   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
         "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
         Accept: "application/json",
         "Content-Type": "application/json",
      },
   };

   const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
   const response = await api.json();
   this.ui.displayDataGame(response);
   this.startEvent();
   loading.classList.add("d-none");
}

//Show details by Id of the game
startEvent() {
   document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
         const id = item.dataset.id;
         this.showDetails(id);
      });
   });
}

showDetails(idGame) {
   const details = new Details(idGame);
   document.querySelector(".gameover").classList.add('d-none');
   document.querySelector(".details").classList.remove("d-none");
}
}

