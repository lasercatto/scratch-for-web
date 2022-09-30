import Blockly from "blockly/core";

const blockName = "tabanc";

const blockData = {
    "message0": "Toggleable anchors %1 Set Nav Url Name Example: Home() %2 Name of the Tab%3",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "url"
        },
        {
            "type": "input_value",
            "name": "name"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add content to tabs"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    const url5 = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#${url5}">${name}</a>
    </li>
`;
    return code;
};