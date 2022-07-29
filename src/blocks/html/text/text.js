import Blockly from "blockly/core";

const blockName = "html_text";

const blockData = {
    "message0": "text %1",
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
    "tooltip": "Add text into your website."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${statements}`;
    return code;
};