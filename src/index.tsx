import { Hono } from 'hono'
import { renderer } from './renderer'
import { renderContent, renderLiveContent } from './live'

const app = new Hono()

app.get('*', renderer)

app.get('/', async (c) => {
  // proxy http://api.hclyz.com:81/mf/json.txt to 443 80
  const apiUrl = 'http://api.hclyz.com:81/mf/json.txt'

  const response = await fetch(apiUrl)

  const data: any = await response.json();

  const content = await renderContent(data);

  return c.render(content, { title: '黄播导航' })
})
app.get('/:id', async (c) => {
  const id = c.req.param('id')
  // proxy http://api.hclyz.com:81/mf/json.txt
  const apiUrl = "http://api.hclyz.com:81/mf/json" + id + ".txt"
  const api = await fetch(apiUrl)
  const data: any = await api.json();
  const live_content = await renderLiveContent(data)
  return c.render(live_content, { title: id + " - 黄播导航" })
})

export default app
