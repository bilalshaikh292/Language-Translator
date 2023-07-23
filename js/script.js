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


document.getElementById("interchange").addEventListener("click", () => {
    var lang1 = $("#lang-one").val();
    var lang2 = $("#lang-two").val();
    var temp = $("#lang-one").val();
    lang1 = lang2;
    lang2 = temp;
    console.log(lang1,lang2)
$("#lang-one").val(lang1);
$("#lang-two").val(lang2);
})