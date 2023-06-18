window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
   
            let Q1 = document.querySelector("input[name=q1]:checked").value;
            let Q2 = document.querySelector("input[name=q2]:checked").value;
            let Q3 = document.querySelector("input[name=q3]:checked").value;
            let Q4 = document.querySelector("input[name=q4]:checked").value;
            let Q5 = document.querySelector("input[name=q5]:checked").value;
        

        let ans1 = document.getElementById("ans1");
        ans1.setAttritube("class", "hidden");
        let ans2 = document.getElementById("ans2");
        ans2.setAttribute("class", "hidden");
        let ans3 = document.getElementById("ans3");
        ans3.setAttribute("class", "hidden");
        
        

        let result;
            if (Q1 === yes, Q2 === yes, Q3 === yes, Q4 ===yes, Q5 === yes) {
                document.querySelector(div#ans1).removeAttribute("class");
            } else if (q1 === no, q2 === no, q3 === no, q4 ===no, q5 === no) {
                document.querySelector(div#ans2).removeAttribute("class")
            } else {
                document.querySelector(div#ans3).removeAttribute("class");
            }

            event.preventDefault();
            };
        };

        


       
        

