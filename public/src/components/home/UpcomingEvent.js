import React from 'react'
import img from '../img/event_bg.png'
function UpcomingEvent() {
  return (
    <div>
         <section style={{backgroundImage:`url(${img})`}} className="event_part section_padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="event_slider owl-carousel" >
                        <div className="single_event_slider">
                            <div className="row justify-content-end">
                                <div className="col-lg-6 col-md-6">
                                    <div className="event_slider_content">
                                        <h5>Upcoming Event</h5>
                                        <h2>Maldeve - Asia</h2>
                                        <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.
                                        </p>
                                        <p>date: <span>12 Aug 2019</span> </p>
                                        <p>Cost: <span>Start from $820</span> </p>
                                        <p>Organizer: <span> Martine Agency</span> </p>
                                        <div className="rating">
                                            <span>Rating:</span>
                                            <div className="place_review">
                                                <a href="#"><i className="fas fa-star"></i></a>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                            </div>
                                        </div>
                                        <a href="#" className="btn_1">Plan Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                                
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default UpcomingEvent
