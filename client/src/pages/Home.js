import React from 'react'
import Search from '../components/TextInput'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="home content-wrapper flex-col">
      <div className="content flex-col">
        <div className="discover flex-col">
          <h2>Discover</h2>
          <h4>Trending</h4>
          <section className="card-wrapper flex-row">
            <Card>
              <div className="mask flex-col">
                <div className="card-content">
                  <h3>Guitarists in Seattle</h3>
                  <p>Lefties only</p>
                </div>
              </div>
              <img
                src="https://p1.hiclipart.com/preview/786/891/792/kurt-cobain-png-clipart.jpg"
                alt="se"
              />
            </Card>
            <Card>
              <div className="mask flex-col">
                <div className="card-content">
                  <h3>Singers in SoCal</h3>
                  <p>*Actual singing ability not required</p>
                </div>
              </div>
              <img
                src="https://freepikpsd.com/wp-content/uploads/2019/10/anthony-kiedis-png-11-Free-PNG-Images-Transparent.png"
                alt="sc"
              />
            </Card>
            <Card>
              <div className="mask flex-col">
                <div className="card-content">
                  <h3>Sea Shanties in Boston</h3>
                  <p>Ship up to Boston with us!</p>
                </div>
              </div>
              <img
                src="https://montrealrampage.com/wp-content/uploads/2014/08/Dropkick-Murphys-2011-dropkick-murphys-20110766-2560-1603.jpg"
                alt="bo"
              />
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
