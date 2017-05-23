<template>
  <div class="components-container">
    <code>富文本插件tinymce</code>
    <div class="editor-container">
      <MdEditor  id='contentEditor' ref="contentEditor" v-model='content' :height="300" :zIndex='20'></MdEditor>
    </div>
  </div>
</template>
<script>
    import MdEditor from 'components/MdEditor';

    export default {
      components: { MdEditor },
      data() {
        return {
          content: 'Simplemde'
        }
      }
    };
</script>


