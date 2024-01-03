import 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string }): Response
  }
}

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html>
        <head>
          {/* Add SEO tags */}
          <title>{title}</title>
          <meta name="description" content="黄播导航" />
          <meta name="keywords" content="直播导航, 黄播导航, 导航, 直播美女, 黄播, 在线约炮, 裸聊, 直播" />
          <meta name="author" content="ED" />

          {/* Add other head tags if needed */}

          {/* <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.4/css/bulma.min.css" /> */}
          <link href="/static/style.css" rel="stylesheet" />
        </head>
        <body><nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="/#">
                <img src="https://www.svgrepo.com/show/289435/tv-screen.svg" alt="Logo" />
              </a>
              <span class="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
              <div class="navbar-end">
              </div>
            </div>
          </div>
        </nav>{children}</body>
      </html>
    )
  },
  {
    docType: true
  }
)
