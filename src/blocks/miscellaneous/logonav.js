import Blockly from "blockly/core";

const blockName = "bs5_navlogo";

const blockData = {
    "message0": "Logo nav %1 Set logo img to  %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "TYPE",
            "check": ["String", "Number"]
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Adds an image to any navigation bar "
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const logo =  Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
     <a class="navbar-brand" href="#">
        <img src="${logo}" alt="Logo" style="width:40px;" class="rounded-pill">
      </a>
`;
    return code;
};