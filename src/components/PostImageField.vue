<template>
    <div class="post-details-imageupload">
        <img v-if="selectedImage" :src="selectedImage"/>
        <label class="btn" for="postImageField">UPLOAD IMAGE</label>
        <input type="file" id="postImageField"   @change="onFileChange" accept="image/png, image/jpeg"/>
         <div style="display: block;padding-bottom: 100%;"></div>
    </div>
</template>

<script>
export default {
    name: 'PostImageField',
    props: {
        value: {
            type: String,
            default: null,
        }
    },
    data(){
        return{
            selectedImage: null,
        }
    },
    watch: {
        value(newVal){
            this.selectedImage = newVal;
        }
    },
    mounted(){
        this.selectedImage = this.value;
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.selectedImage = URL.createObjectURL(file);
            console.log(this.selectedImage);
            this.$emit('input',this.selectedImage);
        }
    }
}
</script>