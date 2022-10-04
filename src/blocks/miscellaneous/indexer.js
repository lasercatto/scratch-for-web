

  import Blockly from "blockly/core";

const blockName = "bungiee_searchbarindex";

const blockData = {
    "message0": "Add  Search Bar Index  %1",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Inserts a script to index for text "
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const logo =  Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    script>
function search() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('search');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
</script>
      ${logo}
`;
    return code;
};