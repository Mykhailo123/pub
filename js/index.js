$(function() {
    $('#button1').click(function(){
        $('#form-abs').show(700);
    });
});
$(function() {
    $('#cross1').click(function(){
        $('#form-abs').hide(700);
    });
});
$(function() {
    $('#cencel1').click(function(){
        $('#form-abs').hide(700);
    });
});
$(function() {
    $('#button2').click(function(){
        $('#form2').show(700);
    });
});
$(function() {
    $('#cross2').click(function(){
        $('#form2').hide(700);
    });
});
$(function() {
    $('#cencel2').click(function(){
        $('#form2').hide(700);
    });
});

$(function() {
    $('#btn-menu').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/mshtogryn@gmail.com",
                method: "POST",
                data: {
                    name2: name2.value,
                    tel2: $('#tel2').val(),
                    adress: $('#adress').val(),
                    comment: $('#comment').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('#formdes').html('<h1>Thank you!</h1>')
            })
            .fail(function() {
                $('#formdes').html('<h1>Error</h1>')
            });
    });
});