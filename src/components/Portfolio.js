// Portfolio.js

import React from 'react'

export const Portfolio = () => {
  return (
	<section id="section-portfolio" className="page-section topmargin-lg bg--secondary">

					<div className="heading-block center">
						<h2>My Projects</h2>
						<span>Check Out my mind blowing projects.</span>
					</div>

          <div className="container clearfix">

						
						<ul id="portfolio-filter" className="portfolio-filter clearfix" data-container="#portfolio">

							<li className="activeFilter"><a href="/#" data-filter="*">Show All</a></li>
							<li><a href="/#" data-filter=".node">Node Js</a></li>
							<li><a href="/#" data-filter=".react">REACT-JS</a></li>
							<li><a href="/#" data-filter=".js">JAVASCRIPT</a></li>

						</ul>

						

						<div className="clear"></div>

					
						<div id="portfolio" className="portfolio grid-container portfolio-nomargin clearfix">

							<article className="portfolio-item react pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-1.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-1.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#"> Gifts  Delight
									<a href="https://github.com/aayushi1852/bootstrap-assignment" className="social-icon  si-small si-colored si-github"> <i className="icon-github"></i> <i className="icon-github"></i> </a>
										<a href="https://aayushi1852.github.io/bootstrap-assignment/" className="social-icon  si-small si-colored si-github"> <i className="icon-globe"></i> <i className="icon-globe"></i> 
										</a>
									
									</a></h3>
									<span><a href="/#">
										React JS
										
										</a>
										</span>

										
								</div>
							</article>

							

							<article className="portfolio-item react node pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-2.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-2.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">Flexx  
									
									<a href="https://github.com/jdhova/e-comm" className="social-icon  si-small si-colored si-github"> <i className="icon-github"></i> <i className="icon-github"></i> </a>

									<a href="https://e-comm-6609c.web.app/" className="social-icon  si-small si-colored si-github"> <i className="icon-globe"></i> <i className="icon-globe"></i> 
									</a>


										</a></h3>
										<span><a href="/#">React </a> , <a href="/#" >Firebase</a></span>
								</div>
							</article>

								

							<article className="portfolio-item js pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-3.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-3.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">Algorithms and Data Structures
									<a href="https://github.com/jdhova/JS-Algorithms-and-Data-Structures" className="social-icon  si-small si-colored si-github"> <i className="icon-github"></i> <i className="icon-github"></i> </a>

										
										</a></h3>
										<span><a href="/#">JAVASCRIPT</a></span>
								</div>
							</article>

	

							<article className="portfolio-item js pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-9b.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-9b.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">Cocktail Finder

									<a href="https://github.com/jdhova/cocktail-finder-api" className="social-icon  si-small si-colored si-github"> <i className="icon-github"></i> <i className="icon-github"></i> </a>
										<a href="https://jdhova.github.io/cocktail-finder-api/" className="social-icon  si-small si-colored si-github"> <i className="icon-globe"></i> <i className="icon-globe"></i> 
										</a>

										
										
										</a></h3>
										<span><a href="/#">JAVASCRIPT</a></span>
								</div>
							</article>
	

							<article className="portfolio-item js pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-5.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-5.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">JS Maths Game 
									<a href="https://github.com/jdhova/maths-game" className="social-icon  si-small si-colored si-github"> <i className="icon-github"></i> <i className="icon-github"></i> </a>
										<a href="https://jdhova.github.io/maths-game/" className="social-icon  si-small si-colored si-github"> <i className="icon-globe"></i> <i className="icon-globe"></i> 
										</a>
										
										
										</a></h3>
										<span><a href="/#">JAVASCRIPT </a></span>
								</div>
							</article>
							
							
							<article className="portfolio-item js pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-6.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-6.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">Music Player
									<a href="https://github.com/jdhova/music-player-project" className="social-icon  si-small si-colored si-github"> <i className="icon-github"></i> <i className="icon-github"></i> </a>
										<a href="https://jdhova.github.io/music-player-project/" className="social-icon  si-small si-colored si-github"> <i className="icon-globe"></i> <i className="icon-globe"></i> 
										</a>
										
										</a></h3>
									<span><a href="/#">JAVASCRIPT </a></span>
								</div>
							</article>
							
							<article className="portfolio-item js-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-7.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-7.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">Type Script Maths Game

									<a href="https://github.com/jdhova/typescript-game" className="social-icon  si-small si-colored si-github"> <i className="icon-github"></i> <i className="icon-github"></i> </a>
										<a href="https://jdhova.github.io/typescript-game/" className="social-icon  si-small si-colored si-github"> <i className="icon-globe"></i> <i className="icon-globe"></i> 
										</a>
										
										
										</a></h3>
										<span><a href="/#">JAVASCRIPT </a></span>
								</div>
							</article>
							
							
						</div>


					</div>

				</section>
  )
}

export default Portfolio