import Blockly from "blockly/core";

const blockName = "rtific";

const blockData = {
    "message0": "%1",
    "colour": '%{BKY_TEXTS_HUE}',
    "args0": [
        {
            "type": "field_dropdown",
            "name": "rtific",
            "options": [
              [
                "None",
                'none'
              ],
              [
                "Underline",
                'underline'
              ],
              [
                "Overline",
                'overline'
              ],
              
            ],
        }
    ],
    "output": "rtific",
    "tooltip": "Choose a text decoration."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const rtific = block.getFieldValue("rtific");
const code =  [`${rtific}`, Blockly.JavaScript.ORDER_ATOMIC ];
return code;
};