import Blockly from "blockly/core";

const blockName = "indexjs";

const blockData = {
    "message0": "Add Search Filter%1",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
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
    <script>
    function myFunction() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }
</script>
    ${statements}
`;
    return code;
};