import React, { Fragment } from 'react'
import { Illustration } from './styles/themes'

const Designed = () => {
  return (
    <section className="design">
      <div className="designed-container">
        <h1 className="designed-header">Designed for the future</h1>
        <div className="designed-content">
          <div className="editor">
            <h1 className="editor-header">Introducing an extensible editor</h1>
            <p className="content">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              managementof mutiple blogs and allows easy manipulation of embeds
              such as images, videos and Markdown. Extensibility with plugins and
              themes provide easy ways to add functionality or change the looks
              of a blog.
            </p>
          </div>
          <div className="robust">
            <h1 className="robust-header">Robust content management</h1>
            <p className="content">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you are in full control.
            </p>
          </div>
        </div>
        <Illustration/>
      </div>
    </section>
  )
}

export default Designed
