import Blockly from "blockly/core";

const blockName = "html_import";

const blockData = {
    "message0": "Import Html Module%1 ",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_value",
            "name": "import",
            "check": ["String", "TEXT"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Import Html Modules To use within your website"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "import", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
        <link rel="import" href="${name}">`;
    return code;
};