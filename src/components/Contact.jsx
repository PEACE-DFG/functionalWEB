import React from 'react'

function Contact() {
  return (
    <div  className='bg-secondary'>
       <div className='container p-4 mt-1'>
       <div className="row ">
            <div className="col">
            <img src="https://group-live.jumia.is/images/press/articles/jumia-listed-on-the-new-york-stock-exchange.png" alt="" style={{width:'50%'}} />
            </div>
            <div className="col">
                <h4 className='text-white mt-2'>NEW TO JUMIA?</h4>
                <h6 className='text-light mt-3'>Subscribe To Our News Letter To Get Update On Our New Offers</h6>
                <input type="email" className='mt-4' placeholder='Please Enter Your Email'/>
                <br />
                <button type="submit" className='mt-3' style={{border:'none'}}>SUBMIT</button>
            </div>
            <div className="col">
                <div className="row mt-3">
                    <div className="col">
            <img src="https://th.bing.com/th/id/OIP.GAmiTmLaSN1ogIw3BZa3NAHaBp?pid=ImgDet&rs=1" alt="" style={{width:'100%'}} />

                    </div>
                    <div className="col">
                        <h6 className='text-light'>DOWNLOAD JUMIA FEE APP</h6>
                    </div>
                </div>
                <h5 className='text-light'>Get Access To Exclusive Offers!</h5>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Contact