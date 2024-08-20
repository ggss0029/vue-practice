<template>
    <v-container>
      <div style="display: flex; align-items: center; gap: 16px;">
        <!-- 시작일 선택기-->
        <v-dialog v-model="startDisplay">
          <template #activator="{ props }">
            <v-text-field
              label="시작일"
              v-bind="props"
              prepend-icon="mdi-calendar"
              :model-value="formattedStart"
              readonly
              style="width: 10%;"
            />
          </template>
          <template #default>
            <v-date-picker v-model="startDate" @update:model-value="startDisplay = false" />
          </template>
        </v-dialog>
        ~
        <!-- 종료일 선택기 -->
        <v-dialog v-model="endDisplay">
          <template #activator="{ props }">
            <v-text-field
              label="종료일"
              v-bind="props"
              :model-value="formattedEnd"
              readonly
              style="width: 8%;"
            />
          </template>
          <template #default>
            <v-date-picker v-model="endDate" @update:model-value="endDisplay = false" />
          </template>
        </v-dialog>
  
        <v-text-field v-model="search" 
          single-line
          style="width: 50%;"></v-text-field> 
        <v-btn @click="filterData" color="primary">Search</v-btn> 
      </div>
  
      <div style="display: flex; gap: 10px; justify-content: flex-end;">
        <v-btn @click="addItem" color="success">작성하기</v-btn>
        <v-btn @click="deleteSelectedItems" color="error">삭제하기</v-btn>
      </div>
  
      <v-data-table
        style="width: 100%"
        :items="filteredContents"
        :items-per-page="5"
        show-select
        v-model:selection="selectedItems"
        item-value="No"
      >
        <template #column.no="{ column }">
          <v-data-table-header :props="column.props">{{ column.text }}</v-data-table-header>
        </template>
  
        <template #item.제목="{ item }">
          <a @click="goToDetail(item)">
            {{ item.제목 }}
          </a>
        </template>
      </v-data-table>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  const search = ref('');
  const router = useRouter();
  
  const contents = ref([
      { No: 1, 제목: 'ABC', 작성자: 'pizza' ,작성날짜: '2024-08-09'},
      { No: 2, 제목: 'DEF', 작성자: 'chicken' ,작성날짜: '2024-07-09'},
      { No: 3, 제목: 'GHI', 작성자: 'hamburger' ,작성날짜: '2023-10-09'},
      { No: 4, 제목: 'Jon', 작성자: 'GimBap' ,작성날짜: '2024-12-09'},
      { No: 5, 제목: 'Vue', 작성자: 'Kimchi' ,작성날짜: '2024-01-09'},
      { No: 6, 제목: 'Tfy', 작성자: 'Salad' ,작성날짜: '2022-04-09'},
  ]);
  
  const startDisplay  = ref(false);
  const endDisplay  = ref(false);
  
  const startDate = ref<Date | null>(null);
  const endDate = ref<Date | null>(null);
  
  const formattedStart = computed(() => {
    return startDate.value ? startDate.value.toLocaleDateString() : '';
  });
  
  const formattedEnd = computed(() => {
    return endDate.value ? endDate.value.toLocaleDateString() : '';
  });
  
  const filteredContents = ref(contents.value);
  
  const selectedItems = ref<any[]>([]);
  
  const filterData = () => {
    filteredContents.value = contents.value.filter(item => {
      const itemDate = new Date(item.작성날짜);
      const isWithinDateRange = (!startDate.value || itemDate >= startDate.value) &&
                                (!endDate.value || itemDate <= endDate.value);
      return (
        isWithinDateRange &&
        Object.values(item).some(value => {
          return String(value).toLowerCase().includes(search.value.toLowerCase());
        })
      );
    });
  };
  
  const addItem = () => {
    router.push({ name: 'noticeWrite' });
  };
  
  const deleteSelectedItems = () => {
    const selectedNos = new Set(selectedItems.value.map(item => item.No));
    contents.value = contents.value.filter(item => !selectedNos.has(item.No));
    selectedItems.value = [];
    filterData();  // Apply filter again to update the displayed list
  };
  
  const goToDetail = (item: any) => {
    router.push({ name: 'noticeDetail', params: { id: item.No } });
  };
  </script>
  
  <style>
  /* Optional: Add custom styling here */
  </style>
  