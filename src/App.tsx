import { lazy, Suspense } from "react";
import "./reset.css";

const LayoutComp = lazy(() => import("./views/base/Layout"));
const renderLoader = () => null;

function App() {
  return (
    <Suspense fallback={renderLoader()}>
      <LayoutComp />
    </Suspense>
  );
}

export default App;
