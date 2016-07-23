var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
	var matrix = new five.Led.Matrix({
		pins: {
			data: 5,
			clock: 7,
			cs: 6
		},
		devices: 1
	});

	// stdin stuff copied from
	// http://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin
	var stdin = process.stdin;
	stdin.setRawMode( true );
	stdin.resume();
	stdin.setEncoding( 'utf8' );
	stdin.on( 'data', function( key ){
		// ctrl-c
		if ( key === '\u0003' ) {
		process.exit();
		}

		matrix.draw(key);
	});

});

