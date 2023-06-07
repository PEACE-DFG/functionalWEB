import React from 'react'

function Bloge(props) {
  return (
    <div className='my-5 container '>
      <section className='text-white  container new '>
        <div className="post-whole">
          <div className="post-title">
            <h3>
            { "Title: " + " " +props.title}

            </h3>
          </div>
          <div className="post-body">
            <h5>
            { " Story: " + " " +props.body}

            </h5>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Bloge