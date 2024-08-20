<template>
    <v-container>
      <v-btn>목록으로</v-btn>
  
      <v-form>
        <div class="form-section">
          <div class="section-header">제목</div>
          <v-text-field
            label="제목"
            class="mt-2 text-field-large"
          ></v-text-field>
        </div>
  
        <div class="form-section">
          <div class="section-header">기간</div>
          <VueDatePicker
            v-model="dateTime"
            :format="dateFormat"
            range
            class="mt-2 date-picker-large"
          ></VueDatePicker>
            <v-checkbox label="활성화 여부"></v-checkbox>
        </div>
  
        <div class="form-section">
          <div class="section-header">추가 기능</div>
          <div class="checkbox-group">
            <v-checkbox label="기능1"></v-checkbox>
            <v-checkbox label="기능2"></v-checkbox>
            <v-checkbox label="기능3"></v-checkbox>
          </div>
        </div>
  
        <div class="form-section">
          <div class="section-header">설정</div>
          <v-combobox
            label="Combobox"
            :items="['1일', '2일', '3일']"
            class="mt-2 combobox-large"
          ></v-combobox>
        </div>
  
        <div class="form-section">
          <div class="section-header">내용</div>
          <Editor class="editor-large"></Editor>
        </div>
      </v-form>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import Editor from '@/components/Editor.vue';
  
  const dateTime = ref();
  const dateFormat = 'yyyy/MM/dd, HH:mm';
  
  onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    dateTime.value = [startDate, endDate];
  });
  </script>
  
  <style>
  .section-header {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 8px;
  }
  
  .form-section {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .text-field-large {
    width: 100%; 
  }
  
  .date-picker-large {
    width: 100%; 
  }
  
  .combobox-large {
    width: 100%; 
  }
  
  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .checkbox-group .v-checkbox {
    margin: 0;
  }
  
  .editor-large {
    width: 100%; 
  }
  
  .mt-2 {
    margin-top: 8px;
  }
  </style>
  