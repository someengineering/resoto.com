#!/bin/bash
cd ..
npm run swizzle @docusaurus/theme-classic CodeBlock/CopyButton -- --eject --danger
git apply patches/copybutton.patch
