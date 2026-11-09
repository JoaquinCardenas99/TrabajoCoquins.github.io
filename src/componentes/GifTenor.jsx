
import { useEffect } from "react";

function GifTenor({ postId }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [postId]);

  return (
    <div
      className="tenor-gif-embed"
      data-postid={postId}
      data-share-method="host"
      data-aspect-ratio="1"
      data-width="100%"
    />
  );
}

export default GifTenor;
