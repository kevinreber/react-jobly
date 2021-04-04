import React from 'react';

function Alert({ type, messages }) {
	const alertList = messages.map((message) => (
		<p className="mb-0 small" key={message}>
			{message}
		</p>
	));

	return (
		<div className={`alert alert-${type}`} role="alert">
			{alertList}
		</div>
	);
}

export default Alert;
