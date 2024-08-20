<template>
    <v-dialog :model-value="modalValue" @update:model-value="updateValue" max-width="500" persistent>
      <v-card>
        <v-card-title>
          <slot name="title"></slot>
        </v-card-title>
        <v-card-text>
          <slot name="content"></slot>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" @click="closeModal">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    modalValue: {
      type: Boolean,
      required: true,
    },
  });
  
  const emits = defineEmits(['update:modalValue']);
  
  const updateValue = (value: boolean) => {
    emits('update:modalValue', value);
  };
  
  const closeModal = () => {
    emits('update:modalValue', false);
  };
  </script>
  
  <style>
  </style>
  