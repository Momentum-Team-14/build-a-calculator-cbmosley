// create event listeners
// multiplication function
let calcdisplay = document.getElementById("calcdisplay");

let calcbuttons = Array.from(document.getElementsByClassName("button"));


calcbuttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "C":
                calcdisplay.innerText = " ";
                break;
            case "←":
                if(calcdisplay.innerText){
                    calcdisplay.innerText = calcdisplay.innerText.slice(0, -1);
                }
                break;
            case "=":
                try{calcdisplay.innerText = eval(calcdisplay.innerText);
                } catch {
                    calcdisplay.innerText = "Can't Compute";
                }
                break;
            default:
                calcdisplay.innerText += e.target.innerText;
        }

    });
});