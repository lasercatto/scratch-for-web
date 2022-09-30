import Blockly from "blockly/core";

const blockName = "html_doctype";

const blockData = {
    "message0": "Make a webpage  Then Set Language To %1  %2 Then set Header Content %3 Body Content%4",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_value",
            "name": "LANG",
            "check": ["String", "Language"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "head"
        },
        {
            "type": "input_statement",
            "name": "body"
        }
    ],
    "tooltip": "The first block you will need to create the webpage."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const head = Blockly.JavaScript.statementToCode(block, "head");
    const body = Blockly.JavaScript.statementToCode(block, "body");
    const lang = Blockly.JavaScript.valueToCode(block, "LANG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `<!DOCTYPE HTML>
<html lang='${lang}'>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<head>
${head}
</head
<body style="background-size:cover">
<div class="container">
${body}
</div>
</body>
</html>
`;
    return code;
};