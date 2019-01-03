var createLines = function(words, maxWidth) {
    let lines = [];

    let p = 0;

    while(p < words.length) {
        let line = [];

        while(p < words.length) {
            let peek = words[p];
            let peeklen = [...line, peek].join(' ').length;

            if(peeklen <= maxWidth) {
                line.push(peek);

                p++;
            } else {
                break;
            }
        }

        lines.push(line);
    }

    return lines;
};

var justifyLines = function(lines, maxWidth) {
    const justified = [];

    const push = (line, space) => {
        let text = line.join(space);

        let extra = ' '.repeat(maxWidth-text.length);

        justified.push(text + extra);
    };

    for(let l = 0; l < lines.length -1; l++) {
        const line = lines[l];

        let spaces = (maxWidth - line.join('').length);

		// Extra spaces between words should be distributed as evenly as possible.
		// If the number of spaces on a line do not divide evenly between words,
		// the empty slots on the left will be assigned more spaces than the slots on the right.
        for(let i = 0; i < spaces; i++) {
            const index = i%((line.length-1) || 1);

            line[index] += ' ';
        }

        push(line, '');
    };

	// For the last line of text, it should be left justified
	// and no extra space is inserted between words.
    push(lines[lines.length-1],  ' ');

    return justified;
}

var fullJustify = function(words, maxWidth) {
    let lines = createLines(words, maxWidth);

    lines = justifyLines(lines, maxWidth);

    return lines;
};
