function checkInput(x) {
    var validationInfoPanel = document.querySelector('.validationInfo');
    var validationInfo = '';
    var isXCorrect = false;
    x=String(x);

    validationInfoPanel.classList.remove("show");

    if (!(x.trim() === "")  &&  !(x===null)) {
        if(isNumeric(x)){
            if ((parseInt(x) >= -3) && (parseInt(x) <= 5)) {
                isXCorrect = true;
                console.log(x);
            } else {validationInfo += "<span class='popup-content-span' onclick='spanOnClick()'>X должен быть в интервале (-3..5)!</span>";
            }
        } else validationInfo += "<span class='popup-content-span' onclick='spanOnClick()'>X должен быть числом!</span>";
    } 
    else validationInfo += "<span class='popup-content-span' onclick='spanOnClick()'>Введите x!</span>";

    validationInfoPanel.innerHTML = validationInfo;
    //validationInfoPanel.textContent = validationInfo;
    validationInfoPanel.classList.add("show");
    return isXCorrect;
}


function validateTextField() {
    // $('.y-text').on('input', function() {
    //     $(this).val($(this).val().replace(/[^.-\d]/, ''));
    // });
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }