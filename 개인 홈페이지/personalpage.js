
// password
function password (){

	let answer = document.getElementById('password-input').value;
  let StyleRemove = document.getElementById('password-image');

	if(answer == ""){
		alert('enter the password');
    
	}
	else if(answer == "040315"){
    StyleRemove.classList.add('test')
	}
	else{
		document.getElementById('answer').value = "";
		alert('incorrect');
	};
};
//hint
function hint (){
  let cupRamen = document.getElementById('cup-ramen');
	cupRamen.classList.toggle('cup-ramen-clicked');
};