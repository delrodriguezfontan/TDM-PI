import React from "react";

function Home(){
    return (
        <React.Fragment>
        <section className="row cards" id="movies">
            <article className="single-card-movie">
               
                <div className="cardBody">
                    <h5 className="card-title">The Thursday Murder Club</h5>
                    <p className="card-text">A group of senior sleuths passionate about solving cold cases get plunged into
                        a real-life murder mystery in this comic crime caper.</p>
                    <a class="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
        </section>
        </React.Fragment>
    )
}
export default Home;