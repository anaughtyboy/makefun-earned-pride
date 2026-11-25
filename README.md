# One Line of Earned Pride

[![make.fun](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/anaughtyboy/makefun-earned-pride/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/anaughtyboy/makefun-earned-pride/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)

Entry for the [One Line of Earned Pride](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557) bounty on [make.fun](https://make.fun).

## The line

> I fixed a bug at 2 a.m. that I created at 2 p.m. - growth.

One line, 58 characters: a quiet, earned moment of pride — a long effort finally landing, twelve hours apart.

## How it works

`main.ts` validates the line (1–240 characters, single line, no leading or trailing whitespace, no control characters), writes exactly the line to `MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) with no trailing newline, then reads the file back as bytes and confirms an exact match with no trailing newline.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later.
