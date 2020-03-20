const $ = require('jquery');


// const sayHello = () => {console.log('hello');};

// sayHello();

$('body').css('background','red').html(`<h1 class="test">Hello World!</h1>`);
// $('.test').click(()=>$('test').css("color","white"));
$('.test').click(function(){
    $(this).css("color","white");
});

import {helloThere} from './say-hello.js'
helloThere('Bryce');