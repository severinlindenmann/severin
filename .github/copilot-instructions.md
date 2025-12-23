---
description: Custom Blog and Service Page of Severin Lindenmann
applyTo: '**'
---

## Tech Stack
- **Frontend**: Next JS

## General Rules

- **NO information markdown files** unless explicitly requested
- Keep README.md files **short and simple** - only essential information
- Use **one `.env` file** at the project root for all services
- Ensure the project can run in **three modes**:
  1. Completely autonomous locally (without Docker)
  2. Docker Compose locally for testing
  3. Docker Compose on remote VPS server

## Frontend Guidelines

- Keep component structure clean and modular
- Try to reuse components wherever possible
- Focus is Mobile First design
- **Multi-language support**: This is a multi-language website (German CH/EN)

## Legacy Code
- Never introduce legacy code patterns
- Refactor existing legacy code when modifying related functionality or remove it entirely
- Always cleanup after doing new implementations

## Documentation
Try to use the tool context7 to get documentation about the tech stack tools used in this project for any questions regarding usage, best practices, and implementation details.

## Language
- verwende keine scharfen SS sondern schreibe gemäss schweizer rechtschreibung diese mit doppel ss aus

## Deployment / Production
We deploy this as a static page to firebase