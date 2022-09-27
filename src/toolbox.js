export default (Blockly) => {
  return (`
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">       


 

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
    <category name="Tables" colour="#247247">

    <block type="html_table"></block>
    <block type="html_tablec"></block>
    <block type="html_tablet"></block>
    


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

  <sep class="bt" />

  <category name="CSS" colour="#003cff">
  <block type="html_csscomment"></block>
  <block type="css_class"></block>
  <block type="html_fontsize">
  </block>
  <block type="css_id"></block>
  <block type="html_cjs"></block>
  <block type="html_color"></block>
  <block type="general_color"></block>
  <block type="general_textinput"></block>
  <block type="html_backgroundcolor"></block>
  <block type="html_backimage"></block>
  <category name="Margin">
  <block type="general_margin">
  <value name="margin">

    <block type="general_margi">
    </block>

  </value>
  </block>
  <block type="general_margi"></block>
  <block type="general_negative"></block>
  <block type="general_height"></block>
  <block type="general_width"></block>
  </category>
  <category name="Font">
  <block type="css_fontimport"></block>
  <block type="css_fontname"></block>
  </category>
  <category name="Text">
  <block type="textdec"></block>
  </category>
   


  </category>
  <category name="Bootstrap 5" colour="#3d85c6">


  
  <category name="Bootstrap 5 Buttons" colour="#003cff">
  <block type="bs5_button">

  <value name="COLOR">

    <block type="color">
    </block>

  </value>
  <value name="textdecoration">

    <block type="rtific">
    </block>

  </value>
  <value name="fontcolor">

  <block type="btrtific">
  </block>

</value>

  </block>
  <block type="rtific"></block>
  </category>
  <category name="Bootstrap 5 Colors" colour="#003cff">
  <block type="containercolor"></block>
  </category>
  <category name="Bootstrap 5 Table" colour="#003cff">
  <block type="bs5_table">

  <value name="TEXT">

    <block type="tabletypes">
    </block>

  </value>
  </block>
  <block type="tabletypes"></block>
  <block type="bs5_tablec"></block>
  <block type="bs5_tableheader"></block>
  <block type="bs5_tablebody"></block>
  <block type="bs5_tablebodycontent"></block>
  </category>
  <category name="Bootstrap 5 Nav" colour="#003cff">
  <block type="bs5_navleft"></block>
  <block type="bs5_navright"></block>
  <block type="bs5_item"></block>
  <block type="bs5_navcenter"></block>
  <block type="bs5_navlogo"></block>
  <block type="bs5_textnav"></block>
  </category>
  <category name="Bootstrap 5 Containers" colour="#003cff">
  <block type="html_fluidcontainer"></block>
  <block type="html_rcontainer"></block>
  <block type="html_bordercontainer"></block>
  </category>
  <category name="Bootstrap 5 Responsive Grids" colour="#003cff">
  <block type="html_gridr"></block>
  </category>
  <category name="Bootstrap 5 Text Colors" colour="#3d85c6">
  <block type="html_gridr"></block>
  
  </category>
  </category>
  <category name="Bungie CSS By Malik" colour="#444444">
  <block type="bungie_button"></block>
  
  </category>


  <sep class="bt" />

  <category name="Javascript" colour="#f13232">

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
 <sep class="bt" />
 <category name="DiscordJs Theme Maker" colour="#8fce00">

 </category>
</xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
      return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))
    
}