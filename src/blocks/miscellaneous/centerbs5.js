import Blockly from "blockly/core";

const blockName = "bs5_centerbs5";

const blockData = {
    "message0": "Center Bootstrap Objects %1 %2",
    "colour": "#218ceb",
    "args0": [
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
    "tooltip": "Creates a Fixed nav "
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `
    <div class="nav navbar mx-auto align-items-center justify-content-center">
    ${statements}
    </div>
`;
    return code;
};