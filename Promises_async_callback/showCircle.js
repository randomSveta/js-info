function addMessage(div) {
    div.append("Hello World!");
}


let circleExist = false;

function changeButtonName() {
    if (circleExist) {
        return "hide";
    } else {
        return "show";
    }
}

function showCircle(cx, cy, radius, callback) {

    const divId = document.getElementsByClassName("circle")[0];
    const button = document.getElementById("button");

    if (!circleExist) {

        divId.setAttribute("style", `top: ${cy}px; left: ${cx}px; width: ${radius * 2}px; height: ${radius * 2}px;`);

        divId.addEventListener("transitionend", function handleTransitionEnd() {
            divId.removeEventListener("transitionend", handleTransitionEnd);

            circleExist = true;
            button.value = changeButtonName();
            button.innerHTML = changeButtonName();

            callback(divId);
        });


    } else {
        divId.setAttribute("style", `top: 0; left: 0; width: 0; height: 0; transition: none;`);
        divId.innerHTML = "";
        circleExist = false;
        button.value = changeButtonName();
        button.textContent = changeButtonName();
    }
}