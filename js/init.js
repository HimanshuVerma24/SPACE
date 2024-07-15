//Hook up the tweet display

$(document).ready(function() {
                           
    $(".countdown").countdown({
                date: "1 march 2025 15:00:00",
                format: "on"
            },
            
            function() {
                // callback function
            });

}); 