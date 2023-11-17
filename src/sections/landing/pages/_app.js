import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>locofy-react-nextjs-project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fahkwang:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Font+Awesome+5+Brands:wght@400&display=swap");
body {
  margin: 0;
  line-height: normal;
}
`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
