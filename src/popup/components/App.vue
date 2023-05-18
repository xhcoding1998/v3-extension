<template>
  <div class="popup-view">
    <div class="sticky-box">
      <h3>流水线信息</h3>
      <div class="form">
        <!-- <p class="form-item">
           运行最新提交的分支（不勾选采取默认项）：<input type="checkbox" v-model="form.runLastedBranch">
        </p> -->
        <p class="form-item">
          流水线：<input class="search-input" type="text" v-model="form.keywords" placeholder="请输入要查询的流水线">
        </p>
      </div>
      <div class="handle-btn">
        <button @click="getPipeList">获取流水线列表</button>
        <button @click="runPipeList('dev')">运行测试流水线</button>
        <button @click="runPipeList('pro')">运行生产流水线</button>
      </div>
      <h3>搜索框：</h3>
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
  import {reactive, ref, watch} from "vue";
  import type { Ref } from "vue"

  interface ItemType {
    checked: boolean,
    status?: number,
    pipelineId: number | string,
    name: string,
  }

  interface FormType {
    runLastedBranch: boolean,
    keywords: string
  }

  interface RunType extends FormType {
    env: string,
    list: ItemType[]
  }

  // 表单信息
  let form = reactive<FormType>({
    runLastedBranch: false,
    keywords: ''
  })

  //  获取流水线列表
  let list = ref<ItemType[]>([])
  const getPipeList = async () => {
    const res: any = await getPipelines(form)
    list.value = res.list.map((item: ItemType): ItemType => {
      return { ...item, checked: false }
    })
  }

  // 获取checkbox元素
  let checkboxDoms = ref<Element[]>([])
  const handleRef = (el: Element, item: ItemType) => {
    checkboxDoms.value.push(el)
  }

  //  监听搜索值
  let pipelineValue = ref<string>('')
  let searchList = ref<ItemType[]>([])
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
    const data: RunType = {
      env,
      list: list.value.filter(item => item.checked),
      ...form,
    }
    pipelineValue.value = ''
    list.value.forEach(item=> item.checked = false)

    console.log(data);

    const res = await runPipelines(data)
  }

</script>

<style scoped>
  .popup-view {
    width: 500px;
    height: 600px;
    overflow: auto;
    padding: 0 10px;
    box-sizing: border-box;
  }
  h3 {
    padding: 10px 0;
  }
  .search-box {
    box-sizing: border-box;
    display: flex;
    position: relative;
    margin-bottom: 10px;
  }
  .search-input {
    width: 100%;
    height: 30px;
    display: block;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .search-box .search-list {
    width: 100%;
    max-height: 200px;
    background: #FFFFFF;
    position: absolute;
    top: 40px;
    left: 0;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: auto;
    padding: 0 10px;
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1);
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

  .sticky-box {
    position: sticky;
    background: #FFFFFF;
    top: 0;
    left: 0;
  }
  .handle-btn {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 10px 0;
  }
  .form {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
  .form-item {
    display: flex;
    align-items: center;
  }
  .form-item .search-input {
    flex: 1;
  }
</style>