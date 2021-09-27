import React from 'react'
import { PowerFul } from './styles/themes'

const Powerful = () => {
  return (
    <section className="design">
      <div className="powerful-container">
        <PowerFul />
        <div className="powerful-content">
          <div className="editor">
            <h1 className="editor-header">Free, Open and Simple</h1>
            <p className="content">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="robust">
            <h1 className="robust-header">Powerful Tooling</h1>
            <p className="content">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Powerful
