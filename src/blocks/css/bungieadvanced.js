import Blockly from "blockly/core";

const blockName = "bungie_advancedanim";

const blockData = {
    "message0": "Bungie Advanced  Animation %1 Set Object Class to  %2 Set Start opacity %3 Set the start margin %4 Set the Ending opacity %5 set the ending margin %6 How many pixels %7 Set the animation duration %8 Set a delay (optional) %9 scale out special effect optional()%10 Add a transition delay optional() %11",
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
        {
            "type": "input_value",
            "name": "opacitystart",
            "check": ["String", "opcaitystart"]
        },
        {
            "type": "input_value",
            "name": "startmargin",
            "check": ["String", "startmargin"]
        },
        {
            "type": "input_value",
            "name": "opacityend",
            "check": ["String", "opacityend"]
        },
        
        {
            "type": "input_value",
            "name": "finish",
            "check": ["String", "finish"]
        },
        {
            "type": "input_value",
            "name": "end",
            "check": ["String", "end"]
        },
        {
            "type": "input_value",
            "name": "time",
            "check": ["String", "time"]
        },
        {
            "type": "input_value",
            "name": "delay",
            "check": ["String", "delay"]
        },
        {
            "type": "input_value",
            "name": "scale",
            "check": ["String", "scale"]
        },
        {
            "type": "input_value",
            "name": "transition",
            "check": ["String", "transition"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Advanced animation maker"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const classname= Blockly.JavaScript.valueToCode(block, "class", Blockly.JavaScript.ORDER_ATOMIC);
    const opacitystart= Blockly.JavaScript.valueToCode(block, "opacitystart", Blockly.JavaScript.ORDER_ATOMIC);
    const opacityend= Blockly.JavaScript.valueToCode(block, "opacityend", Blockly.JavaScript.ORDER_ATOMIC);
    const finish= Blockly.JavaScript.valueToCode(block, "finish", Blockly.JavaScript.ORDER_ATOMIC);
    const startmargin= Blockly.JavaScript.valueToCode(block, "startmargin", Blockly.JavaScript.ORDER_ATOMIC);
    const time= Blockly.JavaScript.valueToCode(block, "time", Blockly.JavaScript.ORDER_ATOMIC);
    const delay= Blockly.JavaScript.valueToCode(block, "delay", Blockly.JavaScript.ORDER_ATOMIC);
    const end= Blockly.JavaScript.valueToCode(block, "end", Blockly.JavaScript.ORDER_ATOMIC);
    const scale = Blockly.JavaScript.valueToCode(block, "scale", Blockly.JavaScript.ORDER_ATOMIC);
    const transition = Blockly.JavaScript.valueToCode(block, "transition", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
.${classname}{ 
        opacity:0%; 
        margin-${startmargin}:-0;
        animation: ${classname} ${time}s; /* fading effect takes 3s */
        animation-delay: ${delay}s;
        transition-delay: ${transition};
        animation-fill-mode: forwards /* Stop the animation from regenerating */
     }
@keyframes ${classname} { /* from 0 to full opacity */
     from{opacity:${opacitystart};}
    to  {opacity:${opacityend};border-image: linear-gradient(transparent);margin-${finish}:${end}px; transform: scale(${scale})  } 
   }`;
    return code;
};