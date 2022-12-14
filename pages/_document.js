import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-RWZR81B8RW"
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RWZR81B8RW', {
              page_path: window.location.pathname,
            });
          `,
					}}
				/>
				<meta charSet="utf-8" />
				<meta name="description" content="creative is nothing but a mind set free." />
				{/* <link rel="icon" href="/asset/favicon.ico" type="image/x-icon" /> */}
				<link rel="apple-touch-icon" sizes="180x180" href="/asset/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/asset/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/asset/favicon-16x16.png" />
				<link rel="manifest" href="/asset/site.webmanifest" />
				<link
					async
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
				/>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
