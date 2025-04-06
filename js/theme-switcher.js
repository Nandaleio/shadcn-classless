function toggleDarkMode () {
  let isDark = document.body.classList.toggle('dark-mode')
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled')
}

// On page load
document.addEventListener('DOMContentLoaded', event => {
  // Ensure the page starts in light mode
  document.body.classList.remove('dark-mode')

  // Check the stored state in localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    // If it was enabled, activate dark mode
    document.body.classList.add('dark-mode')
  }
})
