document.querySelector(".switcher-btn").onclick = () =>{
    document.querySelector(".color-switcher").classList.toggle("active");
}


$(".theme-buttons").click(function(){
		 var id = this.id
		
		switch(id){
			case "purple":
         $(":root").css({"--purpel":"#8e44ad"});
        $("h1").text("purple");
				break;
			case "dark-blue":
         $(":root").css({"--purpel":"#2980b9"});
         $("h1").text("dark blue");
				break;
			case "orange":
        $(":root").css({"--purpel":"#f39c12"});
         $("h1").text("orange");
				break;
			case "green":
         $(":root").css({"--purpel":"#27ae60"});
         $("h1").text("green");
				break;
			case "red":
          $(":root").css({"--purpel":"#ea2027"});
         $("h1").text("red");
				break;
			case "pink":
        $(":root").css({"--purpel":"#ff4757"});
        $("h1").text("pink");
				break;
			case "yellow":
          $(":root").css({"--purpel":"#ffc312"});
         $("h1").text("yellow");
				break;
        case "blue":
        $(":root").css({"--purpel":"#17c0eb"});
         $("h1").text("blue");
				break;

		}
	});