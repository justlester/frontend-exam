<template>
    <div ref="dialogOverlay" :class="{
        'dialog-overlay' : true,
        'is-show': value 
        }">
        <div class="dialog-card">
            <div class="dialog-card-title" v-text="title">Discard Changes?</div>
            <div class="dialog-card-text" v-text="text">Are you sure to discard changes?</div>
            <div class="dialog-card-actions">
                <button @click.stop="resolve(false)" class="btn text" v-text="cancelText"></button>
                <button @click.stop="resolve(true)" class="btn text" v-text="confirmText"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dialog',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        cancelText: {
            type: String,
            default: 'No'
        },
        confirmText: {
            type: String,
            default: 'Yes'
        }
    },
    watch: {
        value(newVal){
            var body = document.getElementsByTagName("body")[0];
            if(newVal){
                body.classList.add("is-disable-scroll");
            }else {
                body.classList.remove("is-disable-scroll");
            }
        }
    },
    mounted(){
        var that = this;
        window.onclick = function(event) {
            if (event.target == that.$refs.dialogOverlay) {
                that.$emit('input',false);
            }
        }
    },
    methods: {
        resolve(v){
            var body = document.getElementsByTagName("body")[0];
            body.classList.remove("is-disable-scroll");
            this.$emit('result',v);
            this.$emit('input',false);
        },
    }
}
</script>