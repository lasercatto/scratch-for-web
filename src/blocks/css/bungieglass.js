import Blockly from "blockly/core";

const blockName = "bungieui_css";

const blockData = {
    "message0": "Bungie  Glass Nav %1 Add Items %2  ",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set the positive margin of a div"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    <div style="background: rgba( 255, 255, 255, 0.25 );box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );backdrop-filter: blur( 0px );-webkit-backdrop-filter: blur( 0px );
    border-radius: 10px; ;position:relative ">
     <ul class="nav navbar justify-content-center">
     ${statements}
     </ul>
    </div>
    `;
    return code;
};