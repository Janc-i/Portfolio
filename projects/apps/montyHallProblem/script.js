// Get the button element and add a click event listener
document.getElementById("simulateBtn").addEventListener("click", simulate);

function simulate() {
  // Set the number of simulations to run
  const simulations = 10000;
  // Initialize win counters for both strategies
  let playerWins = 0;
  let switchWins = 0;

  // Run the simulations
  for (let i = 0; i < simulations; i++) {
    // Define the doors and the door with the prize
    const doors = ["A", "B", "C"];
    const prizeDoor = Math.floor(Math.random() * doors.length);

    // The player chooses a door
    let playerChoice = Math.floor(Math.random() * doors.length);

    // The host opens a non-prize door
    let openedDoor;
    do {
      openedDoor = Math.floor(Math.random() * doors.length);
    } while (openedDoor === prizeDoor || openedDoor === playerChoice);

    // The player decides whether to switch their choice or stick with their original choice
    const switchDoor = doors.filter(
      (door) => door !== doors[openedDoor] && door !== doors[playerChoice]
    )[0];

    // Increment the appropriate win counter based on the final result
    if (switchDoor === doors[prizeDoor]) {
      switchWins++;
    } else if (doors[playerChoice] === doors[prizeDoor]) {
      playerWins++;
    }
  }

  // Calculate win percentages
  const playerWinPercentage = (playerWins / simulations) * 100;
  const switchWinPercentage = (switchWins / simulations) * 100;

  // Display the results
  const resultEl = document.getElementById("result");
  resultEl.innerHTML = `
    <ul>
      <li>Simulations run: ${simulations.toLocaleString()}</li>
      <li>Player wins: ${playerWins.toLocaleString()} (${playerWinPercentage.toFixed(
    2
  )}%)</li>
      <li>Switch wins: ${switchWins.toLocaleString()} (${switchWinPercentage.toFixed(
    2
  )}%)</li>
    </ul>
  `;
}
