function initPage() {
	initNavButtons();
}
function initNavButtons(){
	var buttons = document.getElementsByTagName("a");
	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].className.indexOf("button") != -1) {
			buttons[i].onmousedown = function(){
				if (this.className.indexOf("pressed") == -1) 
					this.className += " pressed";
			}
			buttons[i].onmouseup = function(){
				this.className = this.className.replace("pressed", "");
			}
			buttons[i].onmouseout = function(){
				this.className = this.className.replace("pressed", "");
			}
		}
	}
	var bns = document.getElementsByTagName("input");
	for (var i = 0; i < bns.length; i++) {
		if (bns[i].type == "submit") {
			bns[i].onmousedown = function(){
				if (this.className.indexOf("pressed") == -1) 
					this.className += " pressed";
			}
			bns[i].onmouseup = function(){
				this.className = this.className.replace("pressed", "");
			}
			bns[i].onmouseout = function(){
				this.className = this.className.replace("pressed", "");
			}
		}
	}
}
if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage)
