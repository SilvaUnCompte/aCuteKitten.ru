function randombg(){
  var random = Math.floor(Math.random() * 8);
  var background = [
				"pink url(image/bg/1.jpg) repeat fixed center",
				"pink url(image/bg/2.jpg) repeat fixed center",
				"pink url(image/bg/3.jpg) repeat fixed center",
				"pink url(image/bg/4.jpg) repeat fixed center",
				"pink url(image/bg/5.jpg) repeat fixed center",
				"pink url(image/bg/6.jpg) repeat fixed center",
				"pink url(image/bg/7.jpg) repeat fixed center",
				"pink url(image/bg/8.jpg) repeat fixed center"
				];
				 
  document.body.style.background = background[random];
  
  setTimeout(randombg, 20000); 
}