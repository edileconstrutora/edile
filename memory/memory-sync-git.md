---
name: memory-sync-git
description: A memória deste projeto é versionada no Git (/memory) e sincronizada entre máquinas via junction.
metadata:
  type: project
---

A memória do Claude deste projeto vive em `/memory` no repositório [[edile-project]]
(GitHub: yagobsantosdesign-ux/edile, branch `main`) e é ligada à pasta local
`%USERPROFILE%\.claude\projects\<slug>\memory` por um **junction** do Windows.

**Why:** o usuário trabalha de computadores diferentes no mesmo projeto e precisa da
memória disponível em qualquer máquina.

**How to apply:** escrever na memória normalmente (o junction faz cair em `/memory`).
Para sincronizar: `git pull` ao começar, `git push` ao terminar. Em máquina nova,
rodar `memory\setup-junction.ps1` uma vez. Detalhes em `memory/README.md`.
