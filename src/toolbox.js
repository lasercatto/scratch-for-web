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

    <category name="Tags" colour="#247247">

      <block type="html_div">
      </block>

      <category name="Text" colour="#22ffaa">

        <block type="html_text">
        </block>
      
        <block type="html_paragraph">
        </block>

        <block type="html_bold">
        </block>

        <block type="html_italic">
        </block>

      </category>

    </category>

  </category>

</xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
      return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))
    
}