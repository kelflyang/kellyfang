import "../styles/global.css";
import "../styles/tailwind.css"; // Include Tailwind CSS styles

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
