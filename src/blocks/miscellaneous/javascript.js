import Blockly from "blockly/core";

const blockName = "javascript";

const blockData = {
    "message0": "Java Script %1 ",
    "colour": "#218ceb",
    "args0": [

        {
            "type": "input_statement",
            "name": "STATEMENTS"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "The block to create divisions"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
<script>
${statements}
</script>
`;
    return code;
};