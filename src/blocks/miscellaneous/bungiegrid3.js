import Blockly from "blockly/core";

const blockName = "bungiee_grid3";

const blockData = {
    "message0": "Box grid class%1  %2 %3 ",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "class"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add your bottom grid content"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const class1 = Blockly.JavaScript.valueToCode(block, "class", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    <div class="${class1}">
     ${statements}
   </div>`;
    return code;
};