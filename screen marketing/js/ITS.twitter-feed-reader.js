$(document).ready(function() {

// cache the feed
var feed = document.querySelector('.twitter');
checkForTwitterFeed();

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");



// Apply stylesheet to iframe
function applyTweetStyles (iframe) {
  var style = document.createElement('style');
  style.textContent =
    '.timeline-Tweet div  {'+

   
	'}'+

	'.timeline-Tweet {'+
    	'padding: 5px;'+
	'}'+

    '.timeline-Tweet div  {'+
		'display:none !important;'+
		'margin: 0px;'+
    	'padding: 0px;'+
	'}' +
	
	'.SandboxRoot.env-bp-820 .timeline-Tweet-text {' +
    '  line-height: 0px !important;' +
    '}' + 
    
    '.env-bp-970.SandboxRoot .timeline-Tweet-text {'+
    'line-height: 0px!important;'+
	'}'+

	'.timeline-Tweet p {'+
    'font-size: 1.5vw!important; '+
    'color: #000!important;'+
    'margin: 0px!important;'+
    'font-weight: bold!important;'+
    'font-family: Arial, Helvetica, sans-serif;'+
	'}'

  ;
  iframe.contentDocument.head.appendChild(style);
   
  // override the hight of the iframe and let the content control it
  iframe.style.height = '0'
  
  // show it
  feed.classList.add('fade-in');
}

// we need to wait a sec to make sure Twitter has done it's thing
function checkForTwitterFeed () {
  setTimeout(function(){
    var iframe = feed.querySelector('iframe');
    if (iframe) {
    	applyTweetStyles(iframe);
    } else {
    	checkForTwitterFeed()
    }
  }, 250);
}




}); 
