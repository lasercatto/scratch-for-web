import Blockly from "blockly/core";

const blockName = "containercolor";

const blockData = {
    "message0": "%1",
    "colour": '%{BKY_TEXTS_HUE}',
    "args0": [
        {
            "type": "field_dropdown",
            "name": "color",
            "options": [
              [
                "Blue",
                'bg-primary'
              ],
              [
                "Green",
                'bg-success'
              ],
              [
                "Teal",
                'bg-info'
              ],
              [
                "Yellow",
                'bg-warning'
              ],
              [
                "Red",
                'bg-danger'
              ],
              [
                "Grey",
                'bg-secondary'
              ],
              [
                "Black",
                'bg-dark'
              ],
              
            ],
        }
    ],
    "output": "color",
    "tooltip": "Choose a Color for your button."
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