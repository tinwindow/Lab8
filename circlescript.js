		
		
		var area; 

		function areaOfCircle() { 
      	 radius = document.getElementById("userinput").value; 
      	 area = ((radius * radius) * Math.PI); 
      	 console.log(area);
      	 
    		
    	}

    	function showArea(){
  		var userInput = document.getElementById("userinput").value;
  		document.getElementById("userMsg").innerHTML = "The area of a circle with a radius of " + radius + " is " + area;

  		document.getElementById("circle").style.width = radius + "px";
  		document.getElementById("circle").style.height = radius + "px";
		}


    	
    	


    	//function circleSize(areaOfCircle) {
    		//var circle = document.getElementById("circle");
    		//if area <= 50; 
    		
    		
		//}


    	

      	 
      		



    	


    	
    //must apply console.log statement inside function with a parameter (radius); outside function can just call.	

    // var radius - document.getElementsById('userinput')

    //var radius = document.calculateradius.userInput.value;