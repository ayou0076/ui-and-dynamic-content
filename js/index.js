let input = document.getElementById('text');
let button = document.getElementById('button');
let list = document.getElementById('list');

function addItem() {
	
	input.value = input.value.trim();
		
	if(input.value!=""){		
		let li = document.createElement('li');
		li.innerText = input.value; 
		list.appendChild(li);
		alert("Grocery Item Has Been Entered");
	} else{
		alert("Item not entered");
	}
}
button.addEventListener('click', addItem);