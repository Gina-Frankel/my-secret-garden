import "../styles/globals.css";
import Layout from "../components/_App/Layout";
// import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import App from "next/app";

class MyApp extends App {
  static async GetInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.GetInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps: pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    );
  }
}

export default MyApp;
