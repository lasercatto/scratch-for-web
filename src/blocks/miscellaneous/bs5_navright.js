import Blockly from "blockly/core";

const blockName = "bs5_navright";

const blockData = {
    "message0": "Right Aligned Nav %1 %2",
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
    "tooltip": "Creates a Right aligned nav "
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `
    <ul class="nav justify-content-end">
    ${statements}
    </ul>
`;
    return code;
};