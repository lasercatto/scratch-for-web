import Blockly from "blockly/core";

const blockName = "bungiee_modal";

const blockData = {
    "message0": "Bungiee Modal%1 Button Color%2 Text color%3 Add modal title %4 Add stuff to body%5 ",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_value",
            "name": "color",
            "check": [ "color"]
        },
        {
            "type": "input_value",
            "name": "textcolor",
            "check": [ "color"]
        },
        {
            "type": "input_value",
            "name": "title",
            "check": ["String", "text"]
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Import Html Modules To use within your website"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const buttoncolor = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC);
    const textcolor = Blockly.JavaScript.valueToCode(block, "textcolor", Blockly.JavaScript.ORDER_ATOMIC);
    const title= Blockly.JavaScript.valueToCode(block, "title", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `
    <div>
    <button style="border:none;background:transparent; background-color:${buttoncolor}; color:${textcolor}; border:2px; padding: 5px 10px; border-radius:10px" type="button"  data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
</div>

<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">${title}</h4>
        <button  type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        ${statements}
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>`;
    return code;
};