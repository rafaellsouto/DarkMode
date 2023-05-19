const changeThemeBtn = document.querySelector('#change-theme');

// toggle dark mode
function toggleDarkMode()
{
    document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme()
{
    const darkMode = localStorage.getItem("dark");

    if(darkMode)
    {
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function()
{
    toggleDarkMode();


    localStorage.removeItem("dark");

    if( document.body.classList.contains("dark") )
    {
        localStorage.setItem("dark", 1);
    }
})
