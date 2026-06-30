import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // We share the machine with other lockfiles; pin the workspace root
  // to this project so Next stops guessing.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
