export default (Blockly) => {
  return (`
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">       


  <sep class="bt" />

  <category name="HTML" colour="#00aa5f">
    
    <category name="Base" colour="#469469">

      <block type="html_doctype">

        <value name="LANG">

          <block type="general_lang">
          </block>

        </value>

      </block>

      <block type="html_head">
      </block>
      <block type="html_websitetext">
      </block>

      <block type="html_body">
      </block>

      <block type="html_footer">
      </block>

    </category>

    <category name="Containers" colour="#247247">

      <block type="html_div">
      </block>

    </category>

    <category name="Text" colour="#22ffaa">

        <block type="html_text">
        </block>
      
        <block type="html_paragraph">
        </block>

        <block type="html_header">
        </block>

        <block type="html_anchor">
        </block>

        <block type="html_hr">
        </block>

        <block type="html_br">
        </block>

        <block type="html_comment">
        </block>

        <category name="Formatting" colour="398DDB">

          <block type="html_bold">
          </block>

          <block type="html_italic">
          </block>

          <block type="html_small">
          </block>

          <block type="html_strikethrough">
          </block>

          <block type="html_underline">
          </block>
          
        </category>

      </category>

  </category>

  <category name="CSS" colour="#003cff">
  <block type="css_class"></block>
  <block type="css_id"></block>
  <block type="html_cjs"></block>
  <block type="html_color"></block>
  <block type="general_color"></block>
  <block type="general_textinput"></block>
  <block type="html_backgroundcolor"></block>
  <block type="html_backimage"></block>
  <category name="Margin">
  <block type="general_margin"></block>
  <block type="general_margi"></block>
  <block type="general_negative"></block>
  <block type="general_height"></block>
  <block type="general_width"></block>
  </category>
  <category name="Font">
  <block type="css_font"></block>
  </category>
  <category name="Text">
  <block type="textdec"></block>
  </category>
   


  </category>
  <category name="Bootstrap 5" colour="#003cff">
  <block type="bs5_button">

  <value name="COLOR">

    <block type="color">
    </block>

  </value>
  <value name="textdecoration">

    <block type="rtific">
    </block>

  </value>

  </block>

  <block type="rtific"></block>
  </category>


  <category name="Javascript" colour="#003cff">

  <block type="javascript"></block>
   <category name="Logic">
   <block type="controls_if"></block>
  <block type="logic_compare">
  <field name="OP">EQ</field>
</block>
<block type="logic_operation">
  <field name="OP">AND</field>
</block>
<block type="logic_negate"></block>
<block type="logic_boolean">
  <field name="BOOL">TRUE</field>
</block>
<block type="logic_null"></block>
  </category>
  </category>

</xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
      return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))
    
}