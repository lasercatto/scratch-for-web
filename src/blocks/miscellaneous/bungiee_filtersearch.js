

  import Blockly from "blockly/core";

  const blockName = "bungiee_search2";
  
  const blockData = {
      "message0": "Style Your search bar! %1",
      "colour": "#218ceb",
      "args0": [
          {
              "type": "input_dummy"
          },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": "Adds an image to any navigation bar "
  };
  
  Blockly.Blocks[blockName] = {
      init: function() {
          this.jsonInit(blockData);
      }
  };
  
  Blockly.JavaScript[blockName] = function(block) {
      const logo =  Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_ATOMIC);
      const code = `
      .dropbtn {
        background-color: #04AA6D;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
      }
      
      .dropbtn:hover, .dropbtn:focus {
        background-color: #3e8e41;
      }
      
      #myInput {
        box-sizing: border-box;
        background-image: url('searchicon.png');
        background-position: 14px 12px;
        background-repeat: no-repeat;
        font-size: 16px;
        padding: 14px 20px 12px 45px;
        border: none;
        border-bottom: 1px solid #ddd;
      }
      
      #myInput:focus {outline: 3px solid #ddd;}
      
      .dropdown:hover{
        position: relative;
        display: inline-block;
      }
      
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f6f6f6;
        min-width: 230px;
        overflow: auto;
        border: 1px solid #ddd;
        z-index: 1;
      }
      
      .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }
      
      .dropdown a:hover {background-color: #ddd;}
      
      .show {display: block;}
        ${logo}
  `;
      return code;
  };