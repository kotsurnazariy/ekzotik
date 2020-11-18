$(function() {
    $("form#contact_form").submit(function(e) {
        e.preventDefault();
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "submit.php",
          data: th.serialize()
        }).done(function() {
          alert("Заявка успішно відправлена!");
          setTimeout(function() {
            th.trigger("reset");
          }, 1000);
        });
      });
})