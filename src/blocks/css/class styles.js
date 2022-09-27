import Blockly from "blockly/core";

const blockName = "parham_styles_class";

const blockData = {
  "message0": "CSS Class %1 Inject Custom Css %2",
  "args0": [
    {
      "type": "field_input",
      "name": "Class",
      "text": "Class"
    },
    {
      "type": "field_input",
      "name": "CSS Styles",
      "text": "CSS: Styles;"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "Give Your Class Some Style",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var text_class = block.getFieldValue('Class');
  var text_css_styles = block.getFieldValue('CSS Styles');
  // TODO: Assemble JavaScript into code variable.
  var code = `<style>
  ${text_class}{
    ${text_css_styles}
  }
</style>\n`;
  return code;
};