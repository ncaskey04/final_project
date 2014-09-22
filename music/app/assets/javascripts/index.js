$(document).ready(function() {

    $('.register').on('submit',  function(e) {
        e.preventDefault();

        var email = $(".signup_email").val();
        var password = $(".signup_password").val();


            $.ajax({
                type: 'POST',
                url: '/users',
                data: { user: {
                  email: email,
                  password: password
                  }
                },

                success: function(data) {
                    $('#remoteModal').removeData('bs.modal');
                    $('#remoteModal .modal-content').html(data);
                }
            });
        });
});
