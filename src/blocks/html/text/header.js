import Blockly from "blockly/core";

const blockName = "html_header";

const blockData = {
    "message0": "Create a Header set size %1 class name %2 %3",
    "colour": "#218ceb",
    "args0": [
      {
            "type": "field_dropdown",
            "name": "CSS",
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
    "tooltip": "Puts text into a paragraph."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
    let css = block.getFieldValue("CSS");
    const code = `
<${css}>${statements}</${css}>
`;
    return code;
};