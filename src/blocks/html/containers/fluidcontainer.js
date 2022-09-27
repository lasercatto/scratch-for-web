import Blockly from "blockly/core";

const blockName = "html_fluidcontainer";

const blockData = {
    "message0": "Fluid Container%1%2",
    "colour": "#218ceb",
    "args0": [
          {
                "type": "input_dummy",
          },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Fluid containers help contain specific values, which spans the entire width of the viewport"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
<div class="container-fluid">
${statements}
</div>
`;
    return code;
};