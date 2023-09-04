let count = true;
let rVal = 0;
let xVal = 0;
let yVal = 0;


function addYButtonsEventListeners() {
    document.querySelectorAll("button").forEach(function (i) {
        i.addEventListener("click", function (e) {
            yVal = e.target.innerHTML;
        })
        console.log("Added event listener to button with text", i.innerText)
    })
}


function update() {

    xVal = document.getElementById('x').value;
    rVal = $('.messageCheckBox:checked').val();

    console.log(xVal, yVal, rVal);
    if (xVal == 0 || xVal == null || yVal == 0 || yVal == null || rVal != 0 || rVal == null) {

        if (checkInput(xVal,yVal,rVal)) {
            $.ajax({
                type: 'POST',
                url: '../web_1/php/main.php',
                // url: '../main.php',
                async: false,
                data: { "x": xVal, "y": yVal, "r": rVal },
                success: function (data) {
                    $('#results tr:last').after(data);
                    console.log(rVal, xVal, yVal);  
                    draw(rVal, xVal, yVal);
                },
                error: function (xhr, textStatus, err) {
                    alert("readyState: " + xhr.readyState + "\n" +
                        "responseText: " + xhr.responseText + "\n" +
                        "status: " + xhr.status + "\n" +
                        "text status: " + textStatus + "\n" +
                        "error: " + err);
                }
            });
        }
    }

}


// function onetime(){
//     if(count){
//         $('#results tr:last').after(localStorage.getItem("result"));
//         count = false;
//     }
// }


addYButtonsEventListeners()