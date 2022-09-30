import Blockly from "blockly/core";

const blockName = "bungie_card";

const blockData = {
  "message0": "Bungie Basic glass Card%1 Add card title %2 Add card items %3",
  "args0": [
    {
        "type": "input_dummy",
      },
    {
      "type": "input_value",
      "name": "cardtitle",
    },
    {
        "type": "input_statement",
        "name": "STATEMENTS"
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
  border-radius: 10px; border: 1px solid rgba( 255, 255, 255, 0.18 ); width:200px; position:relative " class="card ">
  <div class="card-body">
    <h4 class="card-title"${title}</h4>
    <p class="card-text">${text}</p>
     ${statements}
  </div>
</div>

     `;
  return code;
};