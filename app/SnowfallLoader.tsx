"use client";

import { useEffect } from "react";

export default function SnowfallLoader() {
  useEffect(() => {
    import("../public/js/Snowflakes").then((module) => {
      module.startSnowfall();
    });
  }, []);

  return null;
}
