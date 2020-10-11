var str = "";
var vote_count = {
	orange : 0,
	red : 0,
	pink : 0,
	green : 0,
	blue : 0,
	lightblue : 0,
	magenta : 0,
	brown : 0,
	skyblue : 0,
	violet : 0,
};

$(document).ready(
	function(){
		$("#div1").click(
			function(){
				vote_count.orange++;
				$("#p1vote").html(vote_count.orange);
			}
		);
	    $("#div2").click(
			function(){
				vote_count.red++;
				$("#p2vote").html(vote_count.red);
			}
		);
		$("#div3").click(
			function(){
				vote_count.pink++;
				$("#p3vote").html(vote_count.pink);
			}
		);
		$("#div4").click(
			function(){
				vote_count.green++;
				$("#p4vote").html(vote_count.green);
			}
		);
		$("#div5").click(
			function(){
				vote_count.blue++;
				$("#p5vote").html(vote_count.blue);
			}
		);
		$("#div6").click(
			function(){
				vote_count.lightblue++;
				$("#p6vote").html(vote_count.lightblue);
			}
		);
		$("#div7").click(
			function(){
				vote_count.magenta++;
				$("#p7vote").html(vote_count.magenta);
			}
		);
		$("#div8").click(
			function(){
				vote_count.brown++;
				$("#p8vote").html(vote_count.brown);
			}
		);
		$("#div9").click(
			function(){
				vote_count.skyblue++;
				$("#p9vote").html(vote_count.skyblue);
			}
		);
		$("#div10").click(
			function(){
				vote_count.violet++;
				$("#p10vote").html(vote_count.violet);
			}
		);
	}
);
