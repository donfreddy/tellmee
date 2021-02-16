## Installation

```sh
$ npm install -g tellmee
```

How to use:

```bash
$ tellmee <command> [--options]
```

Example:

```bash
$ tellmee quote --cat=programming
```

Output:

```bash
Measuring programming progress by lines of code is like measuring aircraft
building progress by weight. - Bill Gates
```

## Command Line Options

This tellmee cli can also be further configured with the following command line flags.

    Usage: tellmee <command>

    where <command> is one of: joke, quote, inspire

    [--options]

        --version         output the version number
    -c, --cat             display joke by specific category support (general|programming)
                          (defaults  to random)
    -l, --lang            add language support (en|fr) (defaults to en)
    -h, --help            output usage information

## License

[MIT](LICENSE)
