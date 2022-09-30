import Blockly from "blockly/core";

const blockName = "general_top";

const blockData = {
    "message0": "Set a Single margin  %1 %2  How many PX %3 ",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "margin",
            "check": ["String", "margin"]
        },
        {
            "type": "input_value",
            "name": "marginpx",
            "check": ["String", "marginpx"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set the negative margin of defined class or id"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const margin = Blockly.JavaScript.valueToCode(block, "margin", Blockly.JavaScript.ORDER_ATOMIC);
    const marginpx = Blockly.JavaScript.valueToCode(block, "marginpx", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${margin}: -${marginpx}px;`;
    return code;
};