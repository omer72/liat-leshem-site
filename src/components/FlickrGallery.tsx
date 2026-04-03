"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

interface FlickrPhoto {
  title: string;
  link: string;
  media: { m: string };
  description: string;
}

const FLICKR_NSID = "88436546@N00";
const FEED_URL = `https://api.flickr.com/services/feeds/photos_public.gne?id=${FLICKR_NSID}&format=json&nojsoncallback=1`;

export default function FlickrGallery() {
  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(FEED_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Feed fetch failed");
        return res.json();
      })
      .then((data) => {
        setPhotos(data.items ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <Box className="text-center py-12">
        <Typography variant="body1" color="text.secondary">
          לא הצלחנו לטעון את התמונות. בקרו ב-Flickr לצפייה בגלריה המלאה.
        </Typography>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton
            key={i}
            variant="rounded"
            sx={{ aspectRatio: "1/1", width: "100%", height: "auto", bgcolor: "rgba(255,255,255,0.06)" }}
          />
        ))}
      </Box>
    );
  }

  return (
    <Box className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {photos.map((photo) => {
        const largeSrc = photo.media.m.replace("_m.", "_b.");
        return (
          <a
            key={photo.link}
            href={photo.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block" }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                aspectRatio: "1/1",
                bgcolor: "#1A1A2E",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
                "&:hover .photo-overlay": {
                  opacity: 1,
                },
              }}
            >
              <img
                src={largeSrc}
                alt={photo.title || "תמונה מהגלריה"}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />
              {photo.title && (
                <Box
                  className="photo-overlay"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 1.5,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Typography variant="caption" sx={{ color: "#fff" }}>
                    {photo.title}
                  </Typography>
                </Box>
              )}
            </Box>
          </a>
        );
      })}
    </Box>
  );
}
