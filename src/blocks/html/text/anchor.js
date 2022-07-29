import Blockly from "blockly/core";

const blockName = "html_anchor";

const blockData = {
    "message0": "link text %1 to url %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": ["String", "Number"]
        },
        {
            "type": "input_value",
            "name": "URL",
            "check": ["String", "Number"]
        }
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
    const statements = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const url = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `<a href="${url}">${statements}</a>`;
    return code;
};