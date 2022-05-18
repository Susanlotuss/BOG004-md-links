# Markdown Links

Md-links is a library that allows you to validate and get the statistics of the links found in your Markdown (.md) files.

## Installation

To install the library you must type the following command in the terminal:

```bash
npm i md-links-susan
```
Once installed you can start using it.

## Usage

```python
'Command'
md-links <path-to-file> --validate --stats

# md-links <path-to-file>

'Return'
href: URL found.
text: Text inside the link (<a>).
file: Path of the file where the link was found.

# md-links <path-to-file> --validate

'Return'
href: URL found.
text: Text inside the link (<a>).
file: Path of the file where the link was found.
status: HTTP response code.
status message: "FAIL" in case of failure / "OK" in case of success.

# md-links <path-to-file> --stats

'Return'
Total: total links found
Unique: unique links found

# md-links <path-to-file> --validate --stats

'Return'
Total: total links found
Unique: unique links found
Broken: broken links found
```

