import Blockly from "blockly/core";

const blockName = "html_websitetext";

const blockData = {
    "message0": "Set Website Title To %1",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": ["String", "Number"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set the title of your website."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `<title>${statements}</title>`;
    return code;
};