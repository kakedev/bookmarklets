(function ()  {
  let jQuery = document.createElement('script');
  jQuery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
  document.head.appendChild(jQuery);
  execute();
})();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function execute() {
  $('img').each(function(i) {
    let rnd = getRandomInt(0, 4);
    let link = '';
    switch (rnd) {
      case 0:
        link = 'http://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development-300x200.jpg';
      break;

      case 1:
        link = 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/The-stages-of-puppy-growth.jpg?itok=9ptPJwY8';
      break;

      case 2:
        link = 'http://dirtypawzpetgrooming.com/wp-content/uploads/2012/01/kitten-little.jpg';
      break;

      case 3:
        link = 'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/';
      break;
    }
    $(this).attr('src', link);
  });
}
