import Blockly from "blockly/core";

const blockName = "html_fontsize";

const blockData = {
    "message0": "Set Font Size To %1 px ",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": ["String", "Number"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Link a url to text."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const textdec = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    font-size:${textdec}px;
    `;
    return code;
};