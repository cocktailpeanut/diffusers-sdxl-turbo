module.exports = {
  title: "Diffusers SDXL Turbo",
  icon: "icon.png",
  description: "Demo showcasing ~real-time Latent Consistency Model pipeline with Diffusers and a MJPEG stream server (https://github.com/radames/Real-Time-Latent-Consistency-Model)",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "venv")
    if (installed) {
      let running = await kernel.running(__dirname, "start.json")
      if (running) {
        return [
          { icon: "fa-solid fa-spin fa-circle-notch", text: "Running" },
          { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json" }
        ]
      } else {
        return [
          { icon: "fa-solid fa-power-off", text: "Start", href: "start.json", params: { fullscreen: true, run: true } },
        ]
      }
    } else {
      return [{ icon: "fa-solid fa-plug", text: "Install", href: "install.json", params: { run: true, fullscreen: true } }]
    }
  }
}
