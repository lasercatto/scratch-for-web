<template>
    <b-modal id="code-modal" :title="$t('code_modal.title')" ok-only>
        <textarea disabled :value="content" id="code">
        </textarea>
  </b-modal>
</template>

<script>
//import Blockly from "blockly";
//import beautify from "js-beautify";
  
export default {
    name: "editmenu",
    computed: {
        content: function(){
            // couldnt get it to work so i just made it return specific text only
            return "This feature still doesn't work yet. Hopefully it'll be fixed soon!"
        }
    }
}
</script>

<style>


#code {
    min-width: 100%;
    min-height: 100%;
}
#code-modal {
    color: white;
}
#code-modal .modal-dialog {
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    position: fixed;
    z-index: 100000;
}
.modal-content {
		background-color: #343434;
}

</style>
