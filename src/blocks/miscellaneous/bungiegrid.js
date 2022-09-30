import Blockly from "blockly/core";

const blockName = "bungiee_grid";

const blockData = {
    "message0": "Create A Box Grid Class %1 And set class to %2 set flex to position: eg- 1-2-3  %3 ",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "class1"
        },
        {
            "type": "input_value",
            "name": "flex"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "This allows your to create a grid "
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const flex = Blockly.JavaScript.valueToCode(block, "flex", Blockly.JavaScript.ORDER_ATOMIC);
    const class1 = Blockly.JavaScript.valueToCode(block, "class1", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    .${class1}{
       flex:${flex};
    }`;
    return code;
};