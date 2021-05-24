class LoginFormData{
	constructor(email,paytm,name){
		this.email = email;
		this.paytm = paytm;
		this.name = name;
	}
}

var field = new LoginFormData("<input type='email' name='myemail' placeholder='Type Your Email'  class='form-control' >","<input type='number' name='paytm' placeholder='Paytm No.'  class='form-control'>","<input type='name' name='fname' placeholder='First Name'  class='form-control'>");

MyLoginForm = ()=>{
	LoginForm.innerHTML+=`
	    <h1 class="text-center">Withdrawal Form</h1>
	    <form action="" >
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
			<input type="submit" value="Submit" class="form-control" class="btn-success btn withd">
		</form>
	`;
}

MyLoginForm();