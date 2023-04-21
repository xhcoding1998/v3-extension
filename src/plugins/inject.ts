// @ts-ignore
async function getAllCookies() {
  const cookies = await chrome.cookies.getAll(
    { domain: '.aliyun.com',
      session: false
    })
  console.log(cookies);
}

getAllCookies()