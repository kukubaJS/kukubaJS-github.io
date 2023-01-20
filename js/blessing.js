/*
 *     SETTINGS 
 */
/*Set String */
var str = '兔兔姐姐，小玥玥，新年快乐！愿你们天天顺、时时顺、分分顺、秒秒顺、月月顺、年年顺、爱情顺、事业顺、身体顺、生活顺、总之一切都能顺！';
/* Set Array */
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
/* 
 * Set object to iterate through
 * In this case choose arr or str
 */
var obj = str;
/* 
 * Set direction
 *  - 'h'= horizontal, 'v' = vertical
 */
var direction = 'h';
/*
 * Set delay for outputing characters
 *   - 0 is ignored and will use default
 */
var delay = 0;
/*
 * END SETTINGS *
 */

/* Initializer */
function init() {
  /* 
   *      VARS
   */
  /* 
   * Type of element to create 
   *   - String representation
   */
  var el = 'p';
  /* 
   * Set Timeout Interval
   *   - If delay is number and > 0 use it
   *   - Defaults: 1s for vert; 150ms for horz
   */
  const blessings = document.querySelector('.blessings')

  var dly = (typeof delay === 'number' && delay > 0) ? delay : ((direction === 'v') ?  2000 : 300);
  /* If obj is a string then convert to character array */
  var newObj = [];
  /* Create element */
  var elmt = document.createElement(el);
  /***   END VARS   ***/
  /*
   *     FUNCTIONS
   */
  /* Split string into character array */
  function splitStr(s){ 
    s.split('');
    return s;
  }
  /* Write text inside element */
  function writeIt(ele, object, index, dir) {
    /* If vertical then add a <br /> */
    ele.innerHTML += object[index];
    if (dir === 'v') {
      ele.innerHTML += '<br />';
    }else{ return; }
  }
  /***   END FUNCTIONS   ***/
  /* Convert obj to character array if string */
  newObj = (Array.isArray(obj)) ? obj : splitStr(obj);
  /* Attach class to element */
  elmt.className += 'chardelay';
  /* Attach element to document */
  blessings.appendChild(elmt);
  /* Loop through Array */
  for (var i = 0; i < newObj.length; i++) {
  /* Anonymous IIFE passing vars elmt, newObj, i, direction */
    (function(e, o, x, d){
      /* Invoke delay */
      setTimeout(function(){
        /* Call write function */
        writeIt(e, o, x, d);
      },x * dly); /* multiply to keep consistant interval on each loop*/
    })(elmt, newObj, i,  direction);
  }
}
/* Start */

