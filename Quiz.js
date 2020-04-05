//this code accepts answer from prompt box and questions are displayed in alert box.
//you can disable the alert because same stuff will be happening in console of your browser also.
 
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        //alert(``);
    
        var myarr = new Array;
        for (var i = 0; i < this.answers.length; i++) {
            console.log(this.answers[i]);
        //  var newp = document.createElement('LI');
           //   newp.innerHTML =`${this.answers[i]}`;

         // document.getElementById('ansq').appendChild(newp);
        myarr.push(this.answers[i]);
            
            
        }
         
        alert(`question- ${this.question} \n ${myarr[0]}  ${myarr[1]}  ${myarr[2]}   ${myarr[3]} \n click OK to enter the Right answer`);
        
        for(i = 0 ; i< 1 ; i++)
        {
            var newo = document.createElement('P');
            newo.innerHTML = this.question;   
            document.getElementById('add').appendChild(newo);
            for(i =0; i<4; i++)
            {
        
                var newp = document.createElement('LABEL');
                newp.innerHTML = myarr[i];

                document.getElementById('add').appendChild(newp);
                var brek = document.createElement('BR');
                document.getElementById('add').appendChild(brek);
            }
           
            }
           
        }        
       

        //document.getElementById('jkl').appendChild(newp);
    
   
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            
            console.log(`You selected ${this.correct} and its Correct answer!  `);
             var news = document.createElement('P');
          news.innerHTML = `You Selected the correct answer , option- ${this.correct}`;
             document.getElementById('add').appendChild(news); 
            sc = callback(true);
        } else {
            console.log(`Wrong answer. the correct answer is ${this.correct}`);
             var news = document.createElement('P');
            news.innerHTML = `You selected the wrong answer( ${ans} ),the correct answer is ${this.correct}`;
             document.getElementById('add').appendChild(news);
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
         var news = document.createElement('P');
          news.innerHTML = `Your current score ${score}`;
             document.getElementById('add').appendChild(news);
        console.log('------------------------------');
        
        var news = document.createElement('P');
          news.innerHTML = `----------------------------`;
             document.getElementById('add').appendChild(news);
    }
    
    
    var q1 = new Question('What is the capital of Bihar?',
                          ['1 : patna', '2 :Ranchi', '3 :patliputra', '4 :gaya'],
                          1);
    var q2 = new Question('what is the capital of Andhra Pradesh?',
                          ['1 :Dispur', '2 :Hyderabad', '3 :Agartala', '4 :keral'],
                          2);
    var q3 = new Question('what is the capital of Arunachal Pradesh?',
                          ['1 :Jaipur', '2 :Dispur', '3 :Himachal Pradesh', '4 :Itanagar'],
                          4);
    
     var q4 = new Question('what is the capital of Assam?',
                          ['1 :Manipal', '2 :Imphal', '3 :Dispur', '4 :Imphal'],
                          3);  
     var q5 = new Question('what is the capital of chattisgarh?',
                          ['1 :Jaipur', '2 :Raipur', '3 :Bhopal', '4 :Itanagar'],
                          2);
     var q6 = new Question('what is the capital of Goa?',
                          ['1 :Jaipur', '2 :Dispur', '3 :Panaji', '4 :Mumbai'],
                          3);
     var q7 = new Question('what is the capital of Gujrat?',
                          ['1 :Ahmedabad', '2 :Gandhinagar', '3 :Rajasthan', '4 :Itanagar'],
                          2);
     var q8 = new Question('what is the capital of Haryana?',
                          ['1 :Chandigarh', '2 :Dispur', '3 :Himachal Pradesh', '4 :punjab'],
                          1);
     var q9 = new Question('what is the capital of Himachal Pradesh?',
                          ['1 :Chandigarh', '2 :Dispur', '3 :Shimla', '4 :punjab'],
                          3);
     var q10 = new Question('what is the capital of Jharkhand?',
                          ['1 :Patna', '2 :Ranchi', '3 :Dhanbad', '4 :Jamshedpur'],
                          2);
     var q11 = new Question('what is the capital of Karnataka?',
                          ['1 :Mysuru', '2 :Hubli', '3 :Manglore', '4 :Bangaluru'],
                          4);
    
     var q12 = new Question('what is the capital of Keral?',
                          ['1 :Bhopal', '2 :Dispur', '3 :Odisha', '4 :Thiruvanathapuram'],
                          4);
     var q13 = new Question('what is the capital of Madhya Pradesh?',
                          ['1 :Bhopal', '2 :Pune', '3 :Raipur', '4 :Jaipur'],
                          1);
     var q14 = new Question('what is the capital of Maharastra?',
                          ['1 :Dongri', '2 :Pune', '3 :Mumbai', '4 :Kohima'],
                          3);
    
     var q15 = new Question('what is the capital of Manipur?',
                          ['1 :Mizoram', '2 :Shimla', '3 :Imphal', '4 :Jaipur'],
                          3);
     var q16 = new Question('what is the capital of Meghalaya?',
                          ['1 :Shilong', '2 :Imphal', '3 :Shimla', '4 :Aizawal'],
                          1);
     var q17 = new Question('what is the capital of Nagaland?',
                          ['1 :Dehradun', '2 :Kohima', '3 :Shimla', '4 :shilong'],
                          2);
     var q18 = new Question('what is the capital of Mizoram?',
                          ['1 :Shilong', '2 :Imphal', '3 :Shimla', '4 :Aizawal'],
                          4);
     var q19 = new Question('what is the capital of Odisha?',
                          ['1 :Keral', '2 :Bhubaneshwar', '3 :Chennai', '4 :Imphal'],
                          2);
     var q20 = new Question('what is the capital of Punjab?',
                          ['1 :Chandigarh', '2 :Haryana', '3 :Kashaul', '4 :Ludhiyana'],
                          1);
     var q21 = new Question('what is the capital of Rajasthan?',
                          ['1 :Raipur', '2 :Ahmedabad', '3 :Jaipur', '4 :gujrat'],
                          3);
     var q22 = new Question('what is the capital of Sikkim?',
                          ['1 :Imphal', '2 :Mizoram', '3 :Gangtok', '4 :Shilong'],
                          3);
     var q23 = new Question('what is the capital of Tamil Nadu?',
                          ['1 :Keral', '2 :Mysuru', '3 :Chennai', '4 :Telangana'],
                          3);
     var q24 = new Question('what is the capital of Telangana?',
                          ['1 :Agartala', '2 :Dispur', '3 :Andhra Pradesh', '4 :Hyderabad'],
                          4);
     var q25 = new Question('what is the capital of Tripura?',
                          ['1 :Hyderbad', '2 :Agartala', '3 :Dhanbad', '4 :Dehradun'],
                          2);
     var q26 = new Question('what is the capital of Utter Pradesh?',
                          ['1 :Agra', '2 :Gaziabad', '3 :Noida', '4 :Lucknow'],
                          4);
     var q27 = new Question('what is the capital of Uttrakhand?',
                          ['1 :Dehradun', '2 :Dispur', '3 :Tripura', '4 :Agartala'],
                          1);
     var q28 = new Question('what is the capital of West Bengal?',
                          ['1 :Durgapur', '2 :Haldia', '3 :Howrah', '4 :kolkata'],
                          4);
    
     var q29 = new Question('what is the capital of Andaman Nicobar?',
                          ['1 :Lakshyadveep', '2 :Port Blair', '3 :Diu', '4 :Daman'],
                          2);
     var q30 = new Question('what is the capital of Lakshadveep?',
                          ['1 :Andaman', '2 :Port Blair', '3 :kavaratti', '4 :Daman'],
                          3);
     var q31 = new Question('what is the capital of Daman & Diu?',
                          ['1 :Leh', '2 :Port Blair', '3 :Diu', '4 :Daman'],
                          4);
     var q32= new Question('what is the capital of Ladakh?',
                         ['1 :Leh', '2 :Jammu', '3 :Kashmir', '4 :Daman'],
                          1);
     var q33 = new Question('what is the capital of Chandigarh?',
                          ['1 :punjab', '2 :Gurgaon', '3 :haraya', '4 :Chandigarh'],
                          4);
     var q34 = new Question('what is the capital of Dadar & Nagar haveli?',
                       ['1 :Lakshyadveep', '2 :Port Blair', '3 :Silvasa', '4 :Daman'],
                          3);
     var q35 = new Question('what is the capital of Puducherry?',
                          ['1 :Keral', '2 :Pondicherry', '3 :Diu', '4 :Daman'],
                          2);
     var q36 = new Question('what is the capital of Delhi?',
                          ['1 :Delhi', '2 :Noida', '3 :Gurgaon', '4 :Gaziabad'],
                          1);
     var q37 = new Question('what is the capital of Jammu & khasmir?',
                          ['1 :Leh', '2 :Srinagar(summer) and JAmmu(winter)', '3 :Srinagar(Winter) and JAmmu(Summer)', '4 :Srinagr'],
                        2);
    
    
    
    
    
     
    
    var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    var n = 0; var anq = 0;
    function nextQuestion() {
        
        if( n < 29){
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        anq = parseInt(answer);
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            n = n + 1;
            nextQuestion();
        }

        
        }
            
    }
    
    nextQuestion();
    
})();
