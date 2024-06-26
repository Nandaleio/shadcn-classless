function toggleDarkMode () {
  let isDark = document.body.classList.toggle('dark-mode')
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled')
}

// On page load
document.addEventListener('DOMContentLoaded', event => {
  // Aseguramos que la página inicie en light mode
  document.body.classList.remove('dark-mode')

  // Verificamos el estado almacenado en localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    // Si estaba habilitado, activamos el dark mode
    document.body.classList.add('dark-mode')
  }
})
