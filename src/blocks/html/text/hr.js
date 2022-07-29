import Blockly from "blockly/core";

const blockName = "html_hr";

const blockData = {
    "message0": "horizontal rule",
    "colour": "#218ceb",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add a horizontal rule into your website."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = `<hr>`;
    return code;
};