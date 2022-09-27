import Blockly from "blockly/core";

const blockName = "btrtific";

const blockData = {
    "message0": "%1",
    "colour": '%{BKY_TEXTS_HUE}',
    "args0": [
        {
            "type": "field_dropdown",
            "name": "btrtific",
            "options": [
              [
                "Red",
                'red'
              ],
              [
                "White",
                'white'
              ],
              [
                "Black",
                'black'
              ],
              
            ],
        }
    ],
    "output": "btrtific",
    "tooltip": "Choose a text decoration."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const btrtific = block.getFieldValue("btrtific");
const code =  [`${btrtific}`, Blockly.JavaScript.ORDER_ATOMIC ];
return code;
};