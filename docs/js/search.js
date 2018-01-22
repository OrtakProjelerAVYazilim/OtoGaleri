console.log("search js is started");

var myResults = [];
var str;
var strs = [];
var result;
var myDiv;
var myCards = [];
var myInput = $('#car_search_input');

$('#car_search_input').on('keydown', function(e){
	if (e.key == "Delete" || e.key == "Backspace") {
		$('.col-md-3').removeClass('myhiddenclass');
	}
});

$('#car_search_input').on('click', function(e){
	console.log("input clicked");
});

$('#car_search_button').click(function(e){	

	str = $('#car_search_input').val();	
	strs = truecase(str);

	$('.detail').removeClass('myhiddenclass');
	myCards = $('.col-md-3').find('.detail');

	myDiv = myInput;

	for (var i = 0; i < strs.length; i++) {

		strcase = strs[i];

		var isContains1 = myCards.find("h1:contains('" + strcase + "')").text().indexOf(strcase) > -1;
		var isContains2 = myCards.find("div:contains('" + strcase + "')").text().indexOf(strcase) > -1;

		if (isContains1) {
			myDiv = myCards.find("h1:contains('" + strcase + "')");
			break;
		} else if (isContains2) {
			myDiv = myCards.find("div:contains('" + strcase + "')");
			break;
		}		
	}

	if (!isContains1 && !isContains2) {
		alert("aradığınız kriter bulunamadı!");
		return;
	}	

	result = myDiv.text();	

	if (result) { 
		myResults = myDiv.parent().parent().parent().parent();
		$('.col-md-3').addClass('myhiddenclass');
		myResults.removeClass('myhiddenclass');
	}	

	$('#car_search_input').val("");

});

$('#car_search_button').bind('click', function(e){
	console.log("binded: " + myInput.val());
});

function truecase(lcase)
{
	var mycase = lcase.toLowerCase();
	var ucase = lcase.toUpperCase();

	var firstletter = mycase.substring(0, 1).toUpperCase();
	var otherletters = mycase.substring(1, mycase.length);

	mycase = firstletter + otherletters;
	return [lcase, ucase, mycase];
}

console.log("search js is finished");
