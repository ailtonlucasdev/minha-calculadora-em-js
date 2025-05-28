let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName("button"));

// checking click events:
// buttons.map( button => {
    // button.addEventListener('click', (e) => {
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
//     });
// });

buttons.map ( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            default:
                display.innerText += e.target.innerText
        };
    });
});