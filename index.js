let button = document.getElementById("myButton");
let button1 = document.getElementById("myButton1");
let button2 = document.getElementById("myButton2");

        button.addEventListener("click", function(){
        console.log("Homework Complete!");
        });

        button1.addEventListener("click", function(){
        console.log("Groceries Purchased");
        });
        
        button2.addEventListener("click", function(){
        console.log("Dinner Cooked!");
        });

        function changeText(){
            let heading = document.getElementById("myButton");
            heading.innerHTML = "Done!";
            }
        function changeText1(){
            let heading = document.getElementById("myButton1");
            heading.innerHTML = "Done!";
            }
        function changeText2(){
            let heading = document.getElementById("myButton2");
            heading.innerHTML = "Done!";
            }



let hour = new Date().getHours();
