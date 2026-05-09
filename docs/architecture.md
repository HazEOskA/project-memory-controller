# Architecture

Pipeline:
User → Kernel → Engines → Memory → Validator → Deploy

Frontend directory model:
- components: reusable UI blocks
- layout: shell and navigation
- pages: page-level compositions
- modules: domain-specific visual logic
- terminal: terminal-focused UI
- data: static display data
- styles: global styling
- hooks/lib: behavior and utilities
