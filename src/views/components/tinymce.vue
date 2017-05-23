<template>
  <div class="components-container">
    <code>富文本插件tinymce</code>
    <div class="editor-container">
      <Tinymce :height=200 ref="editor" v-model="content"></Tinymce>
    </div>
    <!--<div class='editor-content'>
{{content}}
    </div>-->
  </div>
</template>
<script>
    import Tinymce from 'components/Tinymce';

    export default {
      components: { Tinymce },
      data() {
        return {
          content: 'Tinymce'
        }
      },
      methods: {

      }
    };
</script>


