let count = true;
var rVal = 0;
var xVal = 0;
var yVal = 0;


function update() {
    let buttonList = document.querySelectorAll("button");
    buttonList.forEach(function (i) {
        i.addEventListener("click", function (e) {
            yVal = e.target.innerHTML;
        })
    })

    xVal = document.getElementById('x').value;
    rVal = $('.messageCheckBox:checked').val();

    console.log(xVal, yVal, rVal);
    if (xVal == 0 || xVal == null || yVal == 0 || yVal == null || rVal != 0 || rVal == null) {
        
        if (checkInput(xVal)) {
            $.ajax({
                type: 'POST',
                url: 'main.php',
                async: false,
                data: { "x": xVal, "y": yVal, "r": rVal },
                success: function (data) {
                    $('#results tr:last').after(data);
                    let prev = localStorage.getItem("result");
                    prev = prev + "\n" + data;
                    localStorage.setItem("result", prev);
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