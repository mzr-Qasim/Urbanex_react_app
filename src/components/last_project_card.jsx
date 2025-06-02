import project_card from '../assets/images/project-card-1.jpg'

export function LastProjectCard() {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="project-card">
                <a href="">
                    <figure>
                        <img src={project_card} loading='lazy' alt="" />
                    </figure>
                </a>
                <div className="card-caption pt-3">
                    <a href="www.google.com" className='pb-1'><h4>Cultural Complex Centre</h4></a>
                    <small>Muscat, Sultanate of Oman</small>
                </div>
            </div>
        </div>

    )
}