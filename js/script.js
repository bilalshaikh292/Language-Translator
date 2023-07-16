$(document).ready(() => {
    document.getElementById("convert").addEventListener("click", () => {
        var lang_one = $("#lang-one").val();
        var lang_two = $("#lang-two").val();
        var text1 = $("#input").val();
        var text2 = $("#output").val();

        $.ajax({
            url: "php/process.php",
            type: "post",
            data: { lang_one: lang_one, lang_two: lang_two, text1: text1 },
            success: function (status) {
                text2 = $("#output").val(status);

            },
        });
    });
});

