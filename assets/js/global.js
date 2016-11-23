import "babel-polyfill";

import GLOBAL from "./modules/GLOBAL";
import HOME from "./modules/HOME";

let init = null;

switch (global.vars.page) {
  case 'home_page': init = HOME.init.bind(HOME); break;
  default:
    init = () => {
        console.log('default init');
    };
}

$(document).ready(()=>{
    GLOBAL.init();
    init();
});

$(window).on('resize', ()=> {

});

