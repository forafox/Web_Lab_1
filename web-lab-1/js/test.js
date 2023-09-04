// var buttonList = document.getElementsByClassName("btn");

var selectedY = null;
var selectedR = null;

$('button').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    selectedY = $(this).value;
})


// $('checkbox').on('click', function () {
//     var checkboxes = $("checkbox");

//     if ($(this).prop("active")) checkboxes.prop("active", true);
//     else checkboxes.prop("active", false);

// })



// for (var i = 0; i < buttonList.length; i++) {
//     buttonList[i].addEventListener("click", function (e) {
//         if (this.classList.contains("active")) {
//             this.classList.remove("active");
//             for (let btn of buttonList) {
//                 btn.disabled = false;
//             }
//             selectedY = null;
//         } else if (selectedY == null) {
//             this.classList.add("active");
//             selectedY = e.target.innerHTML;
//             for (let btn of buttonList) {
//                 if (btn.value != selectedY)
//                     btn.disabled = true;
//             }
//         }
//     })
// };





var checkBoxList = document.getElementsByClassName("messageCheckBox");
for (var i = 0; i < checkBoxList.length; i++) {
    checkBoxList[i].addEventListener("click", function (e) {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
            for (let box of checkBoxList) {
                box.disabled = false;
            }
            selectedR = null;
        } else if (selectedR == null) {
            this.classList.add("active");
            selectedR = this.value;
            for (let box of checkBoxList) {
                if (box.value != selectedR)
                    box.disabled = true;
            }
        }
    })
};
