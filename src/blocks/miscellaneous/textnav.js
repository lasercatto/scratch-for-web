import Blockly from "blockly/core";

const blockName = "bs5_textnav";

const blockData = {
    "message0": "Text Navagation %1 Set Text Logo to  %2 Set Anchor Url %3 Set Text Color%4 Set Text Decoration %5",
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
      {
        "type": "input_value",
        "name": "url",
        "check": ["String", "Number"]
     },
     {
        "type": "input_value",
        "name": "color",
    },
    {
        "type": "input_value",
        "name": "textdec",
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
    const url = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
    const color = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC);
    const textdec = Blockly.JavaScript.valueToCode(block, "textdec", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
     <a style="color:${color}; text-decoration:${textdec}; margin-top:10px" class="navbar-brand" href="${url}">
        <h1>${logo}</h1>
      </a>
`;
    return code;
};