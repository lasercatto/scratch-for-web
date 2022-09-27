import Blockly from "blockly/core";

const blockName = "bungie_button";

const blockData = {
    "message0": "Bungie CSS Button %1 Set Button Text To %2 Button Url %3 Set Button Color %4 Set Font Color%5",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_value",
            "name": "text",
            "check": ["String", "text"]
        },
        {
            "type": "input_value",
            "name": "url",
            "check": ["String", "text"]
        },
        {
            "type": "input_value",
            "name": "color",
        },
        {
            "type": "input_value",
            "name": "textcolor",
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Bungie CSS Button Made By Malik"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const color = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC);
    const textcolor = Blockly.JavaScript.valueToCode(block, "textcolor", Blockly.JavaScript.ORDER_ATOMIC);
    const url = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
    const text = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
   <a style="border:2px; border-radius:10px; width:200px;font-size:20px;text-decoration:none; padding:10px 20px; background-color:${color}; color:${textcolor};" href="${url}">${text}</a>
    `;
    return code;
};