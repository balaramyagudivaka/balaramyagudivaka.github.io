import { createRoot } from "react-dom/client";
import "./index.css";

(async () => {
	try {
		const { default: App } = await import("./App.tsx");
		createRoot(document.getElementById("root")!).render(<App />);
	} catch (err) {
		const root = document.getElementById("root");
		if (root) {
			root.innerHTML = `<pre style="white-space:pre-wrap;color:#c53030;background:#fff;padding:16px;border-radius:8px;font-family:monospace;">${String(
				(err && (err.stack || err.message)) || err
			)}</pre>`;
		}
		console.error(err);
	}
})();

// Debug overlay removed — React mount confirmed in console.
