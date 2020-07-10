function createParagraph () {
    console.log('create Paragraph has been called');
    var wordOne = document.getElementById('animals').value;
    var wordTwo = document.getElementById('feeling').value;
    var wordThree = document.getElementById('things').value;
    var wordFour = document.getElementById('Professional').value;
    var wordFive = document.getElementById('clothing').value;
    var wordSix = document.getElementById('thingsPlural').value; 
    var wordSeven = document.getElementById('person').value;
    var wordeight = document.getElementById('place').value;
    var wordnine = document.getElementById('verb').value;
    var wordten = document.getElementById('food').value;
    
    
    console.log(    wordOne   ,     wordTwo    );

    var paragraph = '<p> Say ' + wordten + ' the photographer said as the camera flashed! ' + wordSeven + ' and I had gone to ' + wordeight + ' to get our photos taken today. The first photo we really wanted was a picture of us dressed as ' + wordOne +  ' pretending to be a '  + wordFour +'. When we saw the proofs of it, I was a bit ' + wordTwo +  ' because it looked different than in my head. (I hadn\'t imagined so many '  + wordSix +  ' behind us.) However, the second photo was exactly what I wanted. We both looked like ' + wordThree + ' wearing ' + wordFive +  ' and ' + wordnine + ' --exactly what I had in mind!.</p>';
   
    console.log(paragraph);

    document.getElementById('answer').innerHTML = paragraph;
}