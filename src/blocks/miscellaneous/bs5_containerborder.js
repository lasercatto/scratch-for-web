import Blockly from "blockly/core";

const blockName = "html_bordercontainer";

const blockData = {
    "message0": "Bordered Container%1 Set Container Background Border Color %2 Set Container Content%3",
    "colour": "#218ceb",
    "args0": [
          {
                "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "COLOR",
            "check": ["String", "color"]
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Border containers hold content in a fixed viewport while adding a background color to it"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
    const color = Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
<div class="container  p-5  border ${color} text-dark ">
${statements}
</div>
`;
    return code;
};