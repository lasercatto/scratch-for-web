export default (Blockly) => {
  return (`
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">       

  <category name="General" colour="#218ceb">

      <block type="general_lang"/>

      <block type="general_textinput"/>
          
  </category>

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

  <category name="Styles" colour="#003cff">
  <block type="parham_styles_class"/>
  </category>
</xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
      return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))
    
}