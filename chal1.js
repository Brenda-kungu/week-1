function studentGrade(){
    let score = 79;
    let letter;
if (score > 79) {
    letter = "A";
} else if (score >=60 && score <= 79) {
    letter = "B";
} else if (score >=59 && score <= 49) {
    letter = "C";
} else if (score >40 && score < 49) {
    letter = "D";
} else {
    letter = "E";
}
}

