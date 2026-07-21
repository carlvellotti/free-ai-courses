---
name: convert-doc
description: "Convert documents between formats using pandoc with custom styling. Supports markdown to PDF, HTML, Word, and more. Use when the user says 'convert to PDF', 'convert doc', 'export as PDF', 'make a PDF', 'convert doc <file>'."
---

# Convert Document

Convert a document between formats using pandoc with custom styling from this skill's templates.

## Style Templates

Three styles are available in `.agents/skills/convert-doc/templates/`:

| Style | File | Description |
|-------|------|-------------|
| **Professional** | `clean-report.css` | Clean sans-serif, minimal design, business-appropriate |
| **Fun** | `fun.css` | Bright colors, rounded corners, playful feel |
| **Whimsical** | `whimsical.css` | Elegant serif, airy spacing, soft earth tones |

**Default:** Professional (`clean-report.css`) if the user does not specify a style.

## Process

1. Identify the source file and target format. If the user doesn't specify a target format, default to PDF.
2. **Ask which style the user wants.** Present the three options as a lettered menu in the thread:
   - **A)** Professional — clean and business-appropriate
   - **B)** Fun — bright and playful
   - **C)** Whimsical — elegant serif, soft earth tones

   Tell the user they can reply with just the letter. If the user already specified a style in their request, skip this step. If the user declines to choose, use Professional.
3. Read the chosen CSS template from `.agents/skills/convert-doc/templates/`.
4. Run pandoc with the template and these default options:
   - `--standalone` (always)
   - `--css=.agents/skills/convert-doc/templates/<chosen-style>.css` (for HTML and PDF output)
   - `--pdf-engine=wkhtmltopdf` or `--pdf-engine=weasyprint` (for PDF, use whichever is available)
   - `--toc` (include table of contents for documents with 3+ headings)
   - `--metadata title="<document title>"` (extract from first H1 or filename)
5. Output the converted file in the same directory as the source, with the new extension.

## Supported Conversions

- Markdown → PDF (default)
- Markdown → HTML (styled)
- Markdown → Word (.docx)
- HTML → PDF
- HTML → Markdown

## Notes

- Pandoc must be installed (`brew install pandoc`)
- For PDF output, a PDF engine must be available (weasyprint or wkhtmltopdf). If neither is installed, ask the user for permission to install one (`brew install weasyprint`), or offer a styled HTML file instead.
- The CSS templates in this folder control the visual styling of HTML and PDF output
