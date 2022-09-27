import Blockly from "blockly/core";

const blockName = "css_fontname";

const blockData = {
    "message0": "Set Font Family %1",
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
    "tooltip": "Set a custom font Name for Specific Classes!"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const url = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
font-family:${url};`;
    return code;
};