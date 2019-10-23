// grabs all elements on page
var elements = document.getElementsByTagName('*');

// sets up loop that checks each element
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    // sets up the loop that checks each child of each  element
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        // Node.TEXT_NODE === 3 
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            // regex to do the replacing
            var replacedText = text.replace(/\men\b/gi, '[women]');
            // checks if the changed text DOES NOT equal orig - if so, performs the replacement
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}