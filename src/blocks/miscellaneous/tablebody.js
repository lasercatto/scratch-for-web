import Blockly from "blockly/core";

const blockName = "bs5_tablebody";

const blockData = {
    "message0": "BS5 Table Body %1 %2 ",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "TEXT",
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add  content to  a table's  body"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "TEXT");
    const code = `
    <tr>
    ${statements}
    </tr>`;
    return code;
};