class LoginFormData{
	constructor(email,paytm,name){
		this.email = email;
		this.paytm = paytm;
		this.name = name;
	}
}

var field = new LoginFormData("<input type='text' name='myemail' placeholder='Type Your Email'  class='form-control' id='useremail'>","<input type='text' name='paytm' placeholder='Paytm No.'  class='form-control' id='userPaytm'>","<input type='text' name='fname' placeholder='First Name'  class='form-control' id='username'>");

MyLoginForm = ()=>{
	LoginForm.innerHTML+=`
	    <h1 class="text-center">Withdrawal Form</h1>
	    <form>
		   <div class="form-group">
			    ${field.email}
			</div>
			<div class="form-group">
			    ${field.paytm}
			</div>
			<div class="form-group">
			    ${field.name}
			</div>
			<div class="form-group">
			    <input type="text" name="myPoints" id="acpoints" class="form-control" readonly>
			</div>
			
			<a onclick="wrtedata()" class="btn btn-success" id="send">Submit</a>
		</form>
		
	`;
}

MyLoginForm();