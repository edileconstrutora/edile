# Memória do projeto EDILE

Esta pasta guarda a **memória do Claude Code** deste projeto, versionada no Git para
ficar disponível em qualquer computador onde você trabalhe.

## Como funciona

O Claude lê/escreve a memória num caminho local de cada máquina:

```
%USERPROFILE%\.claude\projects\<slug-do-projeto>\memory\
```

Esse caminho é específico de cada computador, então não viaja sozinho com o Git.
A solução é um **junction** (link de diretório do Windows) ligando aquela pasta local
a esta pasta `/memory` do repositório. Assim o Claude continua lendo do lugar de sempre,
mas os arquivos reais ficam aqui no Git.

## Configurar um computador novo

1. Clone o repositório e abra a pasta do projeto.
2. Rode uma vez, a partir da raiz do repo:

   ```powershell
   powershell -ExecutionPolicy Bypass -File .\memory\setup-junction.ps1
   ```

   (Não precisa de admin.)

Pronto. A partir daí:

- **Começar a trabalhar:** `git pull` traz a memória mais recente.
- **Terminar:** `git push` salva o que o Claude anotou nesta sessão.

> Mantenha o projeto no **mesmo caminho** em todas as máquinas
> (ex.: `D:\Projetos Claude\Edile`) para o slug bater. Se o caminho mudar,
> o script ainda funciona — ele recalcula o slug — mas cada caminho diferente
> cria um junction separado apontando para esta mesma pasta.

## Arquivos

- `MEMORY.md` — índice carregado no início de cada sessão (uma linha por memória).
- `*.md` — uma memória por arquivo (fato + frontmatter).
- `setup-junction.ps1` — script de configuração por máquina.
