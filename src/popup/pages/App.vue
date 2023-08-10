<script setup lang="ts">
  import { getBranch, getPipelines, runPipelines } from "@/api/pipelines";
  import {  reactive, ref, watch, type ComponentPublicInstance } from "vue";

  interface ItemType {
    checked?: boolean,
    status: number,
    pipelineId: number | string,
    name: string,
    projectId: number | string,
    connectionId: number | string,
    branchName: string
    branchList?: any[]
  }

  interface FormType {
    isValidate: boolean,
    keywords: string
  }

  interface RunType extends FormType {
    env: string,
    list: ItemType[]
  }

  // 表单信息
  let form = reactive<FormType>({
    isValidate: false,
    keywords: ''
  })

  //  获取流水线列表
  let list = ref<ItemType[]>([])
  const getPipeList = async () => {
    const res: any = await getPipelines(form)
    list.value = res.list.map((item: ItemType): ItemType => {
      return { ...item, checked: false, branchName: '', branchList: [] }
    })
  }

  // 获取checkbox元素
  let checkboxDoms = ref<(Element)[]>([])
  const handleRef = (el: any, item: ItemType) => {
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
      list: list.value.filter(item => item.checked).map(item => {
        return {
          status: item.status,
          name: item.name,
          pipelineId: item.pipelineId,
          projectId: item.projectId,
          connectionId: item.connectionId,
          branchName: item.branchName,
        }
      }),
      ...form,
    }
    pipelineValue.value = ''
    list.value.forEach(item=> item.checked = false)

    const res = await runPipelines(data)
  }

  const handleRunning = () => {
    if(form.isValidate) {
      runPipeList('pro')
    }else {
      runPipeList('dev')
    }
  }

  const branchPipeline = async (item: ItemType) => {
    if(item.branchList && item.branchList.length) return
    const res: any = await getBranch({
      projectId: item.projectId,
      connection: item.connectionId,
    })
    item.branchList = res.list
  }

</script>

<template>
  <div class="popup-view">
    <div class="sticky-box">
      <h3>流水线信息</h3>
      <div class="form">
        <p class="form-item">
          流水线名称：
          <input
            class="search-input" type="text" v-model="form.keywords"
            placeholder="请输入要查询的流水线(可不填)">
          <button @click="getPipeList">获取流水线列表</button>
        </p>
        <p class="form-item">
          是否需要卡点：<input type="checkbox" v-model="form.isValidate">
          <button @click="handleRunning">运行</button>
        </p>
      </div>
      <h3>搜索框：</h3>
      <div class="search-box">
        <input class="search-input" type="text" v-model="pipelineValue" placeholder="请输入流水线名称">
        <div v-if="searchList.length" class="search-list pipeline-list">
          <div class="pipeline-temp">
            <div class="pipeline-item-box" v-for="(item, idx) in searchList" :key="idx" @click="branchPipeline(item)">
              <label
                class="pipeline-item"
                :for="'s'+item.pipelineId"
                :ref="el => handleRef(el, item)">
                <div class="pipeline-info">
                  <input type="checkbox" :name="'s'+item.pipelineId" :id="'s'+item.pipelineId" v-model="item.checked">
                  <span class="pipeline-name">{{ item.name }}</span>
                </div>
                <!-- <a @click="branchPipeline(item)">获取分支</a> -->
              </label>
              <div class="branch-list">
                <template v-for="(branch, bIdx) in item.branchList">
                  <label class="branch-item" :for="'s'+idx+branch.name">
                    <input type="radio" :id="'s'+idx+branch.name" :value="branch.name" v-model="item.branchName">
                    {{ branch.name }}
                  </label>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pipeline-list">
      <div class="pipeline-temp">
        <div class="pipeline-item-box" v-for="(item, idx) in list" :key="idx" @click="branchPipeline(item)">
          <label
            class="pipeline-item"
            :for="'l'+item.pipelineId"
            :ref="el => handleRef(el, item)">
            <div class="pipeline-info">
              <input type="checkbox" :name="'l'+item.pipelineId" :id="'l'+item.pipelineId" v-model="item.checked">
              <span class="pipeline-name">{{ item.name }}</span>
            </div>
            <!-- <a @click="branchPipeline(item)">获取分支</a> -->
          </label>
          <div class="branch-list">
            <template v-for="(branch, bIdx) in item.branchList" :key="'l'+idx+branch.name">
              <label class="branch-item" :for="'l'+idx+branch.name">
                <input type="radio" :id="'l'+idx+branch.name" :value="branch.name" v-model="item.branchName">
                {{ branch.name }}
              </label>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .popup-view {
    width: 500px;
    height: auto;
    padding: 10px;
    box-sizing: border-box;
  }
  h3 {
    margin-bottom: 10px;
  }
  button {
    min-width: 100px;
    padding: 5px;
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
    height: auto !important;
    max-height: 200px !important;
    background: #FFFFFF;
    position: absolute;
    top: 40px;
    left: 0;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: auto;
    padding: 10px 10px;
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .pipeline-list {
    width: 100%;
    height: 380px;
    overflow-y: auto;
  }
  .pipeline-temp {
    widows: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .pipeline-item-box {
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    background: aliceblue;
  }

  .pipeline-item {
    width: 100%;
    word-break: break-word;
    padding: 10px 10px;
    box-sizing: border-box;
    background: aliceblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pipeline-item .pipeline-info {
    display: flex;
    align-items: center;
  }

  .pipeline-info .pipeline-name {
    display: block;
    margin-left: 10px;
  }

  .sticky-box {
    position: sticky;
    background: #FFFFFF;
    top: 0;
    left: 0;
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
  .form-item input {
    margin-right: 10px;
  }
  .form-item .search-input {
    flex: 1;
  }

  .branch-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .branch-item {
    display: flex;
    align-items: center;
    width: 100%;
    word-break: break-word;
  }
  .branch-item input {
    margin-right: 10px;
  }
</style>