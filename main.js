// Opacity Function
// https://www.w3schools.com/jquery/eff_animate.asp
$('label#q1').click(function() {
    $('label#q1').not(this).stop().animate({opacity: 0.7}, 200);
    $(this).stop().animate({opacity: 1.0}, 300);
 });
 $('label#q2').click(function() {
    $('label#q2').not(this).stop().animate({opacity: 0.7}, 200);
    $(this).stop().animate({opacity: 1.0}, 300);
 });
 $('label#q3').click(function() {
    $('label#q3').not(this).stop().animate({opacity: 0.7}, 200);
    $(this).stop().animate({opacity: 1.0}, 300);
 });
 $('label#q4').click(function() {
    $('label#q4').not(this).stop().animate({opacity: 0.7}, 200);
    $(this).stop().animate({opacity: 1.0}, 300);
 });
 $('label#q5').click(function() {
    $('label#q5').not(this).stop().animate({opacity: 0.7}, 200);
    $(this).stop().animate({opacity: 1.0}, 300);
 });

function addBorder() {
    document.getElementById("container").style.transition("all .2s linear");
    document.getElementById("container").style.addBorder("10px solid #285FEC");
}

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
});  
