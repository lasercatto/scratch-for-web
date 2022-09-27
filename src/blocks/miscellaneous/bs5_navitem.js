import Blockly from "blockly/core";

const blockName = "bs5_item";

const blockData = {
    "message0": " Nav Item Url %1 Name of Nav Item%2 Set Text Color %3",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_value",
            "name": "url",
            "check": ["String", "Number"]
        },
        {
            "type": "input_value",
            "name": "navtext",
            "check": ["String", "Number"]
        },
        {
            "type": "input_value",
            "name": "color",
        },
    
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set the navigation items for your custom nav"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const url5 = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
    const navtext = Blockly.JavaScript.valueToCode(block, "navtext", Blockly.JavaScript.ORDER_ATOMIC);
    const color = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    <li class="nav-item">
    <a style="color:${color}; text-decoration:none" class="nav-link" href="${url5}">${navtext}</a>
    </li>`;
    return code;
};