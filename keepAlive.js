const cron = require("cron");
const fetch = require("node-fetch");

const urlFront = "https://igorpustovoy-movie-planet.herokuapp.com/movies";
const urlApi = "https://movie-planet-backend.herokuapp.com/movies";

(() => {

  const cronJob = new cron.CronJob("0 */25 * * * *", () => {
    console.log("Cron job loop");

    fetch(urlFront)
      .then((res) =>
        console.log(`response-ok: ${res.ok}, status: ${res.status}`)
      )
      .catch((err) => {
        console.log(`response-error: ${err}`);
      });

    fetch(urlApi)
      .then((res) =>
        console.log(`response-ok: ${res.ok}, status: ${res.status}`)
      )
      .catch((err) => {
        console.log(`response-error: ${err}`);
      });
  });

  cronJob.start();
})();
