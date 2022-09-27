import Blockly from "blockly/core";

const blockName = "css_fontimport";

const blockData = {
    "message0": "Import Font url %1",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_value",
            "name": "url",
            "check": ["String", "fontname"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "import fonts to use on your website!"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const url = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${url}" rel="stylesheet">`;
    return code;
};