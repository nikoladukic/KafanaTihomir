$(document).ready(function () {
    $('#reservation-form').on('submit', function (e) {
        e.preventDefault(); // Sprečavanje podrazumevanog ponašanja

        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            datum: $('#datetime').val(),
            brojLjudi: $('#people').val(),
            subject: $('#subject').val(),
            message: $('#message').val(),
        };

        // AJAX zahtev za slanje podataka
        $.ajax({
            url: $(this).attr('action'), // Preuzima URL iz atributa "action"
            method: $(this).attr('method'), // Preuzima metodu iz atributa "method"
            contentType: 'application/json', // Postavi tip sadržaja na JSON
            data: JSON.stringify(formData), // Šalje podatke u JSON formatu
            success: function () {
                $('#success-message').fadeIn(); // Prikazuje poruku o uspehu
                $('#error-message').hide();
                $('#reservation-form')[0].reset(); // Resetuje formu
            },
            error: function () {
                $('#error-message').fadeIn(); // Prikazuje poruku o grešci
                $('#success-message').hide();
            },
        });
    });
});
