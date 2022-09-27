import Blockly from "blockly/core";

const blockName = "bs5_button";

const blockData = {
    "message0": "Bs5 Basic Button  %1 Set Button Name %2  Set Button Color %3 Button Url %4  Button Text Decoration%5",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_value",
            "name": "TEXT",
            "check": ["String", "Number"]
        },
        {
            "type": "input_value",
            "name": "COLOR",
            "check": ["String", "color"]
        },
        {
            "type": "input_value",
            "name": "URL",
            "check": ["String", "Number"]
        },
        {
            "type": "input_value",
            "name": "textdecoration"
          }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Basic Bootstrap 5 Button"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
    const color = Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC);
    const textdecoration = Blockly.JavaScript.valueToCode(block, "textdecoration", Blockly.JavaScript.ORDER_ATOMIC);

    const code = `<!--This is a bootstrap generated button!---><button  type="button" class="${color}"><a style="text-decoration:${textdecoration};" href="${url}">${statements}</button>`;
    return code;
};