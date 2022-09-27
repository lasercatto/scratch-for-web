import Blockly from "blockly/core";

const blockName = "css_font";

const blockData = {
    "message0": "Import Font Name %1 font import url %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_value",
            "name": "fontname",
            "check": ["String", "fontname"]
        },
        {
            "type": "input_value",
            "name": "url",
            "check": ["String", "url"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set a custom font for your website!"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const url = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
    const fontname = Blockly.JavaScript.valueToCode(block, "fontname", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${url}" rel="stylesheet">
font-family:${fontname};
    
    `;
    return code;
};