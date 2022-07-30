import Blockly from "blockly/core";

const blockName = "html_doctype";

const blockData = {
    "message0": "Make a webpage with language %1 %2 %3",
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
            "name": "STATEMENTS"
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
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const lang = Blockly.JavaScript.valueToCode(block, "LANG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `<!DOCTYPE HTML>
<html lang='${lang}'>
${statements}
</html>
`;
    return code;
};