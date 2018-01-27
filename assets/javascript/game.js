FastClick.attach(document.body);
$('a').on('click', function(){
  $('.wrap, a').toggleClass('active');
  // $("a").hide();
  
  return false;
});

var wordsToFind = $('#list li').length,
    colors = ['red', 'green', 'yellow', 'blue', 'purple'],
    picture= ["http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg",
    "https://www.wegmans.com/content/dam/wegmans/products/768/56768.jpg",
    "http://homecookingadventure.com/images/recipes/Chocolate_Mirror_Cake_main.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg",
    "http://www.vegrecipesofindia.com/wp-content/uploads/2016/04/veg-grilled-sandwich-recipes21.jpg"],
    found = 0,
    clicking = false;

$('#restart').click(function() {
  $('.box').attr('class', 'box');
  $('#list li').removeClass('found');
  $('#restart').hide();
  found = 0;
});

$('#grid').mousedown(function(){
    clicking = true;
});



$('#grid').mouseup(function(){
  clicking = false;
  $('.box').removeClass('highlight');
})

$('.box').mouseover().mouseout(function() {
  if(clicking){
  // Toggle highlight to box on click
  $(this).toggleClass('highlight');
  var word = $(this).attr('data-word'), // Get word attribute from clicked box.
    wordLen = word.length, // How long is the word.
    $box = $('.box[data-word="' + word + '"]'); // Get all box's with word attribute.
  if ($('.box[data-word="' + word + '"].highlight').length == wordLen) {
    // Word is fully highlighted, remove highlight and add class fount-colorArray
    $box.removeClass('highlight').addClass('found-' + colors[found] );
    // Add found class to the list item that contains "word"
    $('li:contains("' + word + '")').addClass('found');
    $('.box').removeClass('highlight');
    found++;
  }
  console.log(found + ' - ' + wordsToFind);
  if (found == wordsToFind) {
    alert('Winner!');
    $('#restart').show();
  }
  }

});