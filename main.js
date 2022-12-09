function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = - 0.4;

function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
       ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "southkorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("southkorea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("australia", "12:00", "denmark") +
      createGame("tunisia", "12:00", "france") +
      createGame("poland", "16:00", "argentina") +
      createGame("saud-arabia", "16:00", "serbia")
  ) +
  createCard(
    "01/11",
    "sexta",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "marroco") +
      createGame("costa-rica", "16:00", "germany") +
      createGame("japan", "16:00", "spain")
  )
