import Blockly from "blockly/core";

const blockName = "alertcolor";

const blockData = {
    "message0": "%1",
    "colour": '%{BKY_TEXTS_HUE}',
    "args0": [
        {
            "type": "field_dropdown",
            "name": "color",
            "options": [
              [
                "Dark",
                'alert-dark'
              ],
              [
                "Yellow",
                'alert-warning'
              ],
              [
                "Green",
                'alert-success'
              ],
              [
                "Red",
                'alert-danger'
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