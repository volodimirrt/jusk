
function showText() {
    alert("Ласкаво просимо до JYSK!");
}

function buyProduct(productName) {

    alert(`Дякуємо за замовлення! Товар "${productName}" успішно додано до кошика.`);
    
  
    console.log(`Користувач купив: ${productName}`);
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});