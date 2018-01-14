console.log("search js is started");

var myResults = [];
var str;
var strs = [];
var result;
var myDiv;
var myCards = [];
var myInput = $('#car_search_input');
var myButton = $("#car_search_button");
var myDetBut = $("#det_ser_but");
var i;

myInput.on("keydown", function(e) {
  if (e.key == "Delete" || e.key == "Backspace") {
    $(".col-md-3").removeClass("myhiddenclass");
  }
});

myInput.on("click", function(e) {
  console.log("input clicked");
});

myDetBut.click(function(e) {
	console.log("detailed search clicked!");
	console.log(myInput.val());
	if(myInput.hasClass("myhiddenclass")) {
		console.log("has class = it ll be removed");
		myInput.addClass("form-control");
		myInput.removeClass("myhiddenclass");
	} else {
		console.log("no class = it ll be added");
		myInput.removeClass("form-control");
		myInput.addClass("myhiddenclass");
	}
});

$("input[name*='detailsearch']").keypress(function(e){
	if(e.which == 13) {
        // alert('You pressed enter!');
		myEvent(e);
    }
});

myInput.keypress(function(e){
	if(e.which == 13) {
        // alert('You pressed enter!');
		myEvent(e);
    }
});

// mybutton start
myButton.click(function(e){
	myEvent(e);
});
// mybutton stop

function myEvent(e) {
	
	console.log("==================================");
	console.log("u clicked it");

	e.preventDefault();
	str = myInput.val();	

	if(myInput.hasClass("myhiddenclass")) {

		var detailsearchs = [];
		
		// =============================
		// Detail Search

		detailsearchs[0] = $('#marka').val();
		detailsearchs[1] = $('#il').val();
		detailsearchs[2] = $('#model').val();
		detailsearchs[3] = $('#kasa_tipi').val();
		detailsearchs[4] = $('#vites').val();
		detailsearchs[5] = $('#arac_tip').val();
		detailsearchs[6] = $('#yakit').val();
		detailsearchs[7] = $('#motor_hacmi').val();

		detailsearchs[8] = $('#min_year').val(); 
		detailsearchs[9] = $('#min_km').val(); 
		detailsearchs[10] = $('#max_year').val(); 
		detailsearchs[11] = $('#max_km').val(); 

		if(str == "") {		
			strs = truecases(detailsearchs);
		}

		strs.forEach(function(theval){
			str += theval;
		});

	}else{
		strs = truecase(str);
	}

	console.log("str: " + str);

	if(str == "") {
		console.log("has to show");
		$(".detail").removeClass("myhiddenclass");
    	$(".col-md-3").removeClass("myhiddenclass");
		alert("kriter girmediniz!");
		console.log("=================");
		return;
	}

  $(".detail").removeClass("myhiddenclass");
  myCards = $(".col-md-3").find(".detail");

  myDiv = myInput;

  for (i = 0; i < strs.length; i++) {
    strcase = strs[i];

    var isContains1 =
      myCards
        .find("h1:contains('" + strcase + "')")
        .text()
        .indexOf(strcase) > -1;
    var isContains2 =
      myCards
        .find("div:contains('" + strcase + "')")
        .text()
        .indexOf(strcase) > -1;

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
    myResults = myDiv
      .parent()
      .parent()
      .parent()
      .parent();
    $(".col-md-3").addClass("myhiddenclass");
    myResults.removeClass("myhiddenclass");
  }
  //   myInput.val("");
}

myButton.bind("click", function(e) {
 e.preventDefault();  
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

function truecases(myArr) {

	var newArr = [];
	var strz = [];
	var counter;
	var helper = 0;

	for (i = 0; i < myArr.length; i++) {
		
		console.log("=================");
		console.log("Element " + i + ": '" + myArr[i] + "'");
		myArr[i] == undefined ? myArr[i] = "" : console.log("defined!");
		console.log("Element Length " + i + ": '" + myArr[i].length + "'");

		if (myArr[i].length != 0) {
			
			console.log("myArr: '" + myArr[i].length + "'");

			strz = truecase(myArr[i])
			counter = 0;
			helper = i * 3;

			for (j = helper; j < 3 + helper; j++) {
				newArr[j] = strz[counter];
				counter++;
			}
		}

	}

	return newArr;

}

function caseTest()
{
	var testArr = ["","adnan", "ozom", "deyzo"];
	console.log(truecases(testArr));
}

console.log("search js is finished");
