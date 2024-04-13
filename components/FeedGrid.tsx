import { useEffect } from 'react';

const FeedGrid: React.FC = () => {
  useEffect(() => {
    // Define SubstackFeedWidget configuration
    (window as any).SubstackFeedWidget = {
      substackUrl: "beastcrimes.substack.com",
      posts: 10,
      layout: "center",
      hidden: ["author"],
      colors: {
        primary: "#CD0F0F",
        secondary: "#CD0F0F",
        background: "#000000",
      }
    };

    // Load Substack feed script
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/embeds/feed.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="substack-feed-embed" className="mt-40 ml-40 ">
      {/* Add margin-top using Tailwind CSS mt-8 class */}
    </div>
  );
};

export default FeedGrid;
