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



function mypointsAccess(){
   acpoints.value=points.innerHTML;
   console.log(acpoints.value);
}
   function cmplteAd(){
	    setTimeout(function(){
		 
		  var celebration = document.getElementsByClassName('celebration');
		   var h = document.getElementsByClassName('mainad');
			for(var i =0;i<h.length;i++){
				if(h[i].style.display==="block"){
				h[i].style.display = "none";
				document.querySelector('.celebration').style.display = "block";
				mycelebration();
			}else{
				
			}
		}
	},45000);
   }
  
  
  function mycelebration(){
	   setTimeout(function(){
	       document.querySelector('.celebration').style.display = "none";
       },6000);
  }
   


var closeAd = document.querySelectorAll('.ad');
for(var i=0;i<closeAd.length;i++){
	closeAd[i].addEventListener('click',function(){
		setTimeout(()=>{
			this.style.display = "none";
		},50000);
			
	})
}



function myclick(evt,myad){
	//alert("hello");
	var ad = document.getElementsByClassName('mainad');
	for(var i =0;i<ad.length;i++){
		ad[i].style.display = "none";
	}
	document.getElementById(myad).style.display = "block";
	cmplteAd();
}

myclose.addEventListener('click',function(){
	document.querySelector('.guidtool').style.display = "none";
})
function mybase(evt,bae){
	//alert("hello");
	var ba = document.getElementsByClassName('base');
	for(var i =0;i<ba.length;i++){
		ba[i].style.display = "none";
	}
	document.getElementById(bae).style.display = "block";
	
}
function prohold(){
	(profilePage.style.display ==="none")?profilePage.style.display = "block" : profilePage.style.display = "none"
	
}



function mypage(evt,cp){
	 var page = document.getElementsByClassName('page');
	 for(var i = 0;i < page.length;i++){
		  page[i].style.display="none";
	 }
	 document.getElementById(cp).style.display="block";
}






