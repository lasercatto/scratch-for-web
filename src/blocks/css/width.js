import Blockly from "blockly/core";

const blockName = "general_width";

const blockData = {
    "message0": "Set div or object width to %1 %2 px",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "marginpx",
            "check": ["String", "marginpx"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set the positive margin of a div"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const marginpx = Blockly.JavaScript.valueToCode(block, "marginpx", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `width:${marginpx}px;`;
    return code;
};