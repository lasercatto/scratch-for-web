import Blockly from "blockly/core";

const blockName = "bs5_alerts";

const blockData = {
    "message0": "Create a Bootstrap 5  Alert%1 Set the Alert Id %2 Set The Alert Color %3 Add content to the alert %4",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy",

        },
      
        {
            "type": "input_value",
            "name": 'id',
        },
        {
            "type": "input_value",
            "name": 'color',
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
    const id = Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_ATOMIC);
    const color = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    <div class="alert ${color} alert-dismissible"  role="${id}}">
    ${statements}
    <button type="button" class="btn-close"  data-dismiss="${id}" aria-label="Close"></button>
  <script>$('.alert').alert()</script>
  </div>
  
<script type="text/javascript">

$(document).ready(function () {
 
window.setTimeout(function() {
    $(".alert").fadeTo(1000, 0).slideUp(1000, function(){
        $(this).remove(); 
    });
}, 5000);
 
});
</script>
    `;
    return code;
};