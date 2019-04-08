$.getJSON("data.json", function(data) {
    for (var questions in data.questions) {
        let result; 
        if (sum < 5) { // did not answer all questions
            document.getElementById("toggle_answer").innerHTML = "Please complete all questions!";
            
        } 
        else if (sum == 5) { // Lazy
            result = "Lazy Varsha"
            
        }
        else if (sum <= 10) { // Healthy
            result = "Healthy Varsha"
        }
        else if (sum <= 15) { // Hardo
            result = "Hardo Varsha"
        }
        else { // Sadboi 15+ 
            result = "Sadboi Varsha"
        }

        $("#result p").text("You are " + result);
        $("#result").css("display", "flex");

        let image;
        switch(result){
            case ('Lazy Varsha'):
                image = 'lazy';
                break;
            case ('Healthy Varsha'):
                image = 'healthy';
                break;
            case('Hardo Varsha'):
                image = 'hardo';
                break;
            default: // Sadboi Varsha
                image = 'hardo'; 
                break;
        }
    }
    // now you can do something with this data. 
    // remember you can only work with the data in this callback
    // data.title has the title
    // maybe you want to loop through data.questions? 
  });