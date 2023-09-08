var selectedR = null;

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

var selectedY = null;

$('button').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    selectedY = $(this).value;
})



