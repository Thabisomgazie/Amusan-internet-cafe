document.addEventListener("DOMContentLoaded", function () {
    function handleFormSubmission(form, successMessage) {
        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault(); 
                alert(successMessage); 
                form.reset(); 
            });
        }
    }


    handleFormSubmission(document.querySelector("#contact form"), "Message sent! We'll get back to you soon.");

    const menuToggle = document.querySelector(".menu-toggle");
    const sidebarMenu = document.querySelector(".sidebar-menu");

    if (menuToggle && sidebarMenu) {
        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation(); 
            sidebarMenu.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {
            if (!sidebarMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                sidebarMenu.classList.remove("active"); 
            }
        });
    }

    const galleryImages = document.querySelectorAll("#gallery img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    if (galleryImages.length > 0 && modal && modalImg) {
        galleryImages.forEach(img => {
            img.addEventListener("click", function () {
                modal.style.display = "block"; 
                modalImg.src = img.src; 
            });
        });

        modal.addEventListener("click", function () {
            modal.style.display = "none"; 
        });
    }
});
