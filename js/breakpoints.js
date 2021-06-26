var $form, width, height, area;
$form = $("#calculator");

$("#calculator").on("submit", function(e)
{
  e.preventDefault()
  console.log("You clicked submit");

  width = $("#width").val();
  height = $("#height").val();
  area = (width * height);

  if (area < 100)
  {
    // A breakpoint is set if the developer tools are open.
    debugger;
  }

  $fomr.append("<p>" + area + "</p>");
});
