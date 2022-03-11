const express = require('express')
const router = express.Router()

router.get('/:vs/moo', (req, res) => {
	switch (req.params.vs) {
		case "v":
			res.send("There really are no more Easter Eggs in this program.");
			break;
		case "vv":
			res.send("Didn't I already tell you that there are no Easter Eggs in this program?");
			break;
		case "vvv":
			res.send("Stop it!");
			break;
		case "vvvv":
			res.send("Okay, okay, if I give you another Easter Egg, will you go away?");
			break;
		case "vvvvv":
			let snake =  "<pre>All right, you win.<br><br>";
				snake += "                               /----\\<br>";
				snake += "                       -------/      \\<br>";
				snake += "                      /               \\<br>";
				snake += "                     /                |<br>";
				snake += "  -----------------/                  --------\\<br>";
				snake += "  ----------------------------------------------<br></pre>";
			res.send(snake);
			break;
		case "vvvvvv":
			res.send("What is it?  It's an elephant being eaten by a snake, of course.");
			break;
	}

})

router.get('/', (req, res) => {
	res.send("Noice job, you've found an easter egg! Give up now!");	
})

router.get('/:something', (req, res) => {
	res.send("Noice job, you've found an easter egg! Give up now!");	
})

module.exports = router
