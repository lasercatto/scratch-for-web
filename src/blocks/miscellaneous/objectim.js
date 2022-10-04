import Blockly from "blockly/core";

const blockName = "html_object";

const blockData = {
    "message0": "Insert module with name%1 ",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_value",
            "name": "text",
            "check": ["String", "TEXT"]

        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Top Grid content "
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const text =  Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    <object type="text/html" data="${text}"></object>`;
    return code;
};