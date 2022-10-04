import Blockly from "blockly/core";

const blockName = "indexsearch";

const blockData = {
    "message0": " Add searchable items%1 %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add a search bar to your website!"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `
    <div class="dropdown">
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
    <div id="myDropdown" class="dropdown-content">
    <ul id="myUL">
    <li>
    ${statements}
    </li>
    </ul>
    </div>
    </div>
`;
    return code;
};