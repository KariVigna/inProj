window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        return 
       

        let ans1 = document.getElementById("ans1");
        ans1.setAttritube("class", "hidden");
        let ans2 = document.getElementById("ans2");
        ans2.setAttribute("class", "hidden");
        let ans3 = document.getElementById("ans3");
        ans3.setAttribute("class", "hidden");
        

        function handleRadio(event) {
            event.preventDefault();
            const Q1 = document.querySelector("input[name=q1]:checked").value;
            const Q2 = document.querySelector("input[name=q2]:checked").value;
            const Q3 = document.querySelector("input[name=q3]:checked").value;
            const Q4 = document.querySelector("input[name=q4]:checked").value;
            const Q5 = document.querySelector("input[name=q5]:checked").value;
        }
        
        window.addEventListener("load", function() {
            this.document.getElementById("radio-form").addEventListener("submit", handleRadio);
        

        let result;
            if (q1 === yes, q2 === yes, q3 === yes, q4 ===yes, q5 === yes) {
                ans1.removeAttribute("class", "hidden");
            } else if (q1 === no, q2 === no, q3 === no, q4 ===no, q5 === no) {
                ans2.removeAttribute("class", "hidden")
            } else {
                ans3.removeAttribute("class", "hidden");
            }
            }
            )}};

        


       
        

