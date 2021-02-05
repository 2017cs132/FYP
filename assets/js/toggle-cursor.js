// a class for saving the toggle state for the cursor
class CursorToggler {
    constructor() {
        this.cursorValue = "default";
        this.firstTimeToggle = true;
    }

    cursorValue() {
        return this.cursorValue;
    }

    cursorValue(newCursorValue) {
        this.cursorValue = newCursorValue;
    }
}

//an instance of the toggle class
let toggler = new CursorToggler();
var cursorInnerCircle = document.getElementById("inner-cursor");
var cursorOuterCircle = document.getElementById("outer-cursor");

// setting onClick event listener for the toggle link
document.getElementById("toggle-cursor").addEventListener("click", function(){
    // if the cursor is default set the animated one
    // else (the cursor is animated) set the default one
    if(toggler.cursorValue == "default")
    {
        toggler.cursorValue="animated";

        cursorInnerCircle.style.visibility = "visible";
        cursorOuterCircle.style.visibility = "visible";
        document.body.style.cursor = "none";

        if(toggler.firstTimeToggle)
        {
            addScript('assets/js/animate-small-dot-cursor.js', 'animateSmallDotCursor'); //for animating the small dot cursor
            addScript('assets/js/set-cursor-on-canvas.js', 'setCursorOnCanvas'); //for setting the cursor on the canvas
            this.firstTimeToggle = false;
        }

    }
    else
    {
        cursorInnerCircle.style.visibility = "hidden";
        cursorOuterCircle.style.visibility = "hidden";
        document.body.style.cursor = "default";

        toggler.cursorValue = "default";
    }
});

function addScript( src, id ) {
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    s.setAttribute( 'id', id );
    document.body.appendChild( s );
    document.body.style.cursor = "none";
}
