const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    // show light icon
    lightIcon.classList.remove('hidden');
  } else {
    darkIcon.classList.remove('hidden');
  }

// Listen for toggle button click event
themeToggleBtn.addEventListener('click', toggleMode)


function toggleMode(){
    // toogle icon
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    // if it is set in local strogae
    if(localStorage.getItem('color-theme')) {
        // if light, make dark and save in local store
        if(localStorage.getItem('color-theme') === 'light'){
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')

        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        }
    }else{
        // if not in local storage
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}