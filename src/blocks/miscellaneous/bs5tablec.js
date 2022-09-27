import Blockly from "blockly/core";

const blockName = "bs5_tablec";

const blockData = {
    "message0": "Bs5 table head %1 %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_statement",
            "name": "statements"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": " Set table header  to"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "statements");
  

    const code = `
    <tr>
     ${statements}
    </tr>`;
    return code;
};