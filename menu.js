const currentPage = window.location.pathname.split("/").pop() || "index.html";
const menuItems = document.querySelectorAll(".menu-desktop a");

menuItems.forEach(item => {
    if(item.getAttribute("href") === currentPage){
        item.classList.add("active");
    }
});

   document.getElementById('github-box').addEventListener('click', function() {
            window.location.href = 'https://github.com/luana0713'; 
            
        });

    document.getElementById('Linkedin-box').addEventListener('click', function() {
        window.location.href = 'https://www.linkedin.com/in/luana-silva-54868a2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'; // Substitua "seu-usuario" pelo seu nome de usuário do GitHub
        
    });