function exp_coll(ind) {
 s = document.getElementById(ind);

 if (s.style.display == 'none') {
   s.style.display = 'block';
 } else if (s.style.display == 'block') {
   s.style.display = 'none';
 }
}

$(document).ready(function() {
    $('#research').css("color","black");
var toShow = $("#researchcontent").html();
	var toNav = $("#researchnav").html();
	$("#contentdisplay").html(toShow);
	$("#secnav").html(toNav);

    $('#research').click(function(){
	$(this).css("color","black");
$('#eduintern').css("color","blue");
$('#teach').css("color","blue");
	var toShow = $("#researchcontent").html();
	var toNav = $("#researchnav").html();
	$("#contentdisplay").html(toShow);
	$("#secnav").html(toNav);
      });

$('#eduintern').click(function(){
    $(this).css("color","black");
$('#research').css("color","blue");
$('#teach').css("color","blue");
	var toShow = $("#eduinterncontent").html();
	var toNav = $("#eduinternnav").html();
	$("#contentdisplay").html(toShow);
	$("#secnav").html(toNav);
      });

$('#teach').click(function(){
    $(this).css("color","black");
$('#research').css("color","blue");
$('#eduintern').css("color","blue");
	var toShow = $("#teachcontent").html();
	var toNav = $("#teachnav").html();
	$("#contentdisplay").html(toShow);
	$("#secnav").html(toNav);
      });

      });
