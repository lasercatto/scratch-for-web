import Blockly from "blockly/core";

const blockName = "general_margi";

const blockData = {
    "message0": "%1",
    "colour": '%{BKY_TEXTS_HUE}',
    "args0": [
        {
            "type": "field_dropdown",
            "name": "margin",
            "options": [
              [
                "Left",
                'left'
              ],
              [
                "Right",
                'right'
              ],
              [
                "Top",
                'top'
              ],
              [
                "Bottom",
                'bottom'
              ],
              
            ],
        }
    ],
    "output": "margin",
    "tooltip": "Choose a Margin."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const margin = block.getFieldValue("margin");
const code =  [`${margin}`, Blockly.JavaScript.ORDER_ATOMIC ];
return code;
};