# Thumbnail generator

Generates a thumbnails for a directory of mp4s recursively. Intended to be run as a cron using the provided `cron.js`.

I created this tool to review large amounts of footage. It uses ffmpeg to slice thumbnails every X seconds from a video and imagemagick montage to build a thumbnail sheet thats placed in the same directory as the video. It should be pretty fast but will eat cores for breakfast if you let it at more than 500GB of video to process.

**Note** I haven't really tested the tool all that much so it could be prone to crashing. Improvements to come in stability (maybe).
