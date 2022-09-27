import Blockly from "blockly/core";

const blockName = "bs5_tableheader";

const blockData = {
    "message0": "Add Content To Table Header %1 Content %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy",

        },
        {
            "type": "input_statement",
            "name": "TEXT",
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add  content to  a table header"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "TEXT");
    const code = `<th>${statements}</th>`;
    return code;
};