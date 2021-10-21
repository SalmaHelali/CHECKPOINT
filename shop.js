var quantity = document.getElementsByClassName('quantity');
var plus = document.getElementsByClassName('plus');
var minus = document.getElementsByClassName('minus');
var remove = document.getElementsByClassName('remove');
var like = document.getElementsByClassName('like');

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function() {
        plus[i].nextElementSibling.innerHTML++

    })

}
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function() {
        if (minus[i].previousElementSibling.innerHTML > 0) {
            minus[i].previousElementSibling.innerHTML--;

        }

    })
}

for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", function() {
        remove[i].parentElement.remove();
    })
}
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener("click", function() {
        like[i].classList.toggle("red");
    })

}