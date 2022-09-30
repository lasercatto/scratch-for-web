import Blockly from "blockly/core";

const blockName = "html_image";

const blockData = {
    "message0": "Add a Image and set url or file name to%1 %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_value",
            "name": "image",
            "check": ["String", "Number"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add Images to your website."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const url = Blockly.JavaScript.valueToCode(block, "image", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `<img class="img-fluid rounded" src="${url}"></p>`;
    return code;
};