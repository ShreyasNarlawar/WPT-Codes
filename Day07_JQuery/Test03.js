
$('h1').click(function(){
    alert("Hey, how are you dear!!");
});

$('button:first').click(function(){
    alert('Hello dear, did you drink water?');
    $(this).css('background', 'yellow');
});

$('button:nth-of-type(2)').click(function(){
    alert('Hey bro, did you drink water?');
    $(this).css('background', 'orange');
});

$('button:last').click(function(){
    alert('Hey, please drink some water!');
    $(this).css('background', 'red');
});
