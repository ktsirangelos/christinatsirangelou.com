#!/bin/bash

SUFFIXES=("mobile" "laptop" "desktop")
WIDTHS=(600 1600 3200)
MAX_SIZES=(51200 307200 1048576) # Sizes in bytes (50KB, 300KB, 1MB)
OUTPUT_DIR="output"
QUALITY_DECREMENT=5

mkdir -p "$OUTPUT_DIR"

handle_signal() {
	echo ""
	echo "Script interrupted by user."
	exit 1
}

process_image() {
	local img="$1"
	local base_name="${img%.*}"
	local total_images="${#SUFFIXES[@]}"
	local progress=0

	for i in "${!SUFFIXES[@]}"; do
		suffix=${SUFFIXES[$i]}
		width=${WIDTHS[$i]}
		max_size=${MAX_SIZES[$i]}
		quality=100
		tmp_file="$OUTPUT_DIR/${base_name}_$suffix.webp"
		while true; do
			magick "$img" -resize "${width}x" -quality $quality "$tmp_file"
			file_size=$(stat -f%z "$tmp_file")
			if ((file_size <= max_size || quality <= QUALITY_DECREMENT)); then
				break
			fi
			quality=$((quality - QUALITY_DECREMENT))
		done
	done
}

trap 'handle_signal' SIGINT

for img in *.jpg *.png; do
	if [[ -f "$img" ]]; then
		process_image "$img"
	fi
done

echo "Images resized, converted to WebP, and compressed successfully!"
