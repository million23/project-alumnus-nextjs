const markdownComponents = {
	h1: (props) => <h1 {...props} className="mb-5 text-3xl font-bold" />,
	h2: (props) => <h2 {...props} className="mb-5 text-2xl font-bold" />,
	h3: (props) => <h3 {...props} className="mb-5 text-xl font-bold" />,
	h4: (props) => <h4 {...props} className="mb-5 text-lg font-bold" />,
	h5: (props) => <h5 {...props} className="text-md mb-5 font-bold" />,
	h6: (props) => <h6 {...props} className="mb-5 text-sm font-bold" />,
	p: (props) => <p {...props} className="mb-3 text-base-content" />,
	a: (props) => <a {...props} className="mb-3 text-base-content" />,
	ul: (props) => <ul {...props} className="mb-3 text-base-content" />,
	ol: (props) => <ol {...props} className="mb-3 text-base-content" />,
	li: (props) => <li {...props} className="mb-3 text-base-content" />,
	strong: (props) => <strong {...props} className="mb-3 text-base-content" />,
	em: (props) => <em {...props} className="mb-3 text-base-content" />,
	blockquote: (props) => (
		<blockquote {...props} className="mb-3 text-base-content" />
	),
	hr: (props) => <hr {...props} className="mb-3 text-base-content" />,
	br: (props) => <br {...props} className="mb-3 text-base-content" />,
	img: (props) => <img {...props} className="mb-3 text-base-content" />,
	pre: (props) => <pre {...props} className="mb-3 text-base-content" />,
	code: (props) => <code {...props} className="mb-3 text-base-content" />,
	del: (props) => <del {...props} className="mb-3 text-base-content" />,
	ins: (props) => <ins {...props} className="mb-3 text-base-content" />,
	table: (props) => <table {...props} className="mb-3 text-base-content" />,
	thead: (props) => <thead {...props} className="mb-3 text-base-content" />,
	tbody: (props) => <tbody {...props} className="mb-3 text-base-content" />,
	tr: (props) => <tr {...props} className="mb-3 text-base-content" />,
	td: (props) => <td {...props} className="mb-3 text-base-content" />,
	th: (props) => <th {...props} className="mb-3 text-base-content" />,
	span: (props) => <span {...props} className="mb-3 text-base-content" />,
	div: (props) => <div {...props} className="mb-3 text-base-content" />,
	emoji: (props) => <span {...props} className="mb-3 text-base-content" />,
	root: (props) => <div {...props} className="mb-3 text-base-content" />,
};

export const portableTextRender = {
	types: {
		code: (props) => <code {...props} className="mb-3 text-base-content" />,
		emoji: (props) => <span {...props} className="mb-3 text-base-content" />,
		root: (props) => <div {...props} className="mb-3 text-base-content" />,
		span: (props) => <span {...props} className="mb-3 text-base-content" />,
		div: (props) => <div {...props} className="mb-3 text-base-content" />,
		h1: (props) => <h1 {...props} className="mb-5 text-3xl font-bold" />,
		h2: (props) => <h2 {...props} className="mb-5 text-2xl font-bold" />,
		h3: (props) => <h3 {...props} className="mb-5 text-xl font-bold" />,
		h4: (props) => <h4 {...props} className="mb-5 text-lg font-bold" />,
		h5: (props) => <h5 {...props} className="text-md mb-5 font-bold" />,
		h6: (props) => <h6 {...props} className="mb-5 text-sm font-bold" />,
		p: (props) => <p {...props} className="mb-3 text-base-content" />,
		a: (props) => <a {...props} className="link mb-3 text-base-content" />,
		ul: (props) => (
			<ul {...props} className="mb-3 ml-10 flex flex-col text-base-content" />
		),
		ol: (props) => (
			<ol {...props} className="mb-3 ml-10 flex flex-col text-base-content" />
		),
		li: (props) => <li {...props} className="mb-3 text-base-content" />,
		strong: (props) => <strong {...props} className="mb-3 text-base-content" />,
	},
};

export default markdownComponents;
