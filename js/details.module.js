import { Ui } from "./ui.module.js";

//Close Details page with Esc & x
const close = document.getElementById('btnClose')
class CloseDetails {
   constructor() {
      close.addEventListener('click', function () {
         document.querySelector('.details').classList.add('d-none')
         document.querySelector(".gameover").classList.remove("d-none");

      })
      document.addEventListener('keydown', function (e) {
         if (e.key == 'Escape') {
            document.querySelector('.details').classList.add('d-none')
            document.querySelector(".gameover").classList.remove("d-none");

         }
      })

   }

}
new CloseDetails

//Fetch API of Details
export class Details {
   constructor(id) {
      this.ui = new Ui();
      this.getDetails(id);
   }

   getDetails(idGames) {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
         },
      };

      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
         .then((response) => response.json())
         .then((response) => this.ui.displayDetails(response))
         .finally(() => {
            loading.classList.add("d-none");
         });
   }
}
