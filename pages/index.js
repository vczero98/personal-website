import Head from "next/head";
import Main from "../components/Main";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vilmos Czeroczky</title>
        <link rel="shortcut icon" href="images/favicon.ico" />

        {/* Bootstrap CSS */}
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        /> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous"
        />

        {/* Bootstrap JS */}
        {/* TODO: Re-enable */}

        {/* <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
          integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
          crossOrigin="anonymous"
        ></script> */}

        {/* jQuery */}
        <script src="js/jquery.min.js"></script>

        {/* Custom Theme files */}
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />

        {/* font awesome icons */}
        {/* Custom Theme files */}
        {/* start-smoth-scrolling */}
        <script type="text/javascript" src="js/move-top.js"></script>
        <script type="text/javascript" src="js/easing.js"></script>
        {/* /start-smoth-scrolling */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script> */}
        {/* webfonts */}
        <link
          href="http://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Asap:400,700"
          rel="stylesheet"
          type="text/css"
        />
        {/* webfonts */}
      </Head>
      <Main />
    </>
  );
}
