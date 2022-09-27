<template>
    <b-nav-item-dropdown id="v-step-0" text="Examples" right>
        <b-dropdown-item @click="load('ping-pong')">demo example</b-dropdown-item> <!--to add a new example first add a new dropdown item then put its on click script to load('') the text inside load is which example to load. using below as the example you would put internalName in the load-->
    </b-nav-item-dropdown>
</template>

<script>
import Blockly from "blockly";
import PingPongExample from "../../examples/site example";
const examples = {
    "ping-pong": PingPongExample, // this is where the examples go. to add a new one you need to first import the example from ../../examples then put that imported value into here like this
    //"internalName": importedExample
};
export default {
    name: "editmenu",
    computed: {
    },
    methods: {
        load(example){
            this.$swal({
                title: this.$t('examples.confirm.title'),
                text: this.$t('examples.confirm.text'),
                buttons: {
                    cancel: this.$t('examples.confirm.cancel'),
                    no: {
                        text: this.$t('examples.confirm.no'),
                        value: false,
                        className: "red-button"
                    },
                    yes: {
                        text: this.$t('examples.confirm.yes'),
                        value: true
                    }
                },
                closeOnClickOutside: false
            }).then(result => {
                if(typeof result === "object"){
                    return;
                } else if (result) {
                    this.$store.state.workspace.getAllBlocks().forEach((block) => block.dispose());
                }
                const exampleXml = Blockly.Xml.textToDom(examples[example]);
                console.log(example, exampleXml)
                Blockly.Xml.domToWorkspace(exampleXml, Blockly.getMainWorkspace());
                setTimeout(() => {
                    this.$toast.open({
                        message: this.$t('examples.loaded', {
                            example
                        }),
                        type: "success",
                        dismissible: true,
                        duration: 10000
                    });
                }, (200));
            });
        }
    }
}
</script>