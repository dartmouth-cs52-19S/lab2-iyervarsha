$(document).ready(function(){

    function addBorder() {
        document.getElementById("container").style.transition("all .2s linear");
        document.getElementById("container").style.addBorder("10px solid #285FEC");
    }
    // Dynamically Loading Data 
    $.getJSON("data.json", function(data) {
        console.log(data);
        for(var question in data.questions) {
            console.log(question);
            var $newdiv1 = document.createElement( "div" ) // creating a div to append to 
            // $("body").append($newdiv1);
            // $($newdiv1).html("varsha");
        }
        // now you can do something with this data. 
        // remember you can only work with the data in this callback
        // data.title has the title
        // maybe you want to loop through data.questions? 
      });
    
      // Calculating Results: 

      $('#submit').on('click', function(event) {
        // gather all checked radio-button values
        event.preventDefault(); // prevents screen from reloading
        console.log("submitted");

        $("#result").addClass("result-show");
        $("#result").removeClass("result-hide");
        $("#warning").css("display", "none");
        $("#result").css("display", "none");

        var choices = $("input[type='radio']:checked").map(function(i, radio) {
          return $(radio).val();
        }).toArray();


        var total = 0;
        let result;
        let description;

        // If the quiz is filled out
        if (choices.length < 5) {
            result = "WARNING";
            description = "Are You Sure You Didn't Miss a Question?"
            document.getElementById('modal-text').innerHTML += result;
            document.getElementById('modal-description').innerHTML += description;

            // https://www.w3schools.com/howto/howto_css_modals.asp

            // Get the modal
            var modal = document.getElementById('results');

            // Get the button that opens the modal
            var btn = document.getElementById("submit");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on the button, open the modal 
                modal.style.display = "flex";
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                document.getElementById('modal-text').innerHTML = "";
                document.getElementById('modal-description').innerHTML = "";
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    document.getElementById('modal-text').innerHTML = "";
                    document.getElementById('modal-description').innerHTML = "";
                    modal.style.display = "none";
                }
            }
            
        }
        if (choices.length == 5) {
            for (var i = 0; i < choices.length; i++){
                total += JSON.parse(choices[i]);
            }

            
            if (total <= 8) {
                console.log(total);
                console.log("You Got: Lazy Varsha");
                result = "Lazy Varsha";
                description = "You probs haven't gone to the gym in 3 terms...Idk what to tell you man...";
                $("#healthy").removeClass("modal-image-show");
                $("#sadboi").removeClass("modal-image-show");
                $("#hardo").removeClass("modal-image-show");
                $("#lazy").addClass("modal-image-show");
    
            }
    
            if (total > 8 && total <= 12 ) {
                console.log(total);
                console.log("You Got: Healthy Varsha");
                result = "Healthy Varsha";
                description = "Ok, I'm sorry, but you're really the odd one out here";
                $("#healthy").addClass("modal-image-show");
                $("#sadboi").removeClass("modal-image-show");
                $("#hardo").removeClass("modal-image-show");
                $("#lazy").removeClass("modal-image-show");
    
            }
    
            if(total > 12 && total <= 16) {
                console.log(total);
                console.log("You Got: Hardo Varsha");
                result = "Hardo Varsha";
                description = "I hope your GPA went up at least...";
                $("#hardo").addClass("modal-image-show");
                $("#healthy").removeClass("modal-image-show");
                $("#sadboi").removeClass("modal-image-show");
                $("#lazy").removeClass("modal-image-show");
    
            }
    
            if (total > 16 && total <=20){
                console.log(total);
                console.log("You Got: Sadboi Varsha");
                result = "Sadboi Varsha";
                description = "Honestly, why are you taking this quiz? Please sleep...";
                $("#sadboi").addClass("modal-image-show");
                $("#healthy").removeClass("modal-image-show");
                $("#lazy").removeClass("modal-image-show");
                $("#hardo").removeClass("modal-image-show");
    
            }

            document.getElementById('modal-text').innerHTML += result;
            document.getElementById('modal-description').innerHTML += description;

            // https://www.w3schools.com/howto/howto_css_modals.asp

            // Get the modal
            var modal = document.getElementById('results');

            // Get the button that opens the modal
            var btn = document.getElementById("submit");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on the button, open the modal 
                modal.style.display = "flex";
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                document.getElementById('modal-text').innerHTML = "";
                document.getElementById('modal-description').innerHTML = "";
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    document.getElementById('modal-text').innerHTML = "";
                    document.getElementById('modal-description').innerHTML = "";
                    modal.style.display = "none";
                }
            }
        }
        // else {
        //     result = "WARNING";
        //     description = "Did You Answer All of the Questions?";
        //     document.getElementById('modal-text').innerHTML += result;
        //     $("#warning").css("display", "flex");
        // }


      });
    
});
