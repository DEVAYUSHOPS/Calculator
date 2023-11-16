var string = "";

let btns = document.querySelectorAll("button");
Array.from(btns).forEach((btn) => {
    btn.addEventListener("click",(e) => {
        if(e.target.innerHTML == '='){
            string = eval(string).toString();
            document.querySelector('input').value = string;
        } else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        } else if(e.target.innerHTML == 'CC'){
            string = string.slice(0,string.length-1);
            document.querySelector('input').value = string;
        }
        else {

            console.log(e.target.innerHTML);
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})