#!/bin/bash
# Creates course material zip for GitHub Release

VERSION=$1

if [ -z "$VERSION" ]; then
  echo "Usage: ./scripts/create-release.sh v1.1.0"
  exit 1
fi

echo "Creating release zip for $VERSION..."

# Create releases directory
mkdir -p releases

# Create complete course zip
# Include: .cursor, company-context, lesson-modules, README.md, LICENSE
# Exclude: website, Instructor files, .git, .DS_Store, __pycache__, .env

zip -r releases/complete-course.zip \
  .cursor \
  company-context \
  lesson-modules \
  README.md \
  LICENSE \
  CLAUDE.md \
  -x "*.DS_Store" \
  -x "__pycache__/*" \
  -x "*.pyc" \
  -x ".env" \
  -x "lesson-modules/3-nano-banana/outputs/*" \
  -x "lesson-modules/3-nano-banana/outputs/.gitkeep"

echo ""
echo "✅ Release zip created:"
ls -lh releases/complete-course.zip

echo ""
echo "Contents:"
unzip -l releases/complete-course.zip | head -50

echo ""
echo "Next steps:"
echo "1. Test the zip by extracting and opening in Cursor"
echo "2. Create GitHub release:"
echo "   gh release create $VERSION releases/complete-course.zip --title \"Cursor for PMs $VERSION\" --notes-file RELEASE_NOTES.md"

