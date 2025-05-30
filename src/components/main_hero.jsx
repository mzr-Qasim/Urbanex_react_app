
import main_hero from '../assets/images/main_hero_1.jpg'

export function MainHero() {
    return (
        <section className="main_hero_section">
            <div className="container custom-container-lg">
                <div className="main_hero_wrapper">
                    <img className='hero_img' src={main_hero} alt="" />
                    <div className="main_hero-caption">
                        <div className="container">
                            <h1 className='main_hero_heading pb-5'>HARMONY OF<span>SHAPES</span></h1>
                            <a href="" className='theme-btn primary-btn-icon'><i className='icon-theme-btn'></i>VIEW MORE</a>
                        </div>
                    </div>
                    <div className="main-hero-pagination">
                    </div>
                </div>
            </div>
        </section>

    )
}