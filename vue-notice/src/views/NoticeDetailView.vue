<template>
  <v-container>
    <v-btn @click="goBack">목록으로</v-btn>

    <v-form>
      <div class="form-section">
        <div class="section-header">제목</div>
        <v-text-field
          v-model="item.제목"
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
        <v-checkbox
          v-model="isActive"
          label="활성화 여부"
          class="mt-2"
        ></v-checkbox>
      </div>

      <div class="form-section">
        <div class="section-header">추가 기능</div>
        <div class="checkbox-group">
          <v-checkbox v-model="disableSignup" label="기능1"></v-checkbox>
          <v-checkbox v-model="disableCraftsman" label="기능2"></v-checkbox>
          <v-checkbox v-model="disableLogin" label="기능3"></v-checkbox>
        </div>
      </div>

      <div class="form-section">
        <div class="section-header">설정</div>
        <v-combobox
          v-model="selectedOption"
          label="Combobox"
          :items="['1일', '2일', '3일']"
          class="mt-2 combobox-large"
        ></v-combobox>
      </div>

      <div class="form-section">
        <div class="section-header">내용</div>
        <Editor v-model="editorContent" class="editor-large"></Editor>
      </div>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Editor from '@/components/Editor.vue';

const route = useRoute();
const router = useRouter();

const item = ref<any>({
  제목: '', // 기본 값 설정
  작성자: '',
  작성날짜: '',
});

const dateTime = ref([new Date(), new Date()]);
const dateFormat = 'yyyy/MM/dd, HH:mm';

const isActive = ref(false);
const disableSignup = ref(false);
const disableCraftsman = ref(false);
const disableLogin = ref(false);
const selectedOption = ref('1일');
const editorContent = ref('');

onMounted(() => {
  const id = Number(route.params.id);

  // 예시 데이터
  const contents = [
    { No: 1, 제목: 'ABC', 작성자: 'pizza', 작성날짜: '2024-08-09' },
    { No: 2, 제목: 'DEF', 작성자: 'chicken', 작성날짜: '2024-07-09' },
    { No: 3, 제목: 'GHI', 작성자: 'hamburger', 작성날짜: '2023-10-09' },
    { No: 4, 제목: 'Jon', 작성자: 'GimBap', 작성날짜: '2024-12-09' },
    { No: 5, 제목: 'Vue', 작성자: 'Kimchi', 작성날짜: '2024-01-09' },
    { No: 6, 제목: 'Tfy', 작성자: 'Salad', 작성날짜: '2022-04-09' },
  ];

  const foundItem = contents.find(c => c.No === id);
  if (foundItem) {
    item.value = { ...foundItem };
  }
});

const goBack = () => {
  router.back();
};
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
  width: 100%; /* 입력 필드를 전체 너비로 확장 */
}

.date-picker-large {
  width: 100%; /* 날짜 선택기를 전체 너비로 확장 */
}

.combobox-large {
  width: 100%; /* 콤보박스를 전체 너비로 확장 */
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
  width: 100%; /* 에디터를 전체 너비로 확장 */
}

.mt-2 {
  margin-top: 8px;
}
</style>
