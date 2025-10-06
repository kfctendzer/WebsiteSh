// Optional: Add snowflake animation logic
document.querySelectorAll('.snowflake').forEach(flake => {
  flake.style.left = Math.random() * 100 + 'vw';
  flake.style.animationDuration = (Math.random() * 5 + 5) + 's';
});
