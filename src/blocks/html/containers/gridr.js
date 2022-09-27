import Blockly from "blockly/core";

const blockName = "html_gridr";

const blockData = {
    "message0": "Responsive Grid%1%2",
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
    "tooltip": "Responsive grids help organize website content for not only pc but also mobile devices"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
<div class="col-sm-3 p-3">
${statements}
</div>
`;
    return code;
};