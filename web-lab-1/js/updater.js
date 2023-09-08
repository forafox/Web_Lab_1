let count = true;
let rVal = 0;
let xVal = 0;
let yVal = 0;
let flag =false;


function addYButtonsEventListeners() {
    document.querySelectorAll("button").forEach(function (i) {
        i.addEventListener("click", function (e) {
            yVal = e.target.innerHTML;
        })
    })
}


function update() {
    xVal = document.getElementById('x').value;
    rVal = $('.messageCheckBox:checked').val();
    
    if (xVal == 0 || xVal == null || yVal == 0 || yVal == null || rVal != 0 || rVal == null) {

        if (checkInput(xVal,yVal,rVal)) {
            $.ajax({
                type: 'POST',
                url: '../web_1/php/main.php',
                async: false,
                dataType:"JSON",
                success:function(response){
                        flag=response[0];
                        $('#results tr:last').after(response[1]);
                },
                data: { "x": xVal, "y": yVal, "r": rVal },
                success: function (data) {
                    const arr=data;
                    $('#results tr:last').after(arr.data);
                    flag=arr.flag;
                    draw(rVal, xVal, yVal, flag);
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

addYButtonsEventListeners()