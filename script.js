function copyText(){
	
	var inText = $('.input-text').val();
	var hiddenc = $('.hidden-class');
	var inNum = $('.input-number').val();
if(inText == ""){
	hiddenc.css("display","flex");
	$('.message h1').text("Please Fill in the input text box");
}else{
	if(inNum == ""){
	
	hiddenc.css("display","flex");
	$('.message h1').text('Please write How many times Copy this text ?');
	}else{
		
	var outText = $('.output-text');
	var finalText = "";
	for(var i=0;i<inNum;i++){
	 finalText =finalText+inText;	
	}
	outText.val(finalText);
		
		
		
	}	
}
	
	
	
}
function fHide(){
	var hiddenc = $('.hidden-class');
	hiddenc.css("display","none");
	
}
function copyTextm(){
	var text = $('#output-text');	             	 
	 text.select();
     text.setSelectionRange(0, 99999)
     document.execCommand('copy');
}

