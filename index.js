function clickedButton(){
    // Line1 taking informations
    var midterm1note = parseFloat(document.getElementById('midterm1-exam').value);
    var midterm1class = parseFloat(document.getElementById('midterm1-class').value);
    var midterm1percentage = parseFloat(document.getElementById('midterm1-percentage').value);

    var homework1note = parseFloat(document.getElementById('homework1-exam').value);
    var homework1class = parseFloat(document.getElementById('homework1-class').value);
    var homework1percentage = parseFloat(document.getElementById('homework1-percentage').value);

    var homework2note = parseFloat(document.getElementById('homework2-exam').value);
    var homework2class = parseFloat(document.getElementById('homework2-class').value);
    var homework2percentage = parseFloat(document.getElementById('homework2-percentage').value);
    
    var quiz1note = parseFloat(document.getElementById('quiz1-exam').value);
    var quiz1class = parseFloat(document.getElementById('quiz1-class').value);
    var quiz1percentage = parseFloat(document.getElementById('quiz1-percentage').value);

    var quiz2note = parseFloat(document.getElementById('quiz2-exam').value);
    var quiz2class = parseFloat(document.getElementById('quiz2-class').value);
    var quiz2percentage = parseFloat(document.getElementById('quiz2-percentage').value);

    // Line2 taking informations
    var midterm2note = parseFloat(document.getElementById('midterm2-exam').value);
    var midterm2class = parseFloat(document.getElementById('midterm2-class').value);
    var midterm2percentage = parseFloat(document.getElementById('midterm2-percentage').value);
    
    var homework3note = parseFloat(document.getElementById('homework3-exam').value);
    var homework3class = parseFloat(document.getElementById('homework3-class').value);
    var homework3percentage = parseFloat(document.getElementById('homework3-percentage').value);
    
    var homework4note = parseFloat(document.getElementById('homework4-exam').value);
    var homework4class = parseFloat(document.getElementById('homework4-class').value);
    var homework4percentage = parseFloat(document.getElementById('homework4-percentage').value);
    
    var quiz3note = parseFloat(document.getElementById('quiz3-exam').value);
    var quiz3class = parseFloat(document.getElementById('quiz3-class').value);
    var quiz3percentage = parseFloat(document.getElementById('quiz3-percentage').value);
    
    var quiz4note = parseFloat(document.getElementById('quiz4-exam').value);
    var quiz4class = parseFloat(document.getElementById('quiz4-class').value);
    var quiz4percentage = parseFloat(document.getElementById('quiz4-percentage').value);

    // Line3 taking informations
    var finalnote = parseFloat(document.getElementById('final-exam').value);
    var finalclass = parseFloat(document.getElementById('final-class').value);
    var finalpercentage = parseFloat(document.getElementById('final-percentage').value);
    
    var homework5note = parseFloat(document.getElementById('homework5-exam').value);
    var homework5class = parseFloat(document.getElementById('homework5-class').value);
    var homework5percentage = parseFloat(document.getElementById('homework5-percentage').value);

    var homework6note = parseFloat(document.getElementById('homework6-exam').value);
    var homework6class = parseFloat(document.getElementById('homework6-class').value);
    var homework6percentage = parseFloat(document.getElementById('homework6-percentage').value);

    var quiz5note = parseFloat(document.getElementById('quiz5-exam').value);
    var quiz5class = parseFloat(document.getElementById('quiz5-class').value);
    var quiz5percentage = parseFloat(document.getElementById('quiz5-percentage').value);

    var quiz6note = parseFloat(document.getElementById('quiz6-exam').value);
    var quiz6class = parseFloat(document.getElementById('quiz6-class').value);
    var quiz6percentage = parseFloat(document.getElementById('quiz6-percentage').value);

    // Checkhing total percentage
    totalPercentage = 0;
    isNaN(midterm1percentage) || midterm1percentage<0 ? null : totalPercentage+=midterm1percentage
    isNaN(midterm2percentage) || midterm2percentage<0 ? null : totalPercentage+=midterm2percentage
    isNaN(homework1percentage)|| homework1percentage<0 ? null : totalPercentage+=homework1percentage
    isNaN(homework2percentage)|| homework2percentage<0 ? null : totalPercentage+=homework2percentage
    isNaN(homework3percentage)|| homework3percentage<0 ? null : totalPercentage+=homework3percentage
    isNaN(homework4percentage)|| homework4percentage<0 ? null : totalPercentage+=homework4percentage
    isNaN(homework5percentage)|| homework5percentage<0 ? null : totalPercentage+=homework5percentage
    isNaN(homework6percentage)|| homework6percentage<0 ? null : totalPercentage+=homework6percentage
    isNaN(quiz1percentage)    || quiz1percentage<0 ? null : totalPercentage+=quiz1percentage
    isNaN(quiz2percentage)    || quiz2percentage<0 ? null : totalPercentage+=quiz2percentage
    isNaN(quiz3percentage)    || quiz3percentage<0 ? null : totalPercentage+=quiz3percentage
    isNaN(quiz4percentage)    || quiz4percentage<0 ? null : totalPercentage+=quiz4percentage
    isNaN(quiz5percentage)    || quiz5percentage<0 ? null : totalPercentage+=quiz5percentage
    isNaN(quiz6percentage)    || quiz6percentage<0 ? null : totalPercentage+=quiz6percentage
    isNaN(finalpercentage)    || finalpercentage<0 ? null : totalPercentage+=finalpercentage

    if (totalPercentage != 100){
        alert("Total Percentage must be 100!")        
    } else{
        // Checking the all student gradas to between 0 and 100
        trueStudentGrade = 0
        midterm1note>100 || midterm1note<0 ? null:  trueStudentGrade += 1
        midterm2note>100 || midterm2note<0 ? null:  trueStudentGrade += 1
        homework1note>100 || homework1note<0 ? null:  trueStudentGrade += 1 
        homework2note>100 || homework2note<0 ? null:  trueStudentGrade += 1
        homework3note>100 || homework3note<0 ? null:  trueStudentGrade += 1 
        homework4note>100 || homework4note<0 ? null:  trueStudentGrade += 1
        homework5note>100 || homework5note<0 ? null:  trueStudentGrade += 1
        homework6note>100 || homework6note<0 ? null:  trueStudentGrade += 1
        quiz1note>100 || quiz1note<0 ? null:  trueStudentGrade += 1
        quiz2note>100 || quiz2note<0 ? null:  trueStudentGrade += 1
        quiz3note>100 || quiz3note<0 ? null:  trueStudentGrade += 1
        quiz4note>100 || quiz4note<0 ? null:  trueStudentGrade += 1
        quiz5note>100 || quiz5note<0 ? null:  trueStudentGrade += 1
        quiz6note>100 || quiz6note<0 ? null:  trueStudentGrade += 1
        finalnote>100 || finalnote<0 ? null:  trueStudentGrade += 1
        // Check with border
        midterm1note>100 || midterm1note<0 
        ? document.getElementById('midterm1-exam').style="border: 2px solid red"
        : document.getElementById('midterm1-exam').style="border: 2px solid white"
        midterm2note>100 || midterm2note<0 
        ? document.getElementById('midterm2-exam').style="border: 2px solid red" 
        : document.getElementById('midterm2-exam').style="border: 2px solid white"
        homework1note>100 || homework1note<0 
        ? document.getElementById('homework1-exam').style="border: 2px solid red" 
        : document.getElementById('homework1-exam').style="border: 2px solid white"
        homework2note>100 || homework2note<0 
        ? document.getElementById('homework2-exam').style="border: 2px solid red" 
        : document.getElementById('homework2-exam').style="border: 2px solid white"
        homework3note>100 || homework3note<0 
        ? document.getElementById('homework3-exam').style="border: 2px solid red" 
        : document.getElementById('homework3-exam').style="border: 2px solid white"
        homework4note>100 || homework4note<0 
        ? document.getElementById('homework4-exam').style="border: 2px solid red" 
        : document.getElementById('homework4-exam').style="border: 2px solid white"
        homework5note>100 || homework5note<0 
        ? document.getElementById('homework5-exam').style="border: 2px solid red" 
        : document.getElementById('homework5-exam').style="border: 2px solid white"
        homework6note>100 || homework6note<0 
        ? document.getElementById('homework6-exam').style="border: 2px solid red" 
        : document.getElementById('homework6-exam').style="border: 2px solid white"
        quiz1note>100 || quiz1note<0 
        ? document.getElementById('quiz1-exam').style="border: 2px solid red" 
        : document.getElementById('quiz1-exam').style="border: 2px solid white"
        quiz2note>100 || quiz2note<0 
        ? document.getElementById('quiz2-exam').style="border: 2px solid red" 
        : document.getElementById('quiz2-exam').style="border: 2px solid white"
        quiz3note>100 || quiz3note<0 
        ? document.getElementById('quiz3-exam').style="border: 2px solid red" 
        : document.getElementById('quiz3-exam').style="border: 2px solid white"
        quiz4note>100 || quiz4note<0 
        ? document.getElementById('quiz4-exam').style="border: 2px solid red" 
        : document.getElementById('quiz4-exam').style="border: 2px solid white"
        quiz5note>100 || quiz5note<0 
        ? document.getElementById('quiz5-exam').style="border: 2px solid red" 
        : document.getElementById('quiz5-exam').style="border: 2px solid white"
        quiz6note>100 || quiz6note<0 
        ? document.getElementById('quiz6-exam').style="border: 2px solid red" 
        : document.getElementById('quiz6-exam').style="border: 2px solid white"
        finalnote>100 || finalnote<0 
        ? document.getElementById('final-exam').style="border: 2px solid red" 
        : document.getElementById('final-exam').style="border: 2px solid white"
        
        // Checking the all class avg true
        trueClassAvg = 0
        midterm1class>100 || midterm1class<0 ? null:  trueClassAvg += 1
        midterm2class>100 || midterm2class<0 ? null:  trueClassAvg += 1
        homework1class>100 || homework1class<0 ? null:  trueClassAvg += 1 
        homework2class>100 || homework2class<0 ? null:  trueClassAvg += 1
        homework3class>100 || homework3class<0 ? null:  trueClassAvg += 1 
        homework4class>100 || homework4class<0 ? null:  trueClassAvg += 1
        homework5class>100 || homework5class<0 ? null:  trueClassAvg += 1
        homework6class>100 || homework6class<0 ? null:  trueClassAvg += 1
        quiz1class>100 || quiz1class<0 ? null:  trueClassAvg += 1
        quiz2class>100 || quiz2class<0 ? null:  trueClassAvg += 1
        quiz3class>100 || quiz3class<0 ? null:  trueClassAvg += 1
        quiz4class>100 || quiz4class<0 ? null:  trueClassAvg += 1
        quiz5class>100 || quiz5class<0 ? null:  trueClassAvg += 1
        quiz6class>100 || quiz6class<0 ? null:  trueClassAvg += 1
        finalclass>100 || finalclass<0 ? null:  trueClassAvg += 1
        // Check with border
        midterm1class>100 || midterm1class<0 
        ? document.getElementById('midterm1-class').style="border: 2px solid red"
        : document.getElementById('midterm1-class').style="border: 2px solid white"
        midterm2class>100 || midterm2class<0 
        ? document.getElementById('midterm2-class').style="border: 2px solid red" 
        : document.getElementById('midterm2-class').style="border: 2px solid white"
        homework1class>100 || homework1class<0 
        ? document.getElementById('homework1-class').style="border: 2px solid red" 
        : document.getElementById('homework1-class').style="border: 2px solid white"
        homework2class>100 || homework2class<0 
        ? document.getElementById('homework2-class').style="border: 2px solid red" 
        : document.getElementById('homework2-class').style="border: 2px solid white"
        homework3class>100 || homework3class<0 
        ? document.getElementById('homework3-class').style="border: 2px solid red" 
        : document.getElementById('homework3-class').style="border: 2px solid white"
        homework4class>100 || homework4class<0 
        ? document.getElementById('homework4-class').style="border: 2px solid red" 
        : document.getElementById('homework4-class').style="border: 2px solid white"
        homework5class>100 || homework5class<0 
        ? document.getElementById('homework5-class').style="border: 2px solid red" 
        : document.getElementById('homework5-class').style="border: 2px solid white"
        homework6class>100 || homework6class<0 
        ? document.getElementById('homework6-class').style="border: 2px solid red" 
        : document.getElementById('homework6-class').style="border: 2px solid white"
        quiz1class>100 || quiz1class<0 
        ? document.getElementById('quiz1-class').style="border: 2px solid red" 
        : document.getElementById('quiz1-class').style="border: 2px solid white"
        quiz2class>100 || quiz2class<0 
        ? document.getElementById('quiz2-class').style="border: 2px solid red" 
        : document.getElementById('quiz2-class').style="border: 2px solid white"
        quiz3class>100 || quiz3class<0 
        ? document.getElementById('quiz3-class').style="border: 2px solid red" 
        : document.getElementById('quiz3-class').style="border: 2px solid white"
        quiz4class>100 || quiz4class<0 
        ? document.getElementById('quiz4-class').style="border: 2px solid red" 
        : document.getElementById('quiz4-class').style="border: 2px solid white"
        quiz5class>100 || quiz5class<0 
        ? document.getElementById('quiz5-class').style="border: 2px solid red" 
        : document.getElementById('quiz5-class').style="border: 2px solid white"
        quiz6class>100 || quiz6class<0 
        ? document.getElementById('quiz6-class').style="border: 2px solid red" 
        : document.getElementById('quiz6-class').style="border: 2px solid white"
        finalclass>100 || finalclass<0 
        ? document.getElementById('final-class').style="border: 2px solid red" 
        : document.getElementById('final-class').style="border: 2px solid white"

        if (trueStudentGrade == 15 && trueClassAvg == 15) {
            // Calculate the student average
            studentAverage = 0
            isNaN(midterm1note) || isNaN(midterm1percentage) ? null : studentAverage += (midterm1note * midterm1percentage /100)
            isNaN(midterm2note) || isNaN(midterm2percentage) ? null : studentAverage += (midterm2note * midterm2percentage /100)
            isNaN(homework1note) || isNaN(homework1percentage) ? null : studentAverage += (homework1note * homework1percentage /100)
            isNaN(homework2note) || isNaN(homework2percentage) ? null : studentAverage += (homework2note * homework2percentage /100)
            isNaN(homework3note) || isNaN(homework3percentage) ? null : studentAverage += (homework3note * homework3percentage /100)
            isNaN(homework4note) || isNaN(homework4percentage) ? null : studentAverage += (homework4note * homework4percentage /100)
            isNaN(homework5note) || isNaN(homework5percentage) ? null : studentAverage += (homework5note * homework5percentage /100)
            isNaN(homework6note) || isNaN(homework6percentage) ? null : studentAverage += (homework6note * homework6percentage /100)
            isNaN(quiz1note) || isNaN(quiz1percentage) ? null : studentAverage += (quiz1note * quiz1percentage /100)
            isNaN(quiz2note) || isNaN(quiz2percentage) ? null : studentAverage += (quiz2note * quiz2percentage /100)
            isNaN(quiz3note) || isNaN(quiz3percentage) ? null : studentAverage += (quiz3note * quiz3percentage /100)
            isNaN(quiz4note) || isNaN(quiz4percentage) ? null : studentAverage += (quiz4note * quiz4percentage /100)
            isNaN(quiz5note) || isNaN(quiz5percentage) ? null : studentAverage += (quiz5note * quiz5percentage /100)
            isNaN(quiz6note) || isNaN(quiz6percentage) ? null : studentAverage += (quiz6note * quiz6percentage /100)
            isNaN(finalnote) || isNaN(finalpercentage) ? null : studentAverage += (finalnote * finalpercentage /100)
            document.getElementById('youraveragenote').innerHTML=studentAverage.toFixed(2);

            // Calculate the class average
            classAverage = 0
            isNaN(midterm1class) || isNaN(midterm1percentage) ? null : classAverage += (midterm1class * midterm1percentage /100)
            isNaN(midterm2class) || isNaN(midterm2percentage) ? null : classAverage += (midterm2class * midterm2percentage /100)
            isNaN(homework1class) || isNaN(homework1percentage) ? null : classAverage += (homework1class * homework1percentage /100)
            isNaN(homework2class) || isNaN(homework2percentage) ? null : classAverage += (homework2class * homework2percentage /100)
            isNaN(homework3class) || isNaN(homework3percentage) ? null : classAverage += (homework3class * homework3percentage /100)
            isNaN(homework4class) || isNaN(homework4percentage) ? null : classAverage += (homework4class * homework4percentage /100)
            isNaN(homework5class) || isNaN(homework5percentage) ? null : classAverage += (homework5class * homework5percentage /100)
            isNaN(homework6class) || isNaN(homework6percentage) ? null : classAverage += (homework6class * homework6percentage /100)
            isNaN(quiz1class) || isNaN(quiz1percentage) ? null : classAverage += (quiz1class * quiz1percentage /100)
            isNaN(quiz2class) || isNaN(quiz2percentage) ? null : classAverage += (quiz2class * quiz2percentage /100)
            isNaN(quiz3class) || isNaN(quiz3percentage) ? null : classAverage += (quiz3class * quiz3percentage /100)
            isNaN(quiz4class) || isNaN(quiz4percentage) ? null : classAverage += (quiz4class * quiz4percentage /100)
            isNaN(quiz5class) || isNaN(quiz5percentage) ? null : classAverage += (quiz5class * quiz5percentage /100)
            isNaN(quiz6class) || isNaN(quiz6percentage) ? null : classAverage += (quiz6class * quiz6percentage /100)
            isNaN(finalclass) || isNaN(finalpercentage) ? null : classAverage += (finalclass * finalpercentage /100)
            document.getElementById('classaveragenote').innerHTML=classAverage.toFixed(2);
        }
    }
}