#!/usr/bin/env node --max-old-space-size=8192
import { cli } from "./CLI";

cli(process.argv.slice(1));
