<template>
  <div class="popup-view">
    <div class="search-box">
      <input type="text" v-model="pipelineValue">
    </div>
    <div class="pipeline-list">
      <label
        class="pipeline-item"
        v-for="(item, idx) in list" :key="idx"
        :for="item.pipelineId"
        @click="selectPipeline(item)"
      >
        <input type="checkbox" :name="item.pipelineId" :id="item.pipelineId">
        <span class="pipeline-name">{{ item.name }}</span>
      </label>
    </div>
    <button @click="getPipeList">获取流水线列表</button>
  </div>
</template>

<script setup lang="ts">
  import { getPipelines } from "@/api/pipelines";
  import { Ref, ref, watch } from "vue";
  import type {AxiosResponse} from "axios";

  interface ItemType {
    status?: number,
    pipelineId: number | string,
    name: string,
  }

  let list: Ref<ItemType[]> = ref([])
  const getPipeList = async ()=> {
    const res: any = await getPipelines()
    list.value = res.list
  }

  let pipelineValue: Ref<string> = ref('')
  const selectPipeline = (item: ItemType) => {
    console.log(item);
  }

  watch(pipelineValue, (value, oldValue, onCleanup) => {
    console.log(value);
  })

</script>

<style scoped>
  .popup-view {
    width: 500px;
    height: 200px;
  }
  .search-box {
    padding: 10px;
  }
  .pipeline-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .pipeline-item {
    padding: 10px 10px;
    background: aliceblue;
    display: flex;
    align-items: center;
  }

  .pipeline-item .pipeline-name {
    display: block;
    margin-left: 20px;
  }
</style>