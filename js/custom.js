alert("Please Do Not Refresh The Page");
//ADD EVENT LISTENERE FOR LOAD MY PROMPT POPUP
window.addEventListener('load',function(){
	//SET TIMEOUT FOR PROMPT
	setTimeout(function(){
		//ACCESS ADD TO CLASS IN SECTION OF PROMPT
		document.querySelector('.add-to').style.display ="block";
		console.log("hello");
	},3000);//DURATION FOR 3 SECOND
	
	//ACCESS MAYBELATER BUTTON IN PROPMPT AND SET ACTION 
	document.querySelector('.later').addEventListener('click',function(){
	//SET ACTION
	document.querySelector('.add-to').style.display ="none";
	})
    
})

//CODE FOR CLAIM BUTTON FOR OPEN MY LOG IN FORM
//ADD CLICK EVENT LISTENERE FOR OPEN MY LOGIN FORM
claim.addEventListener('click',function(){
	//ACCESS LOGIN FORM AND SET ONCLICK ACTION DISPLAY NONE
	document.getElementById('LoginForm').style.display = "block";
})

//FUNCTION FOR ADD POINT IN PER AD CLICK 
function MyPoints(){
	//CREARE A VARAIBLE FOR DEFAULT POINTS
	var a = 1;
	   //ACCESS AD CLASS IN TASK SECTION 
		var ad = document.getElementsByClassName('ad');
		//ACCESS ALL AD CLASSESS
		for(var i=0; i< ad.length;i++){
			//SET CLICK EVENT IN ALL AD CLASS 
		    ad[i].addEventListener('click',function(){
			   //ACCESS POINTS ID FROM PROFILE PAGE AND PLUS (0 + 1) IN PER CLICK
			   document.getElementById('points').innerHTML=a++;
			   
			   //CALL MY MY LOG FUNCTION HERE 
			   myLog();
			   mypointsAccess();
			})
		}
	//console.log(LoginForm);

}
MyPoints();//END MY POINT AD FUNCTION



//FUNCTION FOR VALIDATE MY POINTS FOR WITHDRAWAL 
function myLog(){
	//ACCESS POINTS INNER TEXT FROM PROFILE PAGE 
	if(points.innerHTML === "10"){
		  //SET STYLE IN CLAIM BUTTON FOR BLOCK 
		  claim.style.display = "block";
	}else{
		  console.log("not to able for claim");
	}
}//CALL THIS FUNCTION IN UNDER MyPoints FUNCTION


//SET STYLE TO ONCLICK IN CLAIM BUTTON IS DISPLAY NONE 
claim.addEventListener('click',function(){
	claim.style.display = "none";
})


//FUNCTION FOR MY POINTS VALUE AUTOMATE FIELD  IN MY WITHDRAWAL FROM INPUT FIELD 
function mypointsAccess(){
   //ACCESS MY FORM INPUT FIELD AND SET MY POINTS INNTER TEXT IN  THIS INPUT FIELD
   acpoints.value=points.innerHTML;
   //console.log(acpoints.value);
}

//FUNCTION FOR MY AD IS COMPLETE
function cmplteAd(){
	//CREATE SET TIMEOUT FUNCTION
	setTimeout(function(){
	 //CRAETE VAR AND ACCESS CELEBRATION CLASS 
	  var celebration = document.getElementsByClassName('celebration');
	  //CRAEET VAR AND ACCESS MAIN AD CLASS
	   var h = document.getElementsByClassName('mainad');
	   //SET LOOP FOR H VARAIBLE OR MAIN AD CLASSESS
		for(var i =0;i<h.length;i++){
			//SET IF STATEMENT FOR ACTIONS
			if(h[i].style.display==="block"){
			h[i].style.display = "none";
			//CELEBRATION IS DISPLAY NONE AFTER CLICK IN AD
			
			document.querySelector('.celebration').style.display = "block";
			
			
			mycelebration();
		}else{
			
		}
	}
	
    },45000);//SET DURATION FOR MY AD IS AUTOMATIC CLOSE AFTER 45 SECOND

}//CALL FUNCTION IN MY CLICK AD 
  
  //FUNCTION FOR CELEBRATION TIME OUT 
  function mycelebration(){
	  //SET TIMEOUT FUNCTION FOR CLOSE AUTOMATIC MY CELEBRATION IS HIDE
	   setTimeout(function(){
		   //ACCESS CELEBRATION CLASS AND SET Style NONE 
	       document.querySelector('.celebration').style.display = "none";
		   
       },4000);//SET DURATION AFTER MY CELEBRATION IS HIDE
  }
  //CALL THIS FUNCTION IN MYCOMPLETAD FUNCTION 
   


//CODE FOR MY TASK BLOCK IS AUTOMATIC HIDE AFTER CLICK 
//ACCESS AD CLASS FROM TASK SECTION
var closeAd = document.querySelectorAll('.ad');
//ACCESS ALL AD CLASS
for(var i=0;i<closeAd.length;i++){
	//SET CLICK EVENT IN ALL AD CLASSES 
	closeAd[i].addEventListener('click',function(){
		//SET TIMOUT FUNCTION FOR DISPLAY NONE MY AD BLOCK 
		setTimeout(()=>{
			this.style.display = "none";
		},3000);//AFTER 3 SECOND DURATION MY AD BLOCK IS AUTOMATIC HIDE
			
	})
}


//FUNCTION FOR CLICK MY AD AND OPEN HIS AD 
function myclick(evt,myad){
	//alert("hello");
	//ACCESS MAIN AD CLASS
	var ad = document.getElementsByClassName('mainad');
	//ACCESS ALL MAIN AD CLASS 
	for(var i =0;i<ad.length;i++){
		//SET DEFAULT DISPLAY NONE
		ad[i].style.display = "none";
	}
	//WHEN USER CLICK IN TASK BLOCK HIS AD IS DISPLAY BLOCK 
	document.getElementById(myad).style.display = "block";
	
	
	cmplteAd();
}



//CODE FOR MY GUID TOOL 
//ACCESS MY CLOSE ID IN INDEX.HTML AND SET CLICK EVENT FOR HIDE GUID TOOL
myclose.addEventListener('click',function(){
	//SET Style FOR HIDE
	document.querySelector('.guidtool').style.display = "none";
})


//FUNCTION FOR ABOUT BASE DETAILS  
function mybase(evt,bae){
	
	//CREATE VAR AND ACCESS BASE CLASSES IN ABOUT SECTION
	var ba = document.getElementsByClassName('base');
	for(var i =0;i<ba.length;i++){
		//SET DEFAULT STYLE NONE IN ALL BASE CLASSESS
		ba[i].style.display = "none";
	}
	//WHEN MY CLICK IN BASE AFTRE HIS DETAILS IS BLOCK 
	document.getElementById(bae).style.display = "block";
	
}//CALL THIS FUNCTION IN ABOUT SECTION ANCHORE (MANUALY)


function prohold(){
	(profilePage.style.display ==="none")?profilePage.style.display = "block" : profilePage.style.display = "none"
}


//FUNCTION FOR NAVIGATION TABS
function mypage(evt,cp){
	//ACCESS ALL PAGE CLASSES FROM  INDEX PAGE 
	 var page = document.getElementsByClassName('page');
	 for(var i = 0;i < page.length;i++){
		 //SET DEFAULT Style NONE IN ALL PAGE CLASS
		  page[i].style.display="none";
	 }
	 document.getElementById(cp).style.display="block";
}
//CALL THIS FUNCTION IN ALL SECTION ANCHORE IN INDEX  (MANUALY)





