import Blockly from "blockly/core";

const blockName = "html_anchor";

const blockData = {
    "message0": "Name of Anchor %1 Set the anchor Url %2 Set Text Decoration to %3",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": ["String", "Number"]
        },
        {
            "type": "input_value",
            "name": "URL",
            "check": ["String", "Number"]
        },
        {
            "type": "input_value",
            "name": "textdecoration"
          },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Link a url to text."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const url = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const textdec = Blockly.JavaScript.valueToCode(block, "textdecoration", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `<a style="text-decoration:${textdec};" href="${url}">${statements}</a>`;
    return code;
};