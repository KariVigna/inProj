window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        

        let ans1 = document.getElementById("ans1");
        ans1.setAttritube("class", "hidden");
        let ans2 = document.getElementById("ans2");
        ans2.setAttribute("class", "hidden");
        let ans3 = document.getElementById("ans3");
        ans3.setAttribute("class", "hidden");
        

        function handleRadio(event) {
            event.preventDefault();
            const Q1 = document.querySelector("input[name=q1]:checked").value;
        }
        window.addEventListener("load", function() {
            this.document.getElementById("radio-form").addEventListener("submit", handleRadio);
        });


        event.preventDefault();

    }
}