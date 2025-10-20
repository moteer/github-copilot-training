# GitHub Copilot Training — Kursmaterial

Dieses Repository enthält Schulungsunterlagen, Übungsaufgaben und Beispielcode für einen Workshop oder ein Training zum Thema "GitHub Copilot".

Inhalt
- CURRICULUM.md — Überblick über die Module
- lessons/ — Lerninhalte zu jedem Thema
- exercises/ — Übungsaufgaben pro Modul
- solutions/ — Musterlösungen und Hinweise
- examples/ — kleine Beispielprojekte (Python, JavaScript)

Wie du das Repo lokal erstellst und auf GitHub hochlädst
1. Lokales Repo anlegen:
   git init
   git add .
   git commit -m "Initial commit: Copilot training materials"

2. Neues GitHub-Repository erstellen (z. B. github.com/DEIN_USER/github-copilot-training) — über die Website oder GitHub CLI:
   gh repo create github-copilot-training --public --source=. --remote=origin --push

3. Alternativ manuell:
   git remote add origin https://github.com/DEIN_USER/github-copilot-training.git
   git branch -M main
   git push -u origin main

Viel Erfolg beim Training! Bei Bedarf kann ich die Dateien anpassen, zusätzliche Sprachen beisteuern oder spezielle Übungen entwerfen.