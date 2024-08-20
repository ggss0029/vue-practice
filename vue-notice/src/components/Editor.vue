<template>
  <div id="app" style="width: 100%;">
      <ckeditor
          v-model="editorData"
          :editor="editor"
          :config="editorConfig"
      />
  </div>
</template>

<script>
import {
	ClassicEditor,
	AccessibilityHelp,
	Alignment,
	Autosave,
	Bold,
	Essentials,
	Heading,
	Italic,
	Link,
	Paragraph,
	SelectAll,
	SpecialCharacters,
	Strikethrough,
	Underline,
	Undo
} from 'ckeditor5';


import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

export default {
  name: 'app',
  data() {
      return {
          editor: ClassicEditor,
          editorData: '<p>Hello from CKEditor 5 in Vue!</p>',
          editorConfig: {
              plugins: [ AccessibilityHelp,
                        Alignment,
                        Autosave,
                        Bold,
                        Essentials,
                        Heading,
                        Italic,
                        Link,
                        Paragraph,
                        SelectAll,
                        SpecialCharacters,
                        Strikethrough,
                        Underline,
                        Undo ],
                        heading: {
                          options: [
                            {
                              model: 'paragraph',
                              title: 'Paragraph',
                              class: 'ck-heading_paragraph'
                            },
                            {
                              model: 'heading1',
                              view: 'h1',
                              title: 'Heading 1',
                              class: 'ck-heading_heading1'
                            },
                            {
                              model: 'heading2',
                              view: 'h2',
                              title: 'Heading 2',
                              class: 'ck-heading_heading2'
                            },
                            {
                              model: 'heading3',
                              view: 'h3',
                              title: 'Heading 3',
                              class: 'ck-heading_heading3'
                            },
                            {
                              model: 'heading4',
                              view: 'h4',
                              title: 'Heading 4',
                              class: 'ck-heading_heading4'
                            },
                            {
                              model: 'heading5',
                              view: 'h5',
                              title: 'Heading 5',
                              class: 'ck-heading_heading5'
                            },
                            {
                              model: 'heading6',
                              view: 'h6',
                              title: 'Heading 6',
                              class: 'ck-heading_heading6'
                            }
                          ]
                        },
              toolbar: [ 'undo',
                        'redo',
                        '|',
                        'selectAll',
                        '|',
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        'strikethrough',
                        '|',
                        'specialCharacters',
                        'link',
                        '|',
                        'alignment',
                        '|',
                        'accessibilityHelp' ],
              link: {
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://',
                decorators: {
                  toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                      download: 'file'
                    }
                  }
                }
              },
          }
      };
  }
};
</script>