import React from 'react'
import './style.css'
import Footer from '../Footer/Footer'
function Distribution() {
  return (
    <div>
        
<div className='container-fluid bg-container '>
<section className='spices-masala'>
    <br></br>
<h1 >OUR PRODUCTS</h1>
<h2>MIDEAST PRODUCTS</h2>
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-12 col-lg-4">
				<div className="card my-5">
					<img src="images/spicecard.png" className="card-img-top" alt="..." />
					<h5 className="card-title text-light">
						SPICES
					</h5>
					<a href="#" className="btn btn-light">VIEW</a>
				</div>
			</div>
			<div className="col-12 col-lg-4">
				<div className="card my-5">
					<img src="images/masala.jpg" className="card-img-top" alt="..." />
					<h5 className="card-title text-light">
						MASALA
					</h5>
					<a href="#" className="btn btn-light">VIEW</a>
				</div>
			</div>
			<div className="col-12 col-lg-4">
				<div className="card my-5">
					<img src="images/others.jpg" alt="..." />
					<h5 className="card-title text-light">
                    OTHER GROCERIES
					</h5>
					<a href="#" className="btn btn-light">VIEW</a>
				</div>
			</div>
		</div>
	</div>
</section>
</div>

    </div>
  )
}

export default Distribution