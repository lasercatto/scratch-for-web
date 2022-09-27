import Blockly from "blockly/core";

const blockName = "html_csscomment";

const blockData = {
    "message0": "CSS Comment %1",
    "colour": "#2986cc",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": ["String", "Number"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add CSS  comments to further define your code."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `/* ${statements} */`;
    return code;
};