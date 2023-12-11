import React from 'react';

function ServiceInfo({ title, subTitle, description, imageSrc, isSwaped }) {
	const LeftSide = (
		<div className="col-xs-12 col-lg-6">
			<h1>{title}</h1>
			<hr />
			<h2>{subTitle}</h2>
			{description?.paragraphs?.map((paragraph, index) => {
				let formatedText = `<span>${paragraph.text}</span>`;
				for (const boldedWord of paragraph.boldedWords) {
					formatedText = formatedText.replace(
						boldedWord,
						`<b>${boldedWord}</b>`
					);
				}

				return (
					<p
						key={index}
						dangerouslySetInnerHTML={{ __html: formatedText }}
					/>
				);
			})}
		</div>
	);

	const RightSide = (
		<div className="col-xs-12 col-lg-6">
			<img width={'100%'} src={imageSrc} alt="service info" />
		</div>
	);

	const content = isSwaped ? (
		<>
			{RightSide}
			{LeftSide}
		</>
	) : (
		<>
			{LeftSide}
			{RightSide}
		</>
	);

	return (
		<div className="d-lg-flex mb-3 row" style={{ marginTop: '60px' }}>
			{content}
		</div>
	);
}

export default ServiceInfo;
