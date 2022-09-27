import Blockly from "blockly/core";

const blockName = "general_textdec";

const blockData = {
    "message0": "%1",
    "colour": '%{BKY_TEXTS_HUE}',
    "args0": [
        {
            "type": "field_dropdown",
            "name": "textdec",
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
              [
                "Underline Overline",
                'underline overline'
              ],
              
            ],
        }
    ],
    "output": "textdec",
    "tooltip": "Choose a text decoration."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const text = block.getFieldValue("textdec");
const code =  [`${text}`, Blockly.JavaScript.ORDER_ATOMIC ];
return code;
};