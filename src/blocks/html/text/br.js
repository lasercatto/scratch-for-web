import Blockly from "blockly/core";

const blockName = "html_br";

const blockData = {
    "message0": "new line",
    "colour": "#218ceb",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Adds a new line."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = `<br>`;
    return code;
};