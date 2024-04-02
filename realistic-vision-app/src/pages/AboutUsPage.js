import { useOutletContext } from 'react-router-dom';
import office from '../assets/backgrounds/office-background.jpg';

function AboutUsPage() {
	const [content] = useOutletContext();
	const { AboutUs } = content;

	return (
		<div
			className="right-half-black"
			style={{
				background: `url(${office}) no-repeat`,
				backgroundSize: 'cover',
				backgroundPosition: 'fill',
				minHeight: '100vh',
				padding: 0,
				padding: 0,
				margin: 0,
				position: 'relative',
			}}
		>
			<div
				className="text-white"
				style={{
					position: 'absolute',
					top: '10%',
					fontFamily: 'fantasy',
					fontSize: '15px',
					width: '100%',
					textAlign: 'center',
					zIndex: 1,
				}}
			>
				<div
					className="d-grid"
					style={{ marginLeft: '55px', marginRight: '55px' }}
				>
					{AboutUs?.Sections?.map((section) => {
						return (
							<div className="row">
								<div className="col-12 col-lg-6 col-md-6"></div>
								<div className="col-12 col-sm-12 col-lg-6 col-md-6">
									{section?.paragraphs?.map((paragraph) => {
										return (
											<p
												style={{
													textAlign: 'left',
													marginBottom: '5px',
												}}
											>
												{paragraph?.text}
											</p>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default AboutUsPage;
