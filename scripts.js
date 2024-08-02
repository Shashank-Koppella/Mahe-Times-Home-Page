document.addEventListener('DOMContentLoaded', () => {
  // Select the Connections button
  const connectionsButton = document.querySelector('.connections-button');

  // Add a click event listener to redirect on click
  connectionsButton.addEventListener('click', () => {
      window.location.href = 'https://shashank-koppella.github.io/MAHEConnections/connections.html';
  });
});
