import '../css/snowflake.css'
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄"; // Snowflake symbol
  
    // Randomize snowflake properties
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  
    document.body.appendChild(snowflake);
  
    // Remove snowflake after animation
    setTimeout(() => {
      snowflake.remove();
    }, 5000);
  }
  
  // Generate snowflakes at regular intervals
  export function startSnowfall() {
    setInterval(createSnowflake, 200);
  }
  