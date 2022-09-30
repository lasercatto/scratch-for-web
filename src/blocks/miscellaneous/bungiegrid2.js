import Blockly from "blockly/core";

const blockName = "bungiee_grid2";

const blockData = {
    "message0": "Create A Box Grid %1 %2 %3",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
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
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `
    <div style="display: flex;">
     ${statements}
   </div>`;
    return code;
};