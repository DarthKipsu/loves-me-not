function automatically_generate_personalized_destiny() {
  var you = document.getElementById('your-name').value;
  var he = document.getElementById('who-you-fancy-most').value;
 
  var your_destiny = calculate_meaning_of_life(you);
  var his_fate = calculate_meaning_of_life(he);

  var do_you_feel_lucky = (your_destiny + his_fate) % 2;

  return do_you_feel_lucky;
}

function calculate_meaning_of_life(text) {
  var fourty_two = 0;
  for (var i in text) 
    fourty_two += text.charCodeAt(i);

  return fourty_two;
}
