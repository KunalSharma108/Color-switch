let color = "";
let bgColor = "";

function toggleColor() {

    const colorHead = document.getElementsByClassName("color");

    for (let i = 0; i < colorHead.length; i++) {
        colorHead[i].addEventListener("click", function () {
            for (let j = 0; j < colorHead.length; j++) {
                colorHead[j].removeAttribute("id");
                colorHead[j].style.removeProperty("box-shadow");
            }
            color = this;
            color.id = "active";   
            bgColor = document.getElementById("active").style.backgroundColor;
            document.getElementById("color-show-div").style.backgroundColor = bgColor;
            document.getElementById("color-show-div").style.boxShadow = `0px 0px 20px ${bgColor}`;

            document.getElementById("active").style.boxShadow = `0px 0px 10px ${bgColor}`;
        })
    }
}
