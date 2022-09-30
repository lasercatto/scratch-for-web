import Blockly from "blockly/core";

const blockName = "general_color";

const blockData = {
    "message0": "%1",
    "colour": '%{BKY_TEXTS_HUE}',
    "args0": [
        {
            "type": "field_dropdown",
            "name": "color",
            "options": [
              [
                "Red",
                'red'
              ],
              [
                "Green",
                'green'
              ],
              [
                "Yellow",
                'yellow'
              ],
              [
                "Orange",
                'orange'
              ],
              [
                "Blue",
                'blue'
              ],
              [
                "White",
                'white'
              ],
              [
                "Black",
                '#444444'
              ],
              
            ],
        }
    ],
    "output": "color",
    "tooltip": "Choose a color."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const color = block.getFieldValue("color");
const code =  [`${color}`, Blockly.JavaScript.ORDER_ATOMIC ];
return code;
};