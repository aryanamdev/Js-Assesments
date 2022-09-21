// selecting parent to remove item
let parent = document.querySelector("#SIvCob");

// selecting languages to loop over
let languages = document.querySelectorAll("#SIvCob a");

// looping through and removing every second value
for (let i in languages) {
	if (i % 2 === 0) {
		parent.removeChild(languages[i]);
	};
};

