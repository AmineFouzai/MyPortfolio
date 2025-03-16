import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';


export default defineConfig({
  plugins: [pluginReact(),

  ],
  tools: {
    rspack(config, { appendPlugins }) {
      // Only register the plugin when RSDOCTOR is true, as the plugin will increase the build time.
      if (true) {
        appendPlugins(
          new RsdoctorRspackPlugin({
            // plugin options
          }),
        );
      }
    },
  },
});
