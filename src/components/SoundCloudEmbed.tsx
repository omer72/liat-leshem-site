"use client";

import Box from "@mui/material/Box";

interface SoundCloudEmbedProps {
  trackUrl: string;
  height?: number;
}

export default function SoundCloudEmbed({ trackUrl, height = 166 }: SoundCloudEmbedProps) {
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23d4726a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

  return (
    <Box sx={{ borderRadius: 2, overflow: "hidden", mb: 2 }}>
      <iframe
        width="100%"
        height={height}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={src}
        title="SoundCloud Player"
      />
    </Box>
  );
}
