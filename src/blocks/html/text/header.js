import Blockly from "blockly/core";

const blockName = "html_header";

const blockData = {
    "message0": "create a heder then set size to  %3 set class/id %1 to %2 %4",
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
            "type": "field_dropdown",
            "name": "SIZE",
            "options": [
              [
                "1",
                'h1'
              ],
              [
                "2",
                'h2'
              ],
              [
                "3",
                'h3'
              ],
              [
                "4",
                'h4'
              ],
              [
                "5",
                'h5'
              ],
              [
                "6",
                'h6'
              ],
              
            ]
          },{
            "type": "input_statement",
            "name": "STATEMENTS"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Puts text into a header."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
    let css = Blockly.JavaScript.getFieldValue("CSS");
    let size = Blockly.JavaScript.getFieldValue("SIZE");
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
<${size}${cd}>${statements}</${size}>
`;
    return code;
};