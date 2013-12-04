/* 
 * @author manujith pallewatte[manujith.nc@gmail.com]
 * Javascript library component of AUDroid package. Using to redirect general
 * events to android javascript interface. Kinda like a global hook :D
 * !!REQUIRE JQUERY!!
 */

//unirversal info if anyone want to access
target = new Array();
type = "";
$(document).bind('blur focus focusin focusout load resize scroll unload click ' + 
                 'dblclick mousedown mouseup mousemove mouseover mouseout mouseenter ' + 
                 'mouseleave change select submit keydown keypress keyup error',function(e){
    target[0] = e.target.tagName;
    target[1] = e.target.className;
    target[2] = e.target.getAttribute('id');
    type = e.type;

    //passing down the lane
    AUDroid.fire(JSON.stringify(target),type);
});


