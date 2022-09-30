import Blockly from "blockly/core";

const blockName = "html_border";

const blockData = {
    "message0": "Set CSS Border T0 %1 %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "color",
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set text color"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const color = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    ${color};
    `;
    return code;
};