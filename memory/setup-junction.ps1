# Liga a pasta de memoria local do Claude (especifica de cada maquina)
# a esta pasta /memory versionada no Git.
#
# Rode UMA VEZ em cada computador novo, a partir da raiz do repo:
#   powershell -ExecutionPolicy Bypass -File .\memory\setup-junction.ps1
#
# Nao precisa de admin (junction de diretorio). Depois disso, o Claude
# le/escreve a memoria direto no repo -> basta git push / git pull.

$ErrorActionPreference = 'Stop'

$repoMemory = $PSScriptRoot                    # ...\Edile\memory
$repoRoot   = Split-Path $repoMemory -Parent   # ...\Edile

# Slug do projeto = caminho absoluto com :, \, /, espaco trocados por "-"
$slug        = ($repoRoot -replace '[:\\/ ]', '-')
$localMemory = Join-Path $env:USERPROFILE ".claude\projects\$slug\memory"

Write-Host "Repo  : $repoMemory"
Write-Host "Local : $localMemory"
Write-Host ""

# Ja e um link? Nada a fazer.
$existing = Get-Item $localMemory -ErrorAction SilentlyContinue
if ($existing -and $existing.LinkType) {
    Write-Host "Junction ja existe. Tudo certo." -ForegroundColor Green
    return
}

# Existe como pasta real: preserva no repo arquivos que ainda nao estao la, depois remove.
if ($existing) {
    Get-ChildItem $localMemory -File | ForEach-Object {
        $dest = Join-Path $repoMemory $_.Name
        if (-not (Test-Path $dest)) {
            Copy-Item $_.FullName -Destination $dest
            Write-Host "Preservado no repo: $($_.Name)"
        }
    }
    Remove-Item $localMemory -Recurse -Force
}

# Garante a pasta pai (...\projects\<slug>)
New-Item -ItemType Directory -Force -Path (Split-Path $localMemory -Parent) | Out-Null

# Cria o junction
cmd /c "mklink /J `"$localMemory`" `"$repoMemory`"" | Out-Null

if ((Get-Item $localMemory).LinkType) {
    Write-Host ""
    Write-Host "Junction criado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "Falha ao criar o junction." -ForegroundColor Red
}
