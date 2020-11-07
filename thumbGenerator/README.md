# Thumbnail generator

Generates a thumbnails for a directory of mp4s recursively. Intended to be run as a cronjob.

I created this tool to review large amounts of footage. It uses ffmpeg to slice thumbnails every X seconds from a video and imagemagick montage to build a thumbnail sheet thats placed in the same directory as the video.

**Note** the tool is prone to crashing if you give it anything weird (not sure what those crash conditions are, but they exist). It should be pretty fast but will eat cores for breakfast if you let it at more than 500GB of video to process.

Improvements to come in stability (maybe).
