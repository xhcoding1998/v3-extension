<template>
  <div class="popup-view">
    <h3>FMP流水线插件</h3>
    <div class="search-box">
      <input class="search-input" type="text" v-model="pipelineValue" placeholder="请输入流水线名称">
      <div v-if="searchList.length" class="search-list pipeline-list">
        <label
          class="pipeline-item"
          v-for="(item, idx) in searchList" :key="idx"
          :for="item.pipelineId"
        >
          <input type="checkbox" :name="item.pipelineId" :id="item.pipelineId" v-model="item.checked">
          <span class="pipeline-name">{{ item.name }}</span>
        </label>
      </div>
    </div>
    <div class="handle-btn">
      <button @click="getPipeList">获取流水线列表</button>
      <button @click="runPipeList('dev')">运行测试流水线</button>
      <button @click="runPipeList('pro')">运行生产流水线</button>
    </div>
    <div class="pipeline-list">
      <label
        class="pipeline-item"
        v-for="(item, idx) in list" :key="idx"
        :for="item.pipelineId"
        :ref="el => handleRef(el, item)"
      >
        <input type="checkbox" :name="item.pipelineId" :id="item.pipelineId" v-model="item.checked">
        <span class="pipeline-name">{{ item.name }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getPipelines, runPipelines } from "@/api/pipelines";
  import { ref, watch } from "vue";
  import type { Ref } from "vue"

  interface ItemType {
    checked: boolean,
    status?: number,
    pipelineId: number | string,
    name: string,
  }

  //  获取流水线列表
  let list: Ref<ItemType[]> = ref([])
  const getPipeList = async () => {
    const res: any = await getPipelines()
    list.value = res.list.map((item: ItemType): ItemType => {
      return { ...item, checked: false }
    })
  }

  // 获取checkbox元素
  let checkboxDoms: Ref<Element[]> = ref([])
  const handleRef = (el: Element, item: ItemType) => {
    checkboxDoms.value.push(el)
  }

  //  监听搜索值
  let pipelineValue: Ref<string> = ref('')
  let searchList: Ref<ItemType[]> = ref([])
  watch(pipelineValue, (value, oldValue, onCleanup) => {
    if (!value.trim()) {
      return searchList.value = []
    }
    searchList.value = list.value.filter(item=> {
      return item.name.includes(value)
    })
  })

  //  运行流水线
  const runPipeList = async (env: 'dev' | 'pro')=> {
    const data = {
      env,
      list: list.value.filter(item => item.checked)
    }

    const res = await runPipelines(data)
    console.log(res);
  }

</script>

<style scoped>
  .popup-view {
    width: 500px;
    height: 300px;
    overflow: auto;
  }
  h3 {
    margin: 10px 0 0 0;
  }
  .search-box {
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    position: sticky;
    background: #FFFFFF;
    top: 0;
    left: 0;
  }
  .search-box .search-input {
    width: 100%;
    height: 30px;
    display: block;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .search-box .search-list {
    width: 100%;
    max-height: 200px;
    background: #FFFFFF;
    position: absolute;
    top: 40px;
    left: 0;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: auto;
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

  .handle-btn {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 10px;
  }
</style>