// @ts-ignore
async function deleteDomainCookies() {
  const cookies = await chrome.cookies.getAll({ domain: '.aliyun.com', session: false })
  console.log(cookies);
}

deleteDomainCookies()