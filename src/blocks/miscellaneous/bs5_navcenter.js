import Blockly from "blockly/core";

const blockName = "bs5_navcenter";

const blockData = {
    "message0": "Centerd  Nav %1 %2",
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
    "tooltip": "Creates a Centered aligned nav "
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `
    <ul class="nav navbar justify-content-center">
    ${statements}
    </ul>
`;
    return code;
};