document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("상품이 장바구니에 담겼습니다.");
        })
    })
})