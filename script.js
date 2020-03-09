var copy = document.querySelectorAll('th a');
var code = document.querySelectorAll('th code');
var hidden = document.getElementById('hidden')

copy.forEach( ( e , i ) => {
    copy[i].addEventListener( 'mouseenter' , function(){
        $( `#tip${i}[data-toggle="tooltip"]` ).tooltip( 'show' );
    });
    copy[i].addEventListener( 'click' , function() {
        copyCommand( code[i] );
        $('.toast').toast('show');
    });
});

function copyCommand( code ) {
    const text = code.firstChild.textContent
    const input = document.createElement('input');
    input.value = text;
    hidden.appendChild( input ).select();
    document.execCommand( 'copy' );
    hidden.removeChild( input )
}