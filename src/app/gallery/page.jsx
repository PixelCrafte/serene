const page = () => {
  return (
    <main className='m-0 p-0 box-border'>
      <div className='slider'>
        <div className="slide-acive">
          <img src="/images/" alt="something" className='object-cover'/>
        </div>
        <div className="slide-next">
          <div className="slide-next-img">
            <img src="" alt="" className='object-cover'/>
          </div>
        </div>
      </div>

      <div className="slider-content">
        <div className="slider-content-active">
          <h1 className='slider-text'>Tanatswa</h1>
        </div>
        <div className="sider-content-next">
          <h1 className='slider-text'>Worship</h1>
        </div>
      </div>
    </main>
  )
}

export default page
