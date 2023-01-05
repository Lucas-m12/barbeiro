import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			devOptions: {
				enabled: true
			},
			injectRegister: "auto",
			includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
			manifest: {
				name: "Barber",
				short_name: "Barber",
				description: "",
				theme_color: "#312E38",
				// background_color: "#312E38",
				display: "standalone",
				scope: "/",
				start_url: "/",
				icons: [
					{
						src: "/icon-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: "/icon-256x256.png",
						sizes: "256x256",
						type: "image/png"
					},
					{
						src: "/icon-384x384.png",
						sizes: "384x384",
						type: "image/png"
					},
					{
						src: "/icon-512x512.png",
						sizes: "512x512",
						type: "image/png"
					}
				]
			}
		})
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@public": path.resolve(__dirname, "public")
		}
	}
});
