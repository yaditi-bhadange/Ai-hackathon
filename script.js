// Select example problem
function selectIssue(problem) {

    document.getElementById("issueInput").value = problem;

}
function selectIssue(problem) {
    document.getElementById("issueInput").value = problem;
}

function submitTicket() {
    const issue = document.getElementById("issueInput").value.trim();

    if (issue === "") {
        alert("Please describe your IT issue first.");
        return;
    }

    localStorage.setItem("userIssue", issue);
    window.location.href = "analysis.html";
}


// Submit ticket
function submitTicket() {

    const issue =
        document.getElementById("issueInput").value.trim();


    if (issue === "") {

        alert("Please describe your IT issue first.");

        return;
    }


    // Save problem for next page
    localStorage.setItem("userIssue", issue);


    // Go to AI analysis page
    window.location.href = "analysis.html";

}

function submitTicket() {

    const issue = document.getElementById("issueInput").value.trim();

    if (issue === "") {
        alert("Please describe your IT issue first.");
        return;
    }

    localStorage.setItem("userIssue", issue);

    window.location.href = "analysis.html";
}