import Blockly from "blockly/core";

const blockName = "animtaebungie_card";

const blockData = {
  "message0": "Bungie Basic Slide animation%1 ",
  "args0": [
    {
        "type": "input_dummy",
      },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "Create a bungie glass card",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const title = Blockly.JavaScript.valueToCode(block, "cardtitle", Blockly.JavaScript.ORDER_ATOMIC);
  const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
  const text = Blockly.JavaScript.valueToCode(block, "cardtitle", Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  <div style="background: rgba( 255, 255, 255, 0.25 );box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );backdrop-filter: blur( 0px );-webkit-backdrop-filter: blur( 0px );
  border-radius: 10px; border: 1px solid rgba( 255, 255, 255, 0.18 ); width:200px; " class="card">
  <div class="card-body">
    <h4 class="card-title"${title}</h4>
    <p class="card-text">${text}</p>
     ${statements}
  </div>
</div>

     `;
  return code;
};