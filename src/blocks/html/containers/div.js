import Blockly from "blockly/core";

const blockName = "html_div";

const blockData = {
    "message0": "create a div and set%1 to%2 %3",
    "colour": "#218ceb",
    "args0": [
      {
            "type": "field_dropdown",
            "name": "CSS",
            "options": [
              [
                "Class",
                'class'
              ],
              [
                "ID",
                'id'
              ]
            ]
          },
          {
                "type": "input_value",
                "name": "TYPE",
                "check": ["String", "Number"]
          },
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
  let css = Blockly.JavaScript.valueToCode(block, "CSS", Blockly.JavaScript.ORDER_ATOMIC);
  let type = Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_ATOMIC);
  let cd = null
  if ((type||null)==null){
    cd = ``
  } else {
    css = String(type)
    if(css == 'id') {
      cd = ` id="${type}"`
    } else {
      cd = ` class="${type}"`
    }

  }
    const code = `
<div${cd}>
${statements}
</div>
`;
    return code;
};