import Blockly from "blockly/core";

const blockName = "tabcontent";

const blockData = {
    "message0": "Tab Content %1 Set Tab Id %2 Add content to tab %3",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "id"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add content to tabs"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const id = Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    <div class="tab-content">
    <div id="${id}" class="container tab-pane active"><br>
    ${statements}
    </div>
    </div>
`;
    return code;
};