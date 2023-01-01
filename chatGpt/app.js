require('dotenv').config();
// import { ChatGPTAPIBrowser } from 'chatgpt'
const ChatGPTAPIBrowser = require('chatgpt')


import { ChatGPTAPIBrowser } from 'chatgpt'

async function example() {
  // use puppeteer to bypass cloudflare (headful because of captchas)
  const api = new ChatGPTAPIBrowser({
    email: process.env.OPENAI_EMAIL,
    password: process.env.OPENAI_PASSWORD
  })

  await api.initSession()

  const result = await api.sendMessage('Hello World!')
  console.log(result.response)
}