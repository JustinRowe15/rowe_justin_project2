// Activity 2
// Visual Frameworks 1207 (VFW)
// Mobile Development
// Full Sail University

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function () {

	//getElementById function
	function $(x) {
		var element = document.getElementById(x);
		return element;
	}

	//Create select field element and populate with options.
	function enterProduct() {
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeInfoBlocks = document.createElement('select');
		makeInfoBlocks.setAttribute("id", "groups");
		for (var i=0, j=productType.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optionText = productType[i];
			makeOption.setAttribute("value", optionText);
			makeOption.innerHTML = optionText;
			makeInfoBlocks.appendChild(makeOption);
		}
		selectLi.appendChild(makeInfoBlocks);
	}
	
	/*function getSelectedRadio(){
		var radios = document.forms[0].nocontracting;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				nocontractingValue = radios[i].value;
			}
		}
	}*/
	
	function getContractingCheckboxValue() {
		if($('nocontracting').checked) {
			nocontractingValue = $('nocontracting').value;
		} else {
			nocontractingValue = "No";
		}
	}
	
	function getTestingCheckboxValue() {
		if($('notesting').checked) {
			notestingValue = $('notesting').value;
		} else {
			notestingValue = "No";
		}
	}
	
	function getTrainingCheckboxValue() {
		if($('notraining').checked) {
			notrainingValue = $('notraining').value;
		} else {
			notrainingValue = "No";
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('projectForm').style.display = "none";
				$('clear').style.display = "inline";
				$('display').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('projectForm').style.display = "block";
				$('clear').style.display = "inline";
				$('display').style.display = "inline";
				$('addNew').style.display = "inline";
				$('items').style.display = "none";
				break;
				
			default:
				return false;
		}
	}
	
	function storeData() {
		var id 						= Math.floor(Math.random()*100000001);
		var item					= {};
			item.group				= ["Group", $('groups').value];
			item.pname				= ["Project Name:", $('pname').value];
			item.pmfname			= ["First Name:", $('pmfname').value];
			item.pmlname			= ["Last Name:", $('pmlname').value];
			item.sdate				= ["Project Start Date:", $('sdate').value];
			item.fdate				= ["Project Finish Date:", $('fdate').value];
			item.contractstart		= ["Contract Start Date:", $('contractstart').value];
			item.contractaward		= ["Contract Award Date:", $('contractaward').value];
			item.productionstart	= ["Vendor Production Start Date:", $('productionstart').value];
			item.productionfinish	= ["Vendor Production Finish Date:", $('productionfinish').value];
			item.teststart			= ["Testing Start Date:", $('teststart').value];
			item.testfinish			= ["Testing Finish Date:", $('testfinish').value];
			item.delivery			= ["Delivery Date:", $('delivery').value];
			item.nocontracting		= ["Contracting N/A", nocontractingValue];
			item.notesting			= ["Testing N/A", notestingValue];	
			item.notraining			= ["Training N/A", notrainingValue];
			item.notes				= ["Notes:", $('notes').value];
		//Save Data to Local Storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Project Saved!");
		
	}
	
	function getData(){
		toggleControls("on");
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "display";
		for(i=0, j=localStorage.length; i<j; i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}
	
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		} else {
			localStorage.clear();
			alert("All contacts are deleted!");
			window.location.reload();
			return false;
		}
	}	

	//variable defaults
	var productType = ["Commercial Off The Shelf", "Modified Commercial Off The Shelf", "Research and Development"];
		nocontractingValue = "No";
		notestingValue = "No";
		notrainingValue = "No"
	;
	enterProduct();

	//Set Link & Submit Click Events
	var displayLink = $('display');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);



});