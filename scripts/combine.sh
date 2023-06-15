#!/usr/bin/env bash

if [ -z "$1" ]; then
    echo "You need to provide target directory"
    exit 1
fi

target_dir_path=$( cd "$1" && pwd )
target_dir_name=$(basename "$target_dir_path")
target_dir_parent=$(dirname "$target_dir_path")
output_file_path="$target_dir_path.md"

# Prepare

rm "$output_file_path" || true
touch "$output_file_path"
cd "$target_dir_path"

# Build file

echo '---' > "$output_file_path"

for filepath in *.md; do
    filename=$(basename "$filepath" .md)
    echo "$filename:" >> "$output_file_path"
    sed '1d;$d' "$filepath" | sed 's/^/ /' >> "$output_file_path"
done

echo '---' >> "$output_file_path"
