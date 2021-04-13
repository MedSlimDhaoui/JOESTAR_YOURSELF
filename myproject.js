function QuestionMaker(Question) {
	return {
	Question : Question,
	Answer1  : 'true', //+1
	Answer2  : 'false',//-1
	};
}

var question1 = QuestionMaker("DO YOU HATE STONE MASKS ?")
var question2 = QuestionMaker("DO YOU RUN AWAY FROM BATTLES WHEN THE SITUATION IS DESPERATE ?")
var question3 = QuestionMaker("DO YOU HATE TIME STOPPING VAMPIRES ?")
var question4 = QuestionMaker("Will YOU DESTROY SOMEONE WHO INSULTS YOUR HAIRCUT ?")
var question5 = QuestionMaker("DO YOU WANT TO BECOME A GANG-STAR ?")
var question6 = QuestionMaker("DO YOU HATE A GAY BLACK PRIEST WHO WANTS TO ACHIEVE HEAVEN ?")
var question7 = QuestionMaker("Will YOU PARTICIPATE IN A HORSE RACE WHERE PEOPLE ARE LOOKING FOR JESUS'S CORPSE ?")
var question8 = QuestionMaker("DO YOU HAVE A GAP IN YOUR FRONT TEETH ?")
var question9 = QuestionMaker("IS SPEEDWAGON THE BEST WAIFU ?")
var question10 = QuestionMaker("DO YOU BELIEVE IN ARAKISM ?")

var allmyquestion = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]

var score = 0
function QuestionAsker (allmyquestion){
for ( var i = 0 ; i<=allmyquestion.length-1 ; i++ ) {
	if ($("#radiotrue"+ i +":checked").val() === allmyquestion[i].Answer1 ){
		score = score + 1
	}
	else if ($("#radiotrue"+ i +":checked").val() ===undefined ){
		score = score - 1
	}
}
return score
}

function ScoreCounting(score){
if ( score < 6){
return " YOU ARE BASIC "
 }
 else return "YOU ARE A JOESTAR"
}
$(document).ready(function(){
	$("#btnsubmit").hide();
	$("#btn").click(function(){
		$("#myparagraph").hide();
		$("#btn").hide()
		$("#btnsubmit").show();
		for ( var i = 0 ; i<=allmyquestion.length-1 ; i++ ){
			var question = allmyquestion[i]
			$("#myquestions").append("<p>" + question.Question + "</p>")
			$("#myquestions").append("<input type='radio' value='true' id='radiotrue"+i+"' class='radioboxinput'/>")
			$("#myquestions").append('<label for="radiotrue'+i+'"class="label">'+question.Answer1+'</label><br>')
			$("#myquestions").append("<input type='radio' value='false' id='radiofalse"+i+"' class='radioboxinput'/>")
			$("#myquestions").append('<label for="radiofalse'+i+'" class="label">'+question.Answer2+'</label><br>')
	}
});
	$("#btnsubmit").click(function(){
	$("#myquestions").hide()
    $("#final").append(
	   ScoreCounting(QuestionAsker(allmyquestion)))
	})
})