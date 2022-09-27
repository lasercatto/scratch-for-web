import Blockly from "blockly/core";

const blockName = "css_class";

const blockData = {
    "message0": " Set Class Name To %1 Options %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": ["String", "Number"]
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Define a divider  class"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
  let css = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    .${css}{
        
${statements}
}

`;
    return code;
};