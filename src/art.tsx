import { h, render } from "preact";
import { ArtGrid } from "./ArtGrid/ArtGrid";

render(<ArtGrid />, document.getElementById("art-grid-root") as Element);
