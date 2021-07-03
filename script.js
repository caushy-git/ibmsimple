function myfunction() {
	var x = document.getElementById("interest").value;
	document.getElementById("trythis").innerHTML = x + "%";
}

function interestcal() {
	var amount = document.getElementById("amount").value;
	var time = document.getElementById("years").value;
	var x1 = document.getElementById("interest").value;
	var ci = (amount * x1 * time) / 100;
	var daat = new Date();
	var today = parseInt(daat.getFullYear()) + parseInt(time);
	var total_am = parseInt(amount) + parseInt(ci);

	if (amount == "" || amount <= 0) {
		alert("enter the positive number");
		document.getElementById("amount").focus();
		return false;
	} else {
		document.getElementById("amount_before_comment").innerHTML =
			"If you deposit ";
		document.getElementById("color_amountbefore").innerHTML = amount;
		document.getElementById("time_comment").innerHTML = "for ";
		document.getElementById("color_time").innerHTML = time + " " + "years,";
		document.getElementById("interest_comment").innerHTML =
			"at an interest rate of ";
		document.getElementById("color_interest").innerHTML = x1 + "%,";
		document.getElementById("amount_comment").innerHTML =
			"the amount after " + time + " years ";
		document.getElementById("color_total").innerHTML =
			"( i.e in " + today + " )" + " would be Rs. " + total_am;
	}
	return false;
}
