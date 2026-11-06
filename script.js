
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll("#navLinks a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

async function shareWebsite() {

    const shareData = {
        title: "EasyPDF",
        text: "Try EasyPDF - Free Photo and Word to PDF tools!",
        url: window.location.origin
    };

    if (navigator.share) {

        try {
            await navigator.share(shareData);
        } catch (error) {
            console.log("Sharing cancelled or unavailable.");
        }

    } else {

        try {
            await navigator.clipboard.writeText(shareData.url);
            alert("Website link copied!");
        } catch (error) {
            prompt("Copy your website link:", shareData.url);
        }

    }
}
