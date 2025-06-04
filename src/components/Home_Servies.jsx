import services_img from '../assets/images/services.jpg'


export function Home_Services() {
    return (
        <section className="services">
            <div className="services-inner">
                <img src={services_img} loading='lazy' alt="" />
                <div className="services-caption">
                    <div className="container">
                        <h2 className="section-title">
                            <span className='pb-4'>
                                SERVICES</span>
                            This is what we do.
                        </h2>
                    </div>
                </div>
                <div className="services-cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="service-card">
                                    <h2>Planning</h2>
                                    <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                    <a href="" className='theme-btn secondary-btn'>READ</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-card">
                                    <h2>Interior</h2>
                                    <p>You may engage your architect to provide an interior design service, advising on loose furniture.</p>
                                    <a href="" className='theme-btn secondary-btn'>READ</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-card">
                                    <h2>Exterior</h2>
                                    <p>Working together with your architect, you will share your project needs, dreams and goals.</p>
                                    <a href="" className='theme-btn secondary-btn'>READ</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}