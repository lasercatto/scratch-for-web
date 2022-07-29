import Blockly from "blockly/core";

const blockName = "parham_css_class_styles";

const blockData = {
  "message0": "Class %1 CSS Styles %2",
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
  "tooltip": "Do CSS Styles To Your Tag, Only Use This Block In First Of Tags",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['parham_css_class_styles'] = function(block) {
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