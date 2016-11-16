var el;

$("tr").each(function() {
  var subtotal = parseFloat($(this).children(".price").text().replace("$",""));
  var amount = parseFloat($(this).children(".amount").children("input").val());
  $(this).children(".pricesubtotal").text("$"+
                                          (Math.round(
                                            subtotal*amount*100
                                          )/100).toFixed(2));
});

$(".amount > input").bind("change keyup", function() {
  if (parseFloat($(this).val())<0) {
    $(this).val(0);

  }
  var subtotal = parseFloat($(this).parents("td").parents("tr").children(".price").text().replace("$",""));
  var amount = parseFloat($(this).parents("td").parents("tr").children(".amount").children("input").val());
  $(this).parents("td").parents("tr").children(".pricesubtotal").text("$"+
                                          (Math.round(
                                            subtotal*amount*100
                                          )/100).toFixed(2));
  
  changed();
});


$(".amount > input").bind("change keyup", function() {
  if (parseFloat($(this).val())<0) {
    $(this).val(0);

  }
  var subtotal = parseFloat($(this).parents("td").parents("tr").children(".price").text().replace("$",""));
  var amount = parseFloat($(this).parents("td").parents("tr").children(".amount").children("input").val());
  $(this).parents("td").parents("tr").children(".pricesubtotal").text("$"+
                                          (Math.round(
                                            subtotal*amount*100
                                          )/100).toFixed(2));
  
  changed();
  changed1();
});


function changed() {
  var subtotal = 0;
  $(".p").each(function() {
    subtotal = subtotal + parseFloat($(this).children(".pricesubtotal").text().replace("$",""));
  });
  $(".totalpricesubtotal").text("$"+(Math.round(subtotal*100)/100).toFixed(2));
}
function changed() {
  var subtotal1;
  $(".p").each(function() {
    subtotal =  ($(this).children(".name").text().replace(""));
  });
  $(".totalpricesubtotal").text(subtotal1);
}




