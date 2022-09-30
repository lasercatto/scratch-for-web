import Blockly from "blockly/core";

const blockName = "bungie_alerts";

const blockData = {
    "message0": "Create a Bungiee Glass Alert%1 Content %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy",

        },
        {
            "type": "input_statement",
            "name": "TEXT",
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add  content to  a glass alert"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "TEXT");
    const code = `
    <div class="alert alert-warning alert-dismissible fade show"  role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    ${statements}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    `;
    return code;
};