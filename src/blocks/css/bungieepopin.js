import Blockly from "blockly/core";

const blockName = "bungie_animation1";

const blockData = {
    "message0": "Bungie Pop in animation %1 Set the Class to to %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "class",
            "check": ["String", "class"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add a popin animation to any item"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const classname= Blockly.JavaScript.valueToCode(block, "class", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
.${classname}{ 
        opacity:0%; 
        left:-0;
        animation: popin 2s; /* fading effect takes 3s */
        animation-delay: 1s;
        animation-fill-mode: forwards /* Stop the animation from regenerating */
     }
@keyframes popin { /* from 0 to full opacity */
     from{opacity:0;right:10px}
    to  {opacity:1;border-image: linear-gradient(transparent);left:5px;  } 
   }`;
    return code;
};