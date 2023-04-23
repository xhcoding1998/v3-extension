import {ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const config = reactive({
    env: 'dev',
    runAdmins: [ 13060870976 ], //  流水线管理员(可通过卡点的管理员)
    // , 2042169, 2244650
    runPipelineIds: [ 2037283, 2207166, 2310254, 2099486 ], // 需要执行的流水线id
    runCount: 0, // 执行次数
    pollingTime: 6000 * 10 * 10 , // 轮询查询接口间隔时间,单位: 分
    firstTip: false,
    cookies: {
      //  浏览器cookie中的XSRF-TOKEN
      'XSRF-TOKEN': 'e21fe83d-cdc5-4250-9f7d-b0a4426c3342',

      //  浏览器cookie中的login_aliyunid_csrf
      'login_aliyunid_csrf': '_csrf_tk_1540181695073947',

      //  浏览器cookie中的login_aliyunid_ticket
      'login_aliyunid_ticket': '7WRoux5IyoLJGaYh4ThYc*zRKEeyaTHkR6sN5VYvt0ofq1S1E2ml6JYlY4q9CyLstMknfiSc2GhOwNcWzj5bYLpKzKZ49O80KpzxYXWJ0WPzFXDzr7rhZ_Dua5Qyv2KMv85szYAdhP4$'
    },
    //  机器人webhook地址
    devRobotWebHook: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=773e9022-c8fd-484e-9d3b-30d5408f90a0', // 通知
    proRobotWebHook: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=2be9193b-c4fc-418c-bb7e-5cab1d755e73', //卡点
    //  机器人发送信息的content内容
    robotContent: '',
    //  状态列表
    aliStatus: {
      WAITING: 1,
      RUNNING: 2,
      SUCCESS: 3,
      FAIL: 4
    },
    statusList: {
      0: {
        color: 'comment',
        msg: '等待运行'
      },
      1: {
        color: 'warning',
        msg: '等待通过卡点'
      },
      2: {
        color: 'comment',
        msg: '运行中...'
      },
      3: {
        color: 'info',
        msg: '运行成功!'
      },
      4: {
        color: 'warning',
        msg: '运行失败!'
      }
    }
  })

  const changeCookies = (cookies) => {
    config.cookies = reactive(cookies)
    console.log(config.cookies);
  }

  return { config, changeCookies }
})
