import Blockly from "blockly/core";

const blockName = "bs5_table";

const blockData = {
    "message0": " Set table type to %1 %2 Then Add  table Header contents%3  %4 Then Add Body Content%5",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_value",
            "name": "TEXT",
        },
        {
            "type": "input_dummy",
        },
        {
            "type": "input_statement",
            "name": "statements"
        },
        {
            "type": "input_statement",
            "name": "statementsbody"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set specified table block with contents of the table"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements= Blockly.JavaScript.statementToCode(block, "statements");
    const statements2= Blockly.JavaScript.statementToCode(block, "statementsbody");
    const TEXT = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
  

    const code = `
    <table style="margin-top:20px; margin-left:20px;position:relative" class="table table-responsive table-sm ${TEXT}">
    <thead>
     ${statements}
    </thead>
    <tbody>
    ${statements2}
    </tbody>
     </table>`;
    return code;
};