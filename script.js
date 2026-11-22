function calculateResult() {
    var name = document.getElementById("studentName").value;
    var m1 = Number(document.getElementById("sub1").value);
    var m2 = Number(document.getElementById("sub2").value);
    var m3 = Number(document.getElementById("sub3").value);

    var marks = [m1, m2, m3];
    var total = 0;

    for (var i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    var percentage = (total / 3).toFixed(2);
    var grade = "";

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    document.getElementById("resName").innerText = "Name: " + name;
    document.getElementById("resTotal").innerText = "Total Marks: " + total + " / 300";
    document.getElementById("resPercent").innerText = "Percentage: " + percentage + "%";
    document.getElementById("resGrade").innerText = "Grade: " + grade;
    document.getElementById("resultBox").style.display = "block";
}
