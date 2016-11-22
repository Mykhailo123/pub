$(function() {
    $('#btn-menu').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/mshtogryn@gmail.com",
                method: "POST",
                data: {
                    tel2: $('#tel2').val()
                
                },
                dataType: "json"
            })
            .done(function() {
                $('form').html('<h1>Thank you!</h1>')
            })
            .fail(function() {
                $('btn-menu').html('<h1>Error</h1>')
            });
    });
});