
import home_about from '../assets/images/home_about.jpg'

export function Home_About_Us_Section() {
    return (
        <section className="About_Us_Section">
            <div className="home_about_inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="col-inner left-section">
                                <div className="left-section-inner">
                                    <h2 className="section-title pb-5">
                                        We are your partner in creating a legacy building facade.
                                    </h2>
                                    <p className="pb-5">We are one of the leading developers in europe providing exquisitely designed modern living villas in unique locations. We have made out quality development an hallmark by incorporating the latest in contemporary architecture to suit your tastes and budget.</p>
                                    <a href="" className='theme-btn secondary-btn-icon'><span>READ MORE</span><i className='icon-theme-btn'></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="col-inner right-section">
                                <figure>
                                    <img src={home_about} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}