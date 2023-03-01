import React from 'react'

const Wish = () => {
  return (
    <>
      <section className='section_wrapper'>
        <div className='container'>
          <div className='wishes-text'>
            <h1>Best wishes</h1>
            <img src=".\images\border.png" alt="wish-png" />
          </div>
          <div className='row justify-content-between align-item-center'>
            <div className='col col-lg-6 santa-img'>
              <img src=".\images\santa.png" alt="left-side-img" className='img-fluid' />
            </div>
            <div className='col col-lg-6 right-box'>
              <h3 className='text-read'> <img src=".\images\head.png" alt="logo" /> Harry Mike Wishes...</h3>

              <p className='text-1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam iure quo similique. Deserunt officia omnis odio non molestiae culpa eos, aliquid, ipsam voluptatibus quae nisi quis qui quod inventore fugit.
              </p>
              <p className='text-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam numquam impedit nesciunt a sapiente quo ullam? Doloribus minus quam adipisci alias minima voluptatum doloremque quae? Veniam saepe fugiat accusamus impedit.
              </p>
              <a href="!#" className='btn btn-warning'>Read More</a>
            </div>
          </div>
          <div className='row justify-content-between align-item-center '>
            <div className='col col-lg-6 right-box'>
              <h3 className='text-read'> <img src=".\images\head.png" alt="logo" /> Harry Mike Wishes...</h3>

              <p className='text-1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam iure quo similique. Deserunt officia omnis odio non molestiae culpa eos, aliquid, ipsam voluptatibus quae nisi quis qui quod inventore fugit.
              </p>
              <p className='text-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam numquam impedit nesciunt a sapiente quo ullam? Doloribus minus quam adipisci alias minima voluptatum doloremque quae? Veniam saepe fugiat accusamus impedit.
              </p>
              <a href="!#" className='btn btn-warning '>Read More</a>
            </div>
            <div className='col col-lg-6 santa-img-2'>
              <img src=".\images\wishes.png" alt="left-side-img" className='img-fluid'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Wish;

