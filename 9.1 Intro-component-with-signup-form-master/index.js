$(".click").on("click", function () {
  var ids = [];
  $(".form-control").each(function () {
    $.each(this.attributes, function () {
      if (this.name == "id") {
        ids.push(this.value);
      }
    });
  });
  // console.log(ids);
  for (var i = 0; i < ids.length; i++) {
    errorGet(ids[i]);
  }
});

function errorGet(ids) {
  if ($("#" + ids).val().length == 0) {
    $("#" + ids).addClass("error");
    $("#" + ids).attr("src", "images/icon-error.svg");
    $("#" + ids).after();
  }
}
