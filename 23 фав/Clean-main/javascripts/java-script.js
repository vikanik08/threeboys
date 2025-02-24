document.addEventListener('DOMContentLoaded', function () {
   
    setTimeout(() => {
        const box = document.getElementById("box");
        let count = 0;
        let isExpanded = false;

        function animateWidth() {
            if (count >= 5) {
                // После 5 циклов увеличиваем ширину и через 2 сек исчезаем
                box.classList.add("expanded");
                setTimeout(() => {
                    box.classList.add("hidden"); // Плавное исчезновение
                }, 2000);
                return;
            }

            isExpanded = !isExpanded;
            box.style.width = isExpanded ? "300px" : "100px"; 
            
            count++;
            setTimeout(animateWidth, 1000);
        }

        animateWidth(); 
    }, 3000); 

    function hideElement() {
        var element = document.querySelector(".first_pic");
        element.style.display = "none";
    }
    setTimeout(hideElement, 10000);

    const button = document.getElementById("button");
const picc = document.querySelector(".sec_pic"); 

button.addEventListener('click', function() {
    if (picc.style.display === "none") {
        picc.style.display = "flex"; 
    } else {
        picc.style.display = "none"; 
    }
});

});
