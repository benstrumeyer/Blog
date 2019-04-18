import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { FontIcon } from 'react-md';
import { Button } from 'react-md';

export class Home extends Component {
    render() {
        return (
            <div>
				<Carousel
					renderCenterLeftControls={({ previousSlide }) => (
						<Button onClick={previousSlide} icon >
							<FontIcon iconClassName="fa fa-chevron-left" className="icon icon-link"></FontIcon>
						</Button>
					)}
					renderCenterRightControls={({ nextSlide }) => (
						<Button onClick={nextSlide} icon >
							<FontIcon iconClassName="fa fa-chevron-right" className="icon icon-link"></FontIcon>
						</Button>
					)}
					>
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
				</Carousel>
            </div>
        )
    }
}
