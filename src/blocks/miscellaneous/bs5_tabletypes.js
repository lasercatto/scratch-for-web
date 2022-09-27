import Blockly from "blockly/core";

const blockName = "tabletypes";

const blockData = {
    "message0": "%1",
    "colour": '%{BKY_TEXTS_HUE}',
    "args0": [
        {
            "type": "field_dropdown",
            "name": "types",
            "options": [
              [
                "Default",
                'table'
              ],
              [
                "Striped ",
                'table-striped'
              ],
              [
                "Bordered",
                'table-bordered'
              ],
              [
                "Hover",
                'table-hover'
              ],
              
            ],
        }
    ],
    "output": "types",
    "tooltip": "Choose a Table type For your button"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const color = block.getFieldValue("types");
const code =  [`${color}`, Blockly.JavaScript.ORDER_ATOMIC ];
return code;
};