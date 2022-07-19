function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    else if (input == "What is our final exam date") {
        return "11-may-2022";
    } else if (input == "rakesh patil") {
        return "He is developer";
    } else if (input == "prasad joshi") {
        return "he is developer";
    } else if (input == "yash patil") {
        return "he is develoer";
    } else if (input == "ashish khare") {
        return "He is renowned Wifi-Security Specialist and charmer in cyber space.";
    } else if (input == "principal") {
        return "Dr.Girish.K.Patnaik Sir";
    } else if (input == "hod computer department") {
        return "Dr.Manoj.E.Patil sir";
    } else if (input == "facilities") {
        return "Central Library, Wifi-campus, Boy's Hostel, Girl's Hostel, Gymnasium & Yoga Center. " ;
    } else if (input == "first year fee") {
        return "Depends on cast!" ;
    } else if (input == "college website") {
        return "https://sscoetjalgaon.ac.in/" ;
    } else if (input == "placement ratio") {
        return "50%" ;
    } else if (input == "College admission mail") {
        return "admission@sscoetjalgaon.ac.in";





    }

    // Simple responses
    if (input == "hello") {
        return "Hello, how can i help you !";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "who made you") {
        return "TechnoKings Team! (SSBTians)";
    } else if (input == "what is your name") {
        return "SSBT's ChatBot";
    } else if (input == "which languages can you speak") {
        return "only English!";
    } else if (input == "hi") {
        return "Hi there, how can i help you !";
    } else if (input == "are you robot") {
        return "Yes I am a robot, but I’m a good one. Let me prove it. How can I help you?";
    

    
    } else {
        return "Try asking something else!";
    }
}