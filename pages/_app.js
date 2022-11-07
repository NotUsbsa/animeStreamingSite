import "../styles/global.css";
import Layout from "../components/Layout/Layout";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <div className="BODY">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
