

  import Blockly from "blockly/core";

const blockName = "bungiee_searchbar";

const blockData = {
    "message0": "Add  Search Bar To WebPage %1",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add a search bar to your website "
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const code = `
    <div>
    <input style=" border-radius:10px; height:35px; border:none " id="searchbar" class="searchbar" onkeyup="search()" type="text"
            name="search" placeholder="Search...">
    </div>
      ${block}
`;
    return code;
};