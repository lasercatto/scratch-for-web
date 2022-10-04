

  import Blockly from "blockly/core";

const blockName = "bungiee_search";

const blockData = {
    "message0": "Add animation to your search bar! %1",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
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
    input[type=text] {
        width: 120px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        background-color: auto;
        background-position: 10px 10px; 
        background-repeat: no-repeat;
        padding: 12px 20px 12px 20px;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
      }
      
      input[type=text]:focus {
        width: 100%;
      }
      ${logo}
`;
    return code;
};